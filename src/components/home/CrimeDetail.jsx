import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CrimeDetailComponent = () => {
  const { id } = useParams(); // Get the ID from the URL
  console.log(id);
  const [crime, setCrime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCrime = async () => {
      try {
        const response = await fetch(
          `https://localhost:44334/api/Criminals/${id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCrime(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCrime();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-6 max-w-3xl">
      {crime && (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={crime.criminalPictureUrl}
            alt={`${crime.firstName} ${crime.lastName}`}
            className="w-full h-96 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">
              {crime.firstName} {crime.lastName} ({crime.nickName})
            </h2>
            <p>
              <strong>Gender:</strong> {crime.gender}
            </p>
            <p>
              <strong>Age:</strong> {crime.age}
            </p>
            <p>
              <strong>Location:</strong> {crime.lastKnownLocation}
            </p>
            <p>
              <strong>Description:</strong> {crime.criminalDescription}
            </p>
            <p>
              <strong>Nationality:</strong> {crime.nationality}
            </p>
            <p>
              <strong>Criminal History:</strong> {crime.criminalHistory}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CrimeDetailComponent;

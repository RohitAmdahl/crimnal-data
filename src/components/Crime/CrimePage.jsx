import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CrimePage = () => {
  const [crimes, setCrimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCrimes = async () => {
      try {
        const response = await fetch("https://localhost:44334/api/Criminals");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log(response);
        const data = await response.json();
        console.log("Data fetched all data:", data);
        setCrimes(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCrimes();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {crimes.map((crime) => (
        <div
          key={crime.criminalId}
          className="max-w-sm rounded overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <img
            className="w-full h-48 object-cover"
            src={crime.criminalPictureUrl}
            alt="Criminal"
          />
          <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2">
              {crime.firstName} {crime.lastName} ({crime.nickName})
            </h2>
            <p className="text-gray-700 text-base">
              <strong>Gender:</strong> {crime.gender}
            </p>
            <p className="text-gray-700 text-base">
              <strong>Age:</strong> {crime.age}
            </p>
            <p className="text-gray-700 text-base">
              <strong>Last Known Location:</strong> {crime.lastKnownLocation}
            </p>
            <p className="text-gray-700 text-base mt-2">
              <strong>Description:</strong> {crime.criminalDescription}
            </p>
          </div>
          <Link to={`/crime/${crime.criminalId}`} className="text-blue-500">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CrimePage;

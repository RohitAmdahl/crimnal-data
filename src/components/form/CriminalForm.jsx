import { useState } from "react";

const CreateCrimeForm = () => {
  // State to store the form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    nickName: "",
    gender: "",
    age: "",
    dateOfBirth: "",
    lastKnownLocation: "",
    criminalDescription: "",
    criminalHistory: "",
    nationality: "",
    criminalPictureUrl: "",
  });

  // State for handling loading and error
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Handle change in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Make the POST request to create a new criminal
      const response = await fetch("https://localhost:44334/api/Criminals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to create criminal");
      }
      console.log(response);

      // Handle success response
      setSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        nickName: "",
        gender: "",
        age: "",
        dateOfBirth: "",
        lastKnownLocation: "",
        criminalDescription: "",
        criminalHistory: "",
        nationality: "",
        criminalPictureUrl: "",
      });
    } catch (error) {
      // Handle error response
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-md">
      <h2 className="text-2xl font-bold mb-4">Create New Criminal</h2>

      {success && (
        <p className="text-green-600 mb-4">Criminal created successfully!</p>
      )}
      {error && <p className="text-red-600 mb-4">Error: {error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="nickName"
          value={formData.nickName}
          onChange={handleChange}
          placeholder="Nick Name"
          required
          className="border p-2 w-full"
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Age"
          required
          className="border p-2 w-full"
        />
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          placeholder="Date of Birth"
          required
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="lastKnownLocation"
          value={formData.lastKnownLocation}
          onChange={handleChange}
          placeholder="Last Known Location"
          required
          className="border p-2 w-full"
        />
        <textarea
          name="criminalDescription"
          value={formData.criminalDescription}
          onChange={handleChange}
          placeholder="Criminal Description"
          className="border p-2 w-full"
          required
        />
        <textarea
          name="criminalHistory"
          value={formData.criminalHistory}
          onChange={handleChange}
          placeholder="Criminal History"
          className="border p-2 w-full"
          required
        />
        <input
          type="text"
          name="nationality"
          value={formData.nationality}
          onChange={handleChange}
          placeholder="Nationality"
          required
          className="border p-2 w-full"
        />
        <input
          type="url"
          name="criminalPictureUrl"
          value={formData.criminalPictureUrl}
          onChange={handleChange}
          placeholder="Criminal Picture URL"
          className="border p-2 w-full"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white p-2 w-full rounded"
        >
          {loading ? "Submitting..." : "Create Criminal"}
        </button>
      </form>
    </div>
  );
};

export default CreateCrimeForm;

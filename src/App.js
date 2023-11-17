import React, { useState } from "react";
import PostalCodeForm from "./Components/PostalCodeForm/PostalCodeForm.js";
import LocationInfo from "./Components/LocationInfo/LocationInfo.js";
import "./index.css";
const App = () => {
  const [locationData, setLocationData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch location info based on postal code
  const fetchLocationInfo = async (postalCode) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.zippopotam.us/in/${postalCode}`
      );
      if (!response.ok) {
        throw new Error("Postal code not found");
      }
      const data = await response.json();
      console.log(data);
      setLocationData(data);
      setError(null);
    } catch (error) {
      setError(error.message);
      setLocationData(null);
    } finally {
      setLoading(false);
    }
  };

  // Function to clear location data and error
  const clearLocationInfo = () => {
    setLocationData(null);
    setError(null);
  };

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Zip Code Location Finder</h2>

      {/* Postal code form */}
      <PostalCodeForm onFormSubmit={fetchLocationInfo} />

      {/* Loading message */}
      {loading && <p className="loading-message">Loading...</p>}

      {/* Error message */}
      {error && <p className="error-message">Error: {error}</p>}

      {/* Display location information */}
      {locationData && <LocationInfo data={locationData} />}

      {/* Clear button */}
      <div className="mt-3">
        <button
          onClick={clearLocationInfo}
          style={{ margin: "20px auto", display: "block" }}
        >
          Clear
        </button>
      </div>
    </>
  );
};

export default App;

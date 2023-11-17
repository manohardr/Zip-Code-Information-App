import React from "react";
import "./LocationInfo.css"; // Import the CSS file

const LocationInfo = ({ data }) => {
  return (
    <div className="location-info">
      <h2>Location Information</h2>
      <p>
        Country: <span>{data.country}</span>
      </p>
      <p>
        Country Abbreviation: <span>{data["country abbreviation"]}</span>
      </p>
      <h3>Places</h3>
      <table>
        <tbody>
          <tr>
            <th>Place Name</th>
            <th>State</th>
            <th>State Abbreviation</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
          {data.places.map((place, index) => (
            <tr key={index}>
              <td>{place["place name"]}</td>
              <td>{place.state}</td>
              <td>{place["state abbreviation"]}</td>
              <td>{place.latitude}</td>
              <td>{place.longitude}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LocationInfo;

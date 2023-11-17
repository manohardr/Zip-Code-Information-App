import React, { useState } from "react";
import "./PostalCodeForm.css";

const PostalCodeForm = ({ onFormSubmit }) => {
  const [postalCode, setPostalCode] = useState("");
// Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(postalCode);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter postal code"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostalCodeForm;

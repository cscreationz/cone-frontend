import React from "react";

export default function PersonalDetails({ formData, setFormData }) {
  return (
    <div className="personal-details">
      <h2>Let's get to know you!</h2>

      <div className="input-groups">
        <div className="input-group">
          <label htmlFor="">Username:</label>
          <input type="text" />
        </div>
        <div className="input-group">
          <label htmlFor="">Firstname:</label>
          <input type="text" />
        </div>
        <div className="input-group">
          <label htmlFor="">Lastname:</label>
          <input type="text" />
        </div>
        <div className="input-group">
          <label htmlFor="">Date of birth:</label>
          <input type="date" />
        </div>


      </div>
    </div>
  );
}

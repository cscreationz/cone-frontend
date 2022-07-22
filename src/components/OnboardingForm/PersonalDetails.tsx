import React from "react";

export default function PersonalDetails({ formData, setFormData }) {
  return (
    <div>
      <h1>Personal details</h1>

      <div>
        <label htmlFor="">Username:</label>
        <input type="text" />
        <label htmlFor="">Firstname:</label>
        <input type="text" />
        <label htmlFor="">Lastname:</label>
        <input type="text" />
        <label htmlFor="">Date of birth:</label>
        <input type="date" />

      </div>
    </div>
  );
}

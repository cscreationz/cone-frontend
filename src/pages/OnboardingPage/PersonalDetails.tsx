import React from "react";
import Select from "react-select";

const countriesOptions = [
  { value: "IN", label: "India" },
  { value: "AL", label: "Algeria" },
  { value: "vanilla", label: "Vanilla" },
];

const stateOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function PersonalDetails({ formData, setFormData }) {
  return (
    <div className="onboard-details personal-details">
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
        <div className="input-group">
          <label htmlFor="">Country:</label>
          <Select options={countriesOptions} />
        </div>
        <div className="input-group">
          <label htmlFor="">State:</label>
          <Select options={stateOptions} />
        </div>
      </div>
    </div>
  );
}

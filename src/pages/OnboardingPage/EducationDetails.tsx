import React from "react";

export default function EducationDetails({ formData, setFormData }) {
  return (
    <div className="onboard-details personal-details">
      <h2>How about your school?</h2>

      <div className="input-groups">
        <div className="input-group">
          <label htmlFor="">Degree type:</label>
          <input type="text" />
        </div>
        <div className="input-group">
          <label htmlFor="">Are you a current student?</label>
          <input type="date" />
        </div>
        <div className="input-group">
          <label htmlFor="">Start date:</label>
          <input type="date" />
        </div>
        <div className="input-group">
          <label htmlFor="">End date:</label>
          <input type="date" />
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";

import Header from "../../components/Header/Header";
import EducationDetails from "./EducationDetails";
import PersonalDetails from "./PersonalDetails";
import SkillsDetails from "./SkillsDetails";
import "./OnboardingPage.css";

export default function OnboardingPage() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    dateOfBirth: "", // date type?
    country: "",
    state: "",

    degreeType: "",
    collegeName: "",
    areAlumni: false,

    skills: [],
    interests: [],
    socialLinks: {},
  });

  function PageDisplay() {
    if (page === 0) {
      return <PersonalDetails formData={formData} setFormData={setFormData} />;
    } if (page === 1) {
      return <EducationDetails formData={formData} setFormData={setFormData} />;
    }
    return <SkillsDetails formData={formData} setFormData={setFormData} />;
  }

  return (
    <div className="onboard">
      <Header />
      <div className="container">
        <div className="page-display">{PageDisplay()}</div>

        <button
          disabled={page === 0}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
          className="btn"
          type="button"
        >
          Prev
        </button>
        <button
          onClick={() => {
            if (page === 2) {
              alert("FORM SUBMITTED");
              console.log(formData);
            } else {
              setPage((currPage) => currPage + 1);
            }
          }}
          className="btn btn-primary"
          type="button"
        >
          {page === 2 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import EducationDetails from "./EducationDetails";
import PersonalDetails from "./PersonalDetails";
import SkillsDetails from "./SkillsDetails";

export default function OnboardingForm() {
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
    <div>
      <h1>Onboarding Form</h1>
      <h2>{page}</h2>
      <div>{PageDisplay()}</div>

      <button
        disabled={page === 0}
        onClick={() => {
          setPage((currPage) => currPage - 1);
        }}
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
        type="button"
      >
        {page === 2 ? "Submit" : "Next"}
      </button>
    </div>
  );
}

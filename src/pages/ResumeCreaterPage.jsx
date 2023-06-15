import React, { useState } from "react";

import ResumeTemplate from "../component/ResumeTemplate/ResumeTemplate";
import ResumeOption from "../component/ResumeOption";

const ResumeCreaterPage = () => {
  /* contact section  */
  const initialContactState = {
    name: "Uzair Ansari",
    email: "uzairans532@gmail.com",
    phone: "+91 7271 880 500",
  };

  const [contact, setContact] = useState(initialContactState);
  const handleContactDetails = (e) => {
    if (e.target.name === "phone" && e.target.value.length > 10) {
      return;
    }
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };
  /* contact section  */

  /* Skill Section */
  const [skill, setSkill] = useState("");
  const [skills, setSkils] = useState([]);

  const handleSkillInputValue = (data) => {
    setSkill(data);
  };
  const handleSkillsData = () => {
    if (skill) {
      const skillData = { id: skills.length + 1, skill };
      setSkils([...skills, skillData]);
      setSkill("");
    }
  };

  /* Education Section */
  const initialEducationState = {
    degree: "Uzair Ansari",
    college: "uzairansari532@gmail.com",
    year: 2019
  };

  const [education, setEducation] = useState(initialEducationState);
  const [educations, setEducations] = useState([]);

  const handleEducationDetails = (e) => {
    setEducation({
      ...education,
      [e.target.name]: e.target.value,
    });
  };
  const handleAddEducation = () => {
    setEducations([...educations, education]);
  };

  /* Work Experience Section */

  const initialWorkExperienceState = {
    comapny: "Uzair Ansari",
    designation: "uzairans532@gmail.com",
    year: 2019,
  };

  const [workExperience, setWorkExperience] = useState(
    initialWorkExperienceState
  );
  const [workExperienceData, setWorkExperienceData] = useState([]);

  const handleWorkExperienceDetails = (e) => {
    setWorkExperience({
      ...workExperience,
      [e.target.name]: e.target.value,
    });
  };
  const handleAddWorkExperience = () => {
    setWorkExperienceData([...workExperienceData, workExperience]);
  };

  /* Intrest Section */

  const [intrest, setIntrest] = useState("");
  const [intrestData, setIntrestData] = useState([]);

  const handleIntrestInputValue = (data) => {
    setIntrest(data);
  };
  const handleIntrestData = () => {
    if (intrest) {
      const intrests = { id: intrestData.length + 1, intrest };
      setIntrestData([...intrestData, intrests]);
      setIntrest("");
    }
  };
  /* Sumarry  Section*/
  const [summary, setsummary] = useState(
    "Results-oriented software developer with experience in building responsive web applications using modern technologies. Strong problem-solving skills and a passion for delivering high-quality software products."
  );
  const handleSummary = (e) => {
    setsummary(([e.target.name] = e.target.value));
  };

  /* Project Section */

  const initialProjectState = {
    projectname: "",
    projectdescription: "",
    projectfeatures: "",
    projecttechstack: "",
  };

  const [project, setProject] = useState(initialProjectState);
  const [techstack, setTechstack] = useState([]);
  const [feature, setfeature] = useState([]);
  const [projectData, setProjectData] = useState([]);

  const handleProjectData = () => {
    let data = {
      projectname: project.projectname,
      projectdescription: project.projectdescription,
      projectfeatures: feature,
      projecttechstack: techstack,
    };
    setProjectData([...projectData, data]);
  };

  const handleProjectChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleFeatureChange = () => {
    setfeature([...feature, project.projectfeatures]);
  };

  const handleTechStackChange = (e) => {
    setTechstack([...techstack, project.projecttechstack]);
  };

  return (
    <div className="d-flex justify-content-between px-4 mt-4 g-6 py-4">
      <div className="w-25 ">
        <ResumeOption
          {...{
            handleContactDetails,
            skill,
            handleSkillInputValue,
            handleSkillsData,
            handleEducationDetails,
            handleAddEducation,
            handleWorkExperienceDetails,
            handleAddWorkExperience,
            handleIntrestInputValue,
            handleIntrestData,
            intrest,
            handleSummary,
            summary,
            handleProjectChange,
            handleTechStackChange,
            handleFeatureChange,
            handleProjectData,
          }}
        />

      </div>
      <div className="w-75">
        {" "}
        <ResumeTemplate
          {...{
            contact,
            skills,
            educations,
            workExperienceData,
            intrestData,
            summary,
            projectData,
          }}
        />
      </div>
    </div>
  );
};

export default ResumeCreaterPage;

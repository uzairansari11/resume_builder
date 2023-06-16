import React, { useState } from "react";
import ResumeTemplate from "../component/ResumeTemplate/ResumeTemplate";
import ResumeOption from "../component/ResumeInputs/ResumeOption";
import SelectionComponent from "../component/ResumeInputs/SelectionComponent";
import { Button } from "react-bootstrap";
import { BiHomeAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";
const ResumeCreaterPage = () => {
  /* -------------contact section------------------------- */
  const initialContactState = {
    name: "Uzair Ansari",
    email: "uzairans532@gmail.com",
    phone: "+91 7271880500",
  };

  const [contact, setContact] = useState(initialContactState);
  const handleContactDetails = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };
  /* ------------------------------------------------------------ */

  /*-------------------------- Skill Section---------------------- */
  const [skill, setSkill] = useState("");
  const [skills, setSkils] = useState([]);

  const handleSkillInputValue = (data) => {
    setSkill(data);
  };
  const handleSkillsData = () => {
    if (skill.trim()) {
      const skillData = { id: skills.length + 1, skill };
      setSkils([...skills, skillData]);
      setSkill("");
    }
  };
  /* ------------------------------------------------------------ */

  /* -----------------Education Section--------------------------- */
  const initialEducationState = {
    degree: "",
    college: "",
    year: "",
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
    if (education.degree && education.college && education.year) {
      const data = { id: educations.length + 1, ...education };
      setEducations([...educations, data]);
      setEducation(initialEducationState);
    }
  };
  /* ------------------------------------------------------------ */

  /*-------------------- Work Experience Section------------------ */

  const initialWorkExperienceState = {
    company: "",
    designation: "",
    year: "",
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
    if (
      workExperience.company &&
      workExperience.designation &&
      workExperience.year
    ) {
      const data = { id: workExperienceData.length + 1, ...workExperience };
      setWorkExperienceData([...workExperienceData, data]);
      setWorkExperience(initialWorkExperienceState);
    }
  };

  /* ------------------------------------------------------------ */

  /*---------------------interest Section--------------------------- */

  const [interest, setinterest] = useState("");
  const [interestData, setinterestData] = useState([]);

  const handleinterestInputValue = (data) => {
    setinterest(data);
  };
  const handleinterestData = () => {
    if (interest) {
      const interests = { id: interestData.length + 1, interest };
      setinterestData([...interestData, interests]);
      setinterest("");
    }
  };

  /* ------------------------------------------------------------ */

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
      id: projectData.length + 1,
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
    setfeature([
      ...feature,
      { feature: project.projectfeatures, id: feature.length + 1 },
    ]);

    setProject({ ...project, projectfeatures: "" });
  };

  const handleTechStackChange = (e) => {
    setTechstack([
      ...techstack,
      { techstack: project.projecttechstack, id: techstack.length + 1 },
    ]);
    setProject({ ...project, projecttechstack: "" });
  };

  const [selectedOption, setSelectedOption] = useState("Contact Section");
  const handleSelection = (selectedItem) => {
    setSelectedOption(selectedItem);
  };
  return (
    <>
      {" "}
      <div className="d-flex ml-4">
        <Link to="/">
          {" "}
          <Button className="mt-2 text-left" variant="success">
            <BiHomeAlt2 />
          </Button>
        </Link>
      </div>
      <div className="d-flex justify-content-between px-4 mt-4  py-4">
        <div className="w-25 ">
          <div className="mt-4">
            {" "}
            <SelectionComponent handleSelection={handleSelection} />
          </div>

          <ResumeOption
            {...{
              selectedOption,
              handleContactDetails,
              skill,
              handleSkillInputValue,
              handleSkillsData,
              education,
              handleEducationDetails,
              handleAddEducation,
              workExperience,
              handleWorkExperienceDetails,
              handleAddWorkExperience,
              handleinterestInputValue,
              handleinterestData,
              interest,
              education,
              handleSummary,
              summary,
              project,
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
              interestData,
              summary,
              projectData,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ResumeCreaterPage;

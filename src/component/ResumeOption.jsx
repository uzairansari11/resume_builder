import React from "react";
import { Button } from "react-bootstrap";

const ResumeOption = ({
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
  handleProjectData,
  handleFeatureChange,
  handleTechStackChange,
}) => {
  return (
    <div className="d-flex flex-column px-4 ">
      <label htmlFor="">Contact Section</label>
      <input
        type="text"
        placeholder="Full Name..."
        name="name"
        onChange={handleContactDetails}
      />
      <input
        type="email"
        placeholder="Email..."
        name="email"
        onChange={handleContactDetails}
      />
      <input
        type="number"
        placeholder="Phone..."
        name="phone"
        onChange={handleContactDetails}
        maxLength="10"
      />

      <label htmlFor="">Skill Section</label>

      <input
        type="text"
        value={skill}
        onChange={(e) => handleSkillInputValue(e.target.value)}
        placeholder="Add Skill..."
      />
      <Button onClick={handleSkillsData}>Add Skill</Button>

      <label htmlFor="">Education Section</label>
      <input type="text" onChange={handleEducationDetails} name="degree" />
      <input type="text" onChange={handleEducationDetails} name="college" />
      <Button onClick={handleAddEducation}>Add Education</Button>

      <label htmlFor="">Work Experience Section</label>
      <input
        type="text"
        onChange={handleWorkExperienceDetails}
        name="company"
      />
      <input
        type="text"
        onChange={handleWorkExperienceDetails}
        name="designation"
      />
      <input type="text" onChange={handleWorkExperienceDetails} name="year" />
      <Button onClick={handleAddWorkExperience}>Add Experience</Button>

      <label htmlFor="">Intrest Section</label>

      <input
        type="text"
        value={intrest}
        onChange={(e) => handleIntrestInputValue(e.target.value)}
        placeholder="Add Skill..."
      />
      <Button onClick={handleIntrestData}>Add Intrest</Button>

      <textarea name="summary" id="" value={summary} onChange={handleSummary} />

      <label htmlFor="">Project Section</label>
      <input type="text" name="projectname" onChange={handleProjectChange} />
      <input
        type="text"
        name="projectdescription"
        onChange={handleProjectChange}
      />

      <input
        type="text"
        name="projectfeatures"
        onChange={handleProjectChange}
      />
      <Button onClick={handleFeatureChange}>Add Feature</Button>
      <input
        type="text"
        name="projecttechstack"
        onChange={handleProjectChange}
      />
      <Button onClick={handleTechStackChange}>Add TechStack</Button>
      <br />
      <Button onClick={handleProjectData}>Add Project</Button>
    </div>
  );
};

export default ResumeOption;

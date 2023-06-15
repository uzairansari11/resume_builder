import React from "react";
import { Button, Form } from "react-bootstrap";
import { AiOutlinePlusCircle, AiOutlineTrash } from "react-icons/ai";

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
    <div className="d-flex flex-column px-4">
      <Form.Group>
        <Form.Label>Contact Section</Form.Label>
        <Form.Control
          type="text"
          placeholder="Full Name..."
          name="name"
          onChange={handleContactDetails}
          className="mb-3"
        />
        <Form.Control
          type="email"
          placeholder="Email..."
          name="email"
          onChange={handleContactDetails}
          className="mb-3"
        />
        <Form.Control
          type="number"
          placeholder="Phone..."
          name="phone"
          onChange={handleContactDetails}
          maxLength="10"
          className="mb-3"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Skill Section</Form.Label>
        <Form.Control
          type="text"
          value={skill}
          onChange={(e) => handleSkillInputValue(e.target.value)}
          placeholder="Add Skill..."
          className="mb-3"
        />
        <Button variant="primary" onClick={handleSkillsData} className="mb-3">
          Add Skill
        </Button>
      </Form.Group>

      <Form.Group>
        <Form.Label>Education Section</Form.Label>
        <Form.Control
          type="text"
          onChange={handleEducationDetails}
          name="degree"
          placeholder="Degree Name..."
          className="mb-3"
        />
        <Form.Control
          type="text"
          onChange={handleEducationDetails}
          name="college"
          placeholder="College/University Name..."
          className="mb-3"
        />
        <Button variant="primary" onClick={handleAddEducation} className="mb-3">
          Add Education
        </Button>
      </Form.Group>

      <Form.Group>
        <Form.Label>Work Experience Section</Form.Label>
        <Form.Control
          type="text"
          onChange={handleWorkExperienceDetails}
          name="company"
          placeholder="Company Name..."
          className="mb-3"
        />
        <Form.Control
          type="text"
          onChange={handleWorkExperienceDetails}
          name="designation"
          placeholder="Designation..."
          className="mb-3"
        />
        <Form.Control
          type="text"
          onChange={handleWorkExperienceDetails}
          name="year"
          placeholder="Year..."
          className="mb-3"
        />
        <Button variant="primary" onClick={handleAddWorkExperience} className="mb-3">
          Add Experience
        </Button>
      </Form.Group>

      <Form.Group>
        <Form.Label>Interest Section</Form.Label>
        <Form.Control
          type="text"
          value={intrest}
          onChange={(e) => handleIntrestInputValue(e.target.value)}
          placeholder="Add Interest..."
          className="mb-3"
        />
        <Button variant="primary" onClick={handleIntrestData} className="mb-3">
          Add Interest
        </Button>
      </Form.Group>

      <Form.Group>
        <Form.Label>Summary</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={summary}
          onChange={handleSummary}
          className="mb-3"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Project Section</Form.Label>
        <Form.Control
          type="text"
          name="projectname"
          onChange={handleProjectChange}
          placeholder="Project Name..."
          className="mb-3"
        />
        <Form.Control
          type="text"
          name="projectdescription"
          onChange={handleProjectChange}
          placeholder="Project Description..."
          className="mb-3"
        />
        <Form.Control
          type="text"
          name="projectfeatures"
          onChange={handleProjectChange}
          placeholder="Features..."
          className="mb-3"
        />
        <Button variant="primary" onClick={handleFeatureChange} className="mb-3">
          <AiOutlinePlusCircle /> Add Feature
        </Button>
        <Form.Control
          type="text"
          name="projecttechstack"
          onChange={handleProjectChange}
          placeholder="Tech Stacks..."
          className="mb-3"
        />
        <Button variant="primary" onClick={handleTechStackChange} className="mb-3">
          <AiOutlinePlusCircle /> Add Tech Stack
        </Button>
        <br />
        <br />
        <Button variant="primary" onClick={handleProjectData}>
          Add Project
        </Button>
      </Form.Group>
    </div>
  );
};

export default ResumeOption;

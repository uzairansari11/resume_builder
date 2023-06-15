import React from "react";

const ResumeTemplate = ({
  contact,
  skills,
  educations,
  workExperienceData,
  intrestData,
  summary,
  projectData,
}) => {
  return (
    <div className=" d-flex justify-content-around border ">
      <div className="d-flex flex-column w-45  px-4 text-left ">
        {/* Contact Section */}
        <div>
          <h5>Contact</h5>
          <ul className="list-unstyled">
            <li>
              <strong>Name:</strong> {contact.name}
            </li>
            <li>
              <strong>Email:</strong> {contact.email}
            </li>
            <li>
              <strong>Phone:</strong> {contact.phone}
            </li>
          </ul>
        </div>
        {/* Skills Section */}
        <div>
          <h5>Skill</h5>
          <ul className="list-unstyled">
            {skills.map((item) => (
              <li key={item.id}>{item.skill}</li>
            ))}
          </ul>
        </div>
        {/* Education Section */}
        <div>
          <h5>Education</h5>

          {educations?.map((item) => (
            <>
              {" "}
              <p className="text-sm">{item.degree}</p>
              <p>{item.college}</p>
            </>
          ))}
        </div>
        {/* Work Experience Section */}
        <div>
          <h5>Work Experience</h5>
          <ul className="list-unstyled">
            {workExperienceData.map((item) => (
              <>
                {" "}
                <li>{item.company}</li>
                <li>{item.designation}</li>
                <li>{item.year}</li>
              </>
            ))}
          </ul>
        </div>
        {/* Interests Section */}
        <div>
          <h5>Interests</h5>
          <ul className="list-unstyled">
            {intrestData.map((item) => (
              <li key={item.id}>{item.intrest}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="d-flex flex-column w-50 px-4 text-left ">
        {/* Professional Summary Section */}
        <div>
          <h5>Professional Summary</h5>
          <p>{summary}</p>
        </div>
        {/* Projects Section */}
        <div>
          <h5>Projects</h5>

          {projectData.map((item) => {
            return (
              <div>
                <h6>{item.projectname}</h6>
                <p>
                  <strong>Description:</strong> {item.projectdescription}
                </p>
                <strong>Features:</strong>
                {item.projectfeatures.map((item) => (
                  <p>{item}</p>
                ))}
                <strong>Techstack:</strong>
                {item.projecttechstack.map((item) => (
                  <p>{item}</p>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResumeTemplate;

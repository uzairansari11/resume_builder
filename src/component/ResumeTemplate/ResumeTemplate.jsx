import React from "react";
import CustomList from '../CustomList';

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
      <div className="d-flex flex-column w-25  px-4 text-left ">
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
          <div className="d-flex flex-wrap">
            {skills.map((item) => (
              <CustomList data={item.skill} />
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h5>Education</h5>
          <ul className="list-unstyled">
            {educations?.map((item) => (
              <>
                {" "}
                <li className="text-sm">{item.degree}</li>
                <li>{item.college}</li>
                <li>{item.year}</li>
              </>
            ))}
          </ul>
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
          <div className="d-flex flex-wrap">
            {intrestData.map((item) => (
              <CustomList data={item.intrest} />
            ))}
          </div>

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
                <div className="d-flex flex-wrap">
                  {item.projectfeatures.map((item) => (
                    <CustomList data={item} />
                  ))}
                </div>

                <strong>Techstack:</strong>
                <div className="d-flex flex-wrap">
                  {item.projecttechstack.map((item) => (
                    <CustomList data={item} />
                  ))}

                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResumeTemplate;

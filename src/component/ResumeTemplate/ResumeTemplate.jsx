import React from "react";
import CustomList from "./CustomList";
// import Pdf from "react-to-pdf";
import { Button } from "react-bootstrap";
import Contact from "./Contact";
import EdAndExp from "./EdAndExp";
import Project from "./Project";

const ResumeTemplate = ({
  contact,
  skills,
  educations,
  workExperienceData,
  interestData,
  summary,
  projectData,
}) => {
  // const options = {
  //   orientation: "portrait",
  //   unit: "px",
  //   format: [595, 842], // A4 size in pixels (width, height)
  //   scale: 1, // Higher scale for higher resolution
  // };

  // const ref = React.createRef();
  return (
    <>
      <div className=" d-flex justify-content-around py-4 ">
        <div className="d-flex flex-column w-25  px-4 text-left  ">
          {/* Contact Section */}
          <div>
            <h5>Contact</h5>
            <Contact data={contact} />
          </div>
          {/* Skills Section */}
          <div>
            <h5>Skill</h5>
            <div className="d-flex flex-wrap">
              {skills.map((item) => (
                <CustomList key={item.id} data={item.skill} />
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h5>Education</h5>
            <ul className="list-unstyled">
              {educations?.map((item) => (
                <EdAndExp
                  key={item.id}
                  first={item.degree}
                  second={item.college}
                  third={item.year}
                />
              ))}
            </ul>
          </div>

          {/* Work Experience Section */}
          <div>
            <h5>Work Experience</h5>
            <ul className="list-unstyled">
              {workExperienceData.map((item) => (
                <>
                  <EdAndExp
                    key={item.id}
                    first={item.company}
                    second={item.designation}
                    third={item.year}
                  />
                </>
              ))}
            </ul>
          </div>
          {/* Interests Section */}
          <div>
            <h5>Interests</h5>
            <div className="d-flex flex-wrap">
              {interestData.map((item) => (
                <CustomList key={item.id} data={item.interest} />
              ))}
            </div>
          </div>
        </div>
        <div className="d-flex flex-column w-50 px-4 text-left ">
          {/* Professional Summary Section */}
          <div>
            <h5>Professional Summary</h5>
            <p style={{ width: "450px" }}>{summary}</p>
          </div>
          {/* Projects Section */}
          <div>
            <h5>Projects</h5>

            {projectData.map((item) => (
              <Project key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>

      {/* <Pdf targetRef={ref} filename="code-example.pdf" options={options}>
        {({ toPdf }) => (
          <Button onClick={toPdf} className="mt-4">
            Generate Pdf
          </Button>
        )}
      </Pdf> */}
    </>
  );
};

export default ResumeTemplate;

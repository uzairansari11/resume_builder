import React from "react";
import CustomList from "./CustomList";

const Project = ({ data }) => {
  return (
    <div>
      <h6>{data.projectname}</h6>
      <p>
        <strong>Description:</strong> {data.projectdescription}
      </p>
      <strong>Features:</strong>
      <div className="d-flex flex-wrap">
        {data.projectfeatures.map((item) => (
          <CustomList key={item.id} data={item.feature} />
        ))}
      </div>

      <strong>Techstack:</strong>
      <div className="d-flex flex-wrap">
        {data.projecttechstack.map((item) => (
          <CustomList key={item.id} data={item.techstack} />
        ))}
      </div>
    </div>
  );
};

export default Project;

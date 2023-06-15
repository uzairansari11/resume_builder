import React from "react";

const EdAndExp = ({ first, second, third }) => {
  return (
    <>
      <li className="text-sm">
        <strong style={{ fontSize: "1.1rem" }}>{first}</strong>
      </li>
      <li>{second}</li>
      <li>{third}</li>
    </>
  );
};

export default EdAndExp;

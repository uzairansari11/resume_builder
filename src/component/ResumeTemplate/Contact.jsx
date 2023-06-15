import React from "react";

const Contact = ({ data }) => {
  return (
    <ul className="list-unstyled">
      <li>
        <strong>Name:</strong> {data.name}
      </li>
      <li>
        <strong>Email:</strong> {data.email}
      </li>
      <li>
        <strong>Phone:</strong> {data.phone}
      </li>
    </ul>
  );
};

export default Contact;

import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Container>
        <h1 className="text-center">Resume Builder</h1>
        <p className="text-center">Create a professional resume in minutes!</p>
        <div className="d-flex justify-content-center">
          <Link variant="primary" as="a" to="/create">
            <Button> Get Started</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default HomePage;

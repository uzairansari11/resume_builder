import React from "react";
import { Container, Button } from "react-bootstrap";;
function HomePage() {
  
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Container>
        <h1 className="text-center">Resume Builder</h1>
        <p className="text-center">Create a professional resume in minutes!</p>
        <div className="d-flex justify-content-center">
          <Button variant="primary">Get Started</Button>
        </div>
      </Container>
    </div>
  );
}

export default HomePage;

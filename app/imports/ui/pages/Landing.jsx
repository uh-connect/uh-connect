import React from 'react';
import { Col, Container, Navbar, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <div>
    <Navbar style={{ backgroundColor: 'darkgreen', color: 'white' }} expand="lg">
      <Container className="w-100">
        <Col className="text-center pb-3 pt-3">
          <h1>Welcome to UH Connect</h1>
          <h5>Bringing Students and Employers Together</h5>
          <h3>Sign Up Here if You Are:</h3>
          <Col>
            <div className="button-container">
              <Link to="/">
                <Button size="lg" variant="light" className="gap-3">Student</Button>
              </Link>
              <Link to="/">
                <Button size="lg" variant="light" className="gap-3">Company</Button>
              </Link>
            </div>
          </Col>
        </Col>
      </Container>
    </Navbar>
    <Container>
      <Image
        src="/images/landing_background.jpg"
        className="d-flex w-100"
      />
    </Container>
  </div>
);

export default Landing;

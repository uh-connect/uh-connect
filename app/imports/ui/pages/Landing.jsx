import React from 'react';
import { Col, Container, Navbar, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <div>
    <Navbar style={{ backgroundColor: 'darkgreen', color: 'white' }} expand="lg">
      <Container className="w-100" id="landing-page">
        <Col className="text-center pb-3 pt-3">
          <h1>Welcome to UH Connect</h1>
          <h5>Bringing Students and Employers Together</h5>
          <h3>Get Started Here:</h3>
          <Col>
            <Link to="/signup">
              <Button size="lg" variant="light" className="gap-3">Sign Up</Button>
            </Link>
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

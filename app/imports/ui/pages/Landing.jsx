import React from 'react';
import { Col, Container, Navbar, Button, Image, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { useTracker } from 'meteor/react-meteor-data';

/* A simple static component to render some text for the landing page. */
const Landing = () => {
  const { currentUser } = useTracker(() => {
    const username = Meteor.user();
    return {
      currentUser: username,
    };
  }, []);
  return (
    <div>
      <Navbar style={{ backgroundColor: 'darkgreen', color: 'white' }} expand="lg">
        <Container className="w-100" id="landing-page">
          <Col className="text-center pb-3 pt-3">
            <h1><strong>Welcome to UH Connect</strong></h1>
            <h5><small>Bringing Students and Employers Together</small></h5>
            {!currentUser ? ( // User is not signed it
              <h5><small>Get Started Here:</small></h5>
            ) : ''}
            {!currentUser ? ( // User is not signed it
              <Link to="/signup">
                <Button size="lg" variant="light" className="gap-3">Sign Up</Button>
              </Link>
            ) : ''}
          </Col>
        </Container>
      </Navbar>
      <Container>
        {currentUser && Roles.userIsInRole(Meteor.userId(), 'company') ? ([ // Company View of the landing page
          <Link to="/"><Button size="lg" variant="light" className="gap-3">Edit Profile</Button></Link>,
          <Link to="/"><Button size="lg" variant="light" className="gap-3">Jobs/Opportunities</Button></Link>,
        ]) : ''}
        {currentUser && Roles.userIsInRole(Meteor.userId(), 'student') ? ([ // Student View of the landing page
          <Link to="/"><Button size="lg" variant="light" className="gap-3">Edit Profile</Button></Link>,
          <Link to="/"><Button size="lg" variant="light" className="gap-3">Find A Job</Button></Link>,
        ]) : ''}
        {!currentUser ? ( // User is not signed it
          <Image
            src="/images/landing_background.jpg"
            className="d-flex w-100"
          />
        ) : ''}
      </Container>
    </div>
  );
};

export default Landing;

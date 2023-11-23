import React from 'react';
import { Col, Container, Navbar, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';

/* A simple static component to render some text for the landing page. */
const Landing = () => {
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }), []);
  return (
    <div>
      <Navbar style={{ backgroundColor: 'darkgreen', color: 'white' }} expand="lg">
        <Container className="w-100">
          <Col className="text-center pb-3 pt-3">
            <h1>Welcome to UH Connect</h1>
            <h5>Bringing Students and Employers Together</h5>
            <Col>
              <div className="button-container">
                {currentUser && Roles.userIsInRole(Meteor.userId(), 'company') ? ([
                  <h3>Edit your Company Profile, Or Check your Job Listings</h3>,
                  <Link to="/"><Button size="lg" variant="light" className="gap-3">Edit Profile</Button></Link>,
                  <Link to="/"><Button size="lg" variant="light" className="gap-3">Jobs/Opportunities</Button></Link>,
                ]) : ''}
                {currentUser && Roles.userIsInRole(Meteor.userId(), 'student') ? ([
                  <h3>Edit your Student Profile, Or Find A Job</h3>,
                  <Link to="/"><Button size="lg" variant="light" className="gap-3">Edit Profile</Button></Link>,
                  <Link to="/"><Button size="lg" variant="light" className="gap-3">Find A Job</Button></Link>,
                ]) : ''}
                {currentUser === '' ? ([
                  <h3>Sign Up Here if You Are:</h3>,
                  <Link to="/"><Button size="lg" variant="light" className="gap-3">Student</Button></Link>,
                  <Link to="/"><Button size="lg" variant="light" className="gap-3">Company</Button></Link>,
                ]) : ''}
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
};

export default Landing;

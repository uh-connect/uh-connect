import React from 'react';
import { Col, Container, Navbar, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
            {!currentUser ? ( // User is not signed it
              <h1><strong>Welcome to UH Connect</strong></h1>
            ) : ''}
            {!currentUser ? ( // User is not signed it
              <h5><small>Bringing Students and Employers Together</small></h5>
            ) : ''}
            {!currentUser ? ( // User is not signed it
              <h5><small>Get Started Here:</small></h5>
            ) : ''}
            {!currentUser ? ( // User is not signed it
              <Link to="/signup">
                <Button size="lg" variant="light" className="gap-3">Sign Up</Button>
              </Link>
            ) : ''}
            {currentUser && !Roles.userIsInRole(Meteor.userId(), ['student', 'company', 'admin']) ? ( // SIGNED IN, NO ROLES ======
              <h1><strong>You currently do not have a role!</strong></h1>
            ) : ''}
            {currentUser && !Roles.userIsInRole(Meteor.userId(), ['student', 'company', 'admin']) ? (
              <Link to="/role">
                <Button size="lg" variant="light" className="gap-3">Select Role</Button>
              </Link>
            ) : ''}
            {currentUser && Roles.userIsInRole(Meteor.userId(), 'student') ? ([ // Student View of the landing page ======
              <h1><strong>Welcome Back!</strong></h1>,
            ]) : ''}
            {currentUser && Roles.userIsInRole(Meteor.userId(), 'student') ? ([
              <h5><strong>You are currently a Student</strong></h5>,
            ]) : ''}
            {currentUser && Roles.userIsInRole(Meteor.userId(), 'company') ? ([ // Company View of the landing page ======
              <h1><strong>Welcome Back!</strong></h1>,
            ]) : ''}
            {currentUser && Roles.userIsInRole(Meteor.userId(), 'company') ? ([
              <h5><strong>You are currently a Company</strong></h5>,
            ]) : ''}
            {currentUser && Roles.userIsInRole(Meteor.userId(), 'admin') ? ([ // Admin View of the landing page ======
              <h1><strong>Welcome Back, Admin!</strong></h1>,
            ]) : ''}
          </Col>
        </Container>
      </Navbar>
      {currentUser && Roles.userIsInRole(Meteor.userId(), 'admin') ? ([ // Company image ==============================
        <Image
          src="/images/admin-background.png"
          className="d-flex w-100"
        />
      ]) : ''}
      <Container>
        {!currentUser ? ( // User is not signed it
          <Image
            src="/images/landing_background.jpg"
            className="d-flex w-100"
          />
        ) : ''}
        {currentUser && !Roles.userIsInRole(Meteor.userId(), ['student', 'company', 'admin']) ? ( // SIGNED IN, NO ROLE ===========
          <Image
            src="/images/landing_background.jpg"
            className="d-flex w-100"
          />
        ) : ''}
        {currentUser && Roles.userIsInRole(Meteor.userId(), 'company') ? ([ // Company image ==============================
          <div className="d-flex justify-content-center align-items-center pt-5">
            <Image
              src="/images/landing_background.jpg"
              className="d-flex justify-content-center"
              width="800"
            />
          </div>,
        ]) : ''}
        {currentUser && Roles.userIsInRole(Meteor.userId(), 'company') ? ([ // Company View of the landing page ==========
          <div className="d-flex justify-content-center align-items-center pt-2">
            <Link to="/addjob"><Button size="lg" variant="light" className="gap-3">Add a Job</Button></Link>
            <Link to="/listprofile"><Button size="lg" variant="light" className="gap-3">Recruit Students</Button></Link>
          </div>,
        ]) : ''}
        {currentUser && Roles.userIsInRole(Meteor.userId(), 'student') ? ([ // Student Image ============================
          <div className="d-flex justify-content-center align-items-center pt-5">
            <Image
              src="/images/landing_background.jpg"
              className="d-flex justify-content-center"
              width="800"
            />
          </div>,
        ]) : ''}
        {currentUser && Roles.userIsInRole(Meteor.userId(), 'student') ? ([ // Student View of the landing page =========
          <div className="d-flex justify-content-center align-items-center pt-2">
            <Link to="/listjob"><Button size="lg" variant="light" className="gap-3">Job Listings</Button></Link>
            <Link to="/profile"><Button size="lg" variant="light" className="gap-3">Create/Edit Profile</Button></Link>
          </div>,
        ]) : ''}
      </Container>
    </div>
  );
};

export default Landing;

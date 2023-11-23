import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
import { Roles } from 'meteor/alanning:roles';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BoxArrowRight, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';

const NavBar = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }), []);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img src="/images/UH_Connect_Main_Logo.jpg" alt="UH_Connect_Main_Logo" width={75} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-start">
            {currentUser && Roles.userIsInRole(Meteor.userId(), 'company') ? ([
              <Nav.Link id="company-nav" as={NavLink} to="/company" key="company">Company</Nav.Link>,
              <Nav.Link id="addJobs-nav" as={NavLink} to="/addjob" key="addjob">Add Jobs</Nav.Link>,
            ]) : ''}
            {currentUser && Roles.userIsInRole(Meteor.userId(), 'student') ? ([
              <Nav.Link id="student-nav" as={NavLink} to="/student" key="student">Student</Nav.Link>,
            ]) : ''}
            {Roles.userIsInRole(Meteor.userId(), 'admin') ? ([
              <Nav.Link id="student-nav" as={NavLink} to="/student" key="student">Student</Nav.Link>, // @TODO student admin page
              <Nav.Link id="company-nav" as={NavLink} to="/company" key="company">Company</Nav.Link>, // @TODO company admin page
              <Nav.Link id="addJobs-nav" as={NavLink} to="/addjob" key="addjob">Add Jobs</Nav.Link>, // ADD JOB Page
            ]) : ''}
          </Nav>
          <Nav className="justify-content-end">
            {currentUser === '' ? (
              <NavDropdown id="login-dropdown" title="Login">
                <NavDropdown.Item id="login-dropdown-sign-in" as={NavLink} to="/signin">
                  <PersonFill />
                  Sign
                  in
                </NavDropdown.Item>
                <NavDropdown.Item id="login-dropdown-sign-up" as={NavLink} to="/signup">
                  <PersonPlusFill />
                  Sign
                  up
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown id="navbar-current-user" title={currentUser}>
                <NavDropdown.Item id="navbar-sign-out" as={NavLink} to="/signout">
                  <BoxArrowRight />
                  {' '}
                  Sign
                  out
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

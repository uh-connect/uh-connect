import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
import { Roles } from 'meteor/alanning:roles';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BoxArrowRight, PersonFill, CartFill } from 'react-bootstrap-icons';

const NavBar = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { currentUser, Id } = useTracker(() => {
    const username = Meteor.user() ? Meteor.user().username : '';
    const userId = Meteor.userId();
    return {
      currentUser: username,
      Id: userId,
    };
  }, []);
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
              <Nav.Link id="listcompany-nav" as={NavLink} to="/listjobcompany" key="listcompanyjob">Job Listings</Nav.Link>,
              <Nav.Link id="addJobs-nav" as={NavLink} to="/addjob" key="addjob">Add Jobs</Nav.Link>,
              <Nav.Link id="listprofile-nav" as={NavLink} to="/listprofile" key="listprofile">Recruit</Nav.Link>,
            ]) : ''}
            {currentUser && Roles.userIsInRole(Meteor.userId(), 'student') ? ([
              <Nav.Link id="student-nav" as={NavLink} to="/student" key="student">Student</Nav.Link>,
              <Nav.Link id="student-list" as={NavLink} to="/listjob" key="listjob">Job Listings</Nav.Link>,
              <Nav.Link id="student-profile" as={NavLink} to="/profile" key="profile">Create/Edit Profile</Nav.Link>,
            ]) : ''}
            {currentUser && !Roles.userIsInRole(Meteor.userId(), 'admin') ? (
              <Nav.Link id="role-nav" as={NavLink} to="/role" key="role">Role Assign</Nav.Link>
            ) : ''}
            {currentUser && Roles.userIsInRole(Meteor.userId(), 'admin') ? ([
              <Nav.Link id="student-nav" as={NavLink} to="/student" key="student">Student</Nav.Link>,
              <Nav.Link id="company-nav" as={NavLink} to="/company" key="company">Company</Nav.Link>,
              <Nav.Link id="addJobs-nav" as={NavLink} to="/addjob" key="addjob">Add Jobs</Nav.Link>,
              <Nav.Link id="admin-list" as={NavLink} to="/listjobadmin" key="listjobadmin">Job Listings</Nav.Link>,
            ]) : ''}
          </Nav>
          <Nav className="justify-content-end">
            {currentUser === '' ? (
              <NavDropdown title="Sign In" id="login-dropdown">
                <NavDropdown.Item id="login-dropdown-sign-in" as={NavLink} to="/signin">
                  Sign in
                  <PersonFill />
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown id="navbar-current-user" title={currentUser}>
                {Roles.userIsInRole(Id, 'student') ? ([
                  <NavDropdown.Item id="navbar-cart" as={NavLink} to="/cartstudent">
                    <CartFill /> List
                  </NavDropdown.Item>,
                ]) : ''}
                {Roles.userIsInRole(Id, 'company') ? ([
                  <NavDropdown.Item id="navbar-cart" as={NavLink} to="/cartcompany">
                    <CartFill /> List
                  </NavDropdown.Item>,
                ]) : ''}
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

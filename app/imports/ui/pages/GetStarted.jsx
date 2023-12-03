import React from 'react';
import { Col, Container, Navbar, Button, Image, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { useTracker } from 'meteor/react-meteor-data';

/* A simple static component to render some text for the landing page. */
const FAQ = () => {
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
            <h2><strong>Frequently Asked Questions</strong></h2>
          </Col>
        </Container>
      </Navbar>
      <Container>
        <Col className="p-5">
          <h5 className="ps-5 pe-5">Q: Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?</h5>
          <h5 className="ps-5 pe-5">A: Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?</h5>
          <h5 className="pt-3 ps-5 pe-5">Q: Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?</h5>
          <h5 className="ps-5 pe-5">A: Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?</h5>
          <h5 className="pt-3 ps-5 pe-5">Q: Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?</h5>
          <h5 className="ps-5 pe-5">A: Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?</h5>
          <h5 className="pt-3 ps-5 pe-5">Q: Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?</h5>
          <h5 className="ps-5 pe-5">A: Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?</h5>
          <h5 className="pt-3 ps-5 pe-5">Q: Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?</h5>
          <h5 className="ps-5 pe-5">A: Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?</h5>
          <h5 className="pt-3 ps-5 pe-5">Q: Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?</h5>
          <h5 className="ps-5 pe-5">A: Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?</h5>
          <h5 className="pt-3 ps-5 pe-5">Q: Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?</h5>
          <h5 className="ps-5 pe-5">A: Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?</h5>
          <h5 className="pt-3 ps-5 pe-5">Q: Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?</h5>
          <h5 className="ps-5 pe-5">A: Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?</h5>
          <h5 className="pt-3 ps-5 pe-5">Q: Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?</h5>
          <h5 className="ps-5 pe-5">A: Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?</h5>
          <h5 className="pt-3 ps-5 pe-5">Q: Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?</h5>
          <h5 className="ps-5 pe-5">A: Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?Why are you gay?</h5>
        </Col>
      </Container>
    </div>
  );
};

export default FAQ;

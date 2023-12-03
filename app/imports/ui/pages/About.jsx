import React from 'react';
import { Col, Container, Navbar, Button, Image, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { useTracker } from 'meteor/react-meteor-data';

/* A simple static component to render some text for the landing page. */
const About = () => {
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
            <h2><strong>About UH-Connect</strong></h2>
          </Col>
        </Container>
      </Navbar>
      <Container>
        <Col className="p-5">
          <h2 className="ps-5 pe-5">Who are we?</h2>
          <h5 className="ps-5 pe-5 pb-3">Welcome to UH Connect, your gateway to forging meaningful connections between University of Hawaii students and innovative companies. At UH Connect, we are driven by a simple yet powerful vision: to empower students to explore exciting career opportunities while helping companies discover the talents of tomorrow.</h5>
          <h2 className="ps-5 pe-5">Our Mission</h2>
          <h5 className="ps-5 pe-5 pb-3">Our mission is to bridge the gap between students and companies, fostering a collaborative ecosystem where knowledge, skills, and aspirations meet. We believe that by facilitating these connections, we can create a brighter future for both students and businesses.</h5>
          <h2 className="ps-5 pe-5">Our Team</h2>
          <h5 className="ps-5 pe-5 pb-3">UH Connect is powered by a dedicated team of professionals who are passionate about helping students and companies thrive. Our team includes educators, career advisors, and industry experts who are committed to making a positive impact on the future of our students and businesses in Hawaii.</h5>
          <h2 className="ps-5 pe-5">Get Involved</h2>
          <h5 className="ps-5 pe-5 pb-3">Whether you're a University of Hawaii student looking to kickstart your career journey or a company seeking fresh talent and perspectives, UH Connect is here to assist you. Join our growing community today and unlock a world of opportunities.</h5>
        </Col>
      </Container>
    </div>
  );
};

export default About;

import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { Github } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="mt-auto py-3" style={{ backgroundColor: 'darkgreen', color: 'white' }}>
    <Container fluid>
      <Row>
        <Col className="text-end my-2">
          <Link to="/faq"><Button variant="outline-success" className="btn-sm text-white">FAQ</Button></Link>
          <Button variant="outline-success" className="btn-sm text-white" href="https://uh-connect.github.io/home-page/">Project Homepage</Button>
          <Button variant="outline-success" className="btn-sm text-white" href="https://github.com/uh-connect"><Github /></Button>
        </Col>
        <Col className="text-center">
          <Link to="/home"><Button variant="outline-success"><Image src="/images/UH_Connect_Main_Logo.jpg" alt="..." width={50} /></Button></Link> <br />
          © 2023 UHConnect, Inc.
        </Col>
        <Col className="justify-content-start">
          <Link to="/about"><Button variant="outline-success" className="btn-sm text-white">About</Button></Link>
          <Button variant="outline-success" className="btn-sm text-white">Get Started</Button>
          <Link to="/terms"><Button variant="outline-success" className="btn-sm text-white">Terms</Button></Link>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;

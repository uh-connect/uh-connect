import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { Github } from 'react-bootstrap-icons';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="mt-auto py-3" style={{ backgroundColor: 'darkgreen', color: 'white' }}>
    <Container fluid>
      <Row>
        <Col className="text-end my-2">
          <Button variant="outline-success" className="btn-sm text-white" href="http://localhost:3000/home">FAQ</Button>
          <Button variant="outline-success" className="btn-sm text-white" href="https://uh-connect.github.io/home-page/">Project Homepage</Button>
          <Button variant="outline-success" className="btn-sm text-white" href="https://github.com/uh-connect"><Github /></Button>
        </Col>
        <Col className="text-center">
          <Button variant="outline-success"><Image src="/images/UH_Connect_Main_Logo.jpg" alt="..." width={50} /></Button> <br />
          © 2023 UHConnect, Inc.
        </Col>
        <Col className="justify-content-start">
          <Button variant="outline-success" className="btn-sm text-white" href="#">About</Button>
          <Button variant="outline-success" className="btn-sm text-white" href="#">Training</Button>
          <Button variant="outline-success" className="btn-sm text-white" href="#">Terms</Button>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;

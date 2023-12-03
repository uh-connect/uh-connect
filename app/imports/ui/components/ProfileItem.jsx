import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';

const ProfileItem = ({ profile }) => (
  <Container className="p-5 border border-dark">
    <Row>
      <Col>
        <h4><strong>Name:</strong> {profile.firstName} {profile.lastName}</h4>
      </Col>
      <Col className="text-end">
        <h4><strong>Skills:</strong> {profile.skills}</h4>
      </Col>
    </Row>
    <hr />
    <Row className="text-start">
      <h4 className="pb-2"><strong>About Me</strong></h4>
      <h4 className="pb-2">{profile.about}</h4>
      <hr />
    </Row>
    <Row>
      <Col>
        <h4><strong>Interests:</strong> {profile.interests}</h4>
      </Col>
      <Col className="text-end">
        <h4><strong>Resume:</strong> <a href={profile.link}>Click Me!</a></h4>
      </Col>
    </Row>
    <hr />
    <Row>
      <h4><strong>Contact:</strong> {profile.owner}</h4>
    </Row>
    <hr />
  </Container>
);

ProfileItem.propTypes = {
  profile: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    about: PropTypes.string,
    skills: PropTypes.string,
    interests: PropTypes.string,
    link: PropTypes.string,
    owner: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default ProfileItem;

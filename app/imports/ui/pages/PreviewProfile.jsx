import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PersonCircle } from 'react-bootstrap-icons';
import { Profiles } from '../../api/profile/Profile';
import LoadingSpinner from '../components/LoadingSpinner';

const previewProfile = () => {
  const username = Meteor.user().username;
  const { profile, ready } = useTracker(() => {
    const subscription = Meteor.subscribe(Profiles.studentPublicationName);
    const rdy = subscription.ready();
    const document = Profiles.collection.findOne({ owner: username });
    return {
      profile: document,
      ready: rdy,
    };
  }, []);
  return ready ? (
    <Container>
      <Row className="text-center">
        <h3><strong>Preview of your Profile</strong></h3>
      </Row>
      <Row>
        <PersonCircle size={100} />
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
      <Row>
        <Link to={`/editprofile/${profile._id}`}>Edit</Link>
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default previewProfile;

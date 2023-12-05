import React, { useEffect, useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Col, Container, Row, Button } from 'react-bootstrap';
import swal from 'sweetalert';
import { SavedList } from '../../api/cart/Cart';

const ProfileItem = ({ profile }) => {
  const [isLoading, setLoading] = useState(false);
  const [inList, setInList] = useState(false);

  const { currentUser, numItems } = useTracker(() => {
    const subscription = Meteor.subscribe(SavedList.userPublicationName);
    const rdy = subscription.ready();
    const num = rdy ? SavedList.collection.find({ itemId: profile._id }).count() : -1;
    return {
      currentUser: Meteor.user() ? Meteor.user().username : '',
      numItems: num,
    };
  }, []);
  const buttonHandler = () => {
    SavedList.collection.insert({ itemId: profile._id, role: 'company', owner: currentUser });
    setLoading(true);
  };

  useEffect(() => {
    if (isLoading) {
      swal('Adding Item');
      setLoading(false);
    }
    if (numItems > 0) {
      setInList(true);
    } else {
      setInList(false);
    }
  }, [isLoading, numItems]);
  return (
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
        <Col>
          <h4><strong>Contact:</strong> {profile.owner}</h4>
        </Col>
        <Col>
          <Button id="add-cart" onClick={buttonHandler} disabled={inList}>Save</Button>
        </Col>
      </Row>
      <hr />
    </Container>
  );
};

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

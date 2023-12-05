import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { SavedList } from '../../api/cart/Cart';
import { Profiles } from '../../api/profile/Profile';

const ProfileCart = ({ profile }) => {
  const { item } = useTracker(() => {
    const subscription = Meteor.subscribe(Profiles.companyPublicationName);
    const rdy = subscription.ready();
    return {
      item: rdy ? Profiles.collection.findOne({ _id: profile.itemId }) : '',
    };
  }, [profile]);
  const [isLoading, setLoading] = useState(false);
  const buttonHandler = () => {
    setLoading(true);
    SavedList.collection.remove({ _id: profile._id });
  };

  useEffect(() => {
    if (isLoading) {
      swal('Removing Item');
      setLoading(false);
    }
  }, [isLoading]);
  return (
    <Container className="p-5 border border-dark" id="profile-cart">
      <Row>
        <Col>
          <h4><strong>Name:</strong> {item.firstName} {item.lastName}</h4>
        </Col>
        <Col className="text-end">
          <h4><strong>Skills:</strong> {item.skills}</h4>
        </Col>
      </Row>
      <hr />
      <Row className="text-start">
        <h4 className="pb-2"><strong>About Me</strong></h4>
        <h4 className="pb-2">{item.about}</h4>
        <hr />
      </Row>
      <Row>
        <Col>
          <h4><strong>Interests:</strong> {item.interests}</h4>
        </Col>
        <Col className="text-end">
          <h4><strong>Resume:</strong> <a href={item.link}>Click Me!</a></h4>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <h4><strong>Contact:</strong> {item.owner}</h4>
        </Col>
        <Col className="justify-content-end">
          <Button id="remove-cart" variant="danger" className="btn-sm" onClick={buttonHandler}>Remove</Button>
        </Col>
      </Row>
      <hr />
    </Container>
  );
};

ProfileCart.propTypes = {
  profile: PropTypes.shape({
    itemId: PropTypes.string,
    role: PropTypes.string,
    owner: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default ProfileCart;

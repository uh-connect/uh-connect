import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Roles } from 'meteor/alanning:roles';
import { SavedList } from '../../api/cart/Cart';
import LoadingSpinner from '../components/LoadingSpinner';
import ProfileCart from '../components/ProfileCart';

const CartCompany = () => {
  const username = Meteor.userId();
  const roleAssignment = Roles.userIsInRole(username, 'student') ? 'student' : 'company';
  const { ready, cart } = useTracker(() => {
    const subscription = Meteor.subscribe(SavedList.userPublicationName);
    const rdy = subscription.ready();
    const list = SavedList.collection.find({ role: roleAssignment, owner: Meteor.user().username }).fetch();
    return {
      ready: rdy,
      cart: list,
    };
  }, [roleAssignment]);
  return (
    (ready ? (
      <Container id="listjob-company">
        <div className="text-center">
          <h1><strong>List</strong></h1>
          <p><small>Here are your saved profiles</small></p>
        </div>
        <Row>
          {cart.map((item) => <ProfileCart key={item._id} profile={item} />)}
        </Row>
      </Container>
    ) : <LoadingSpinner />)
  );
};

export default CartCompany;

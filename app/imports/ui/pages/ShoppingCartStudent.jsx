import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Roles } from 'meteor/alanning:roles';
import { SavedList } from '../../api/cart/Cart';
import LoadingSpinner from '../components/LoadingSpinner';
import JobCart from '../components/JobCart';

const CartStudent = () => {
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
      <Container id="cart-student">
        <div className="text-center">
          <h1><strong>Saved Jobs</strong></h1>
          <p><small>If you want to save a job that your interested in, click &apos;save&apos; on the job, and you can check back here to look over jobs you are interested in.</small></p>
        </div>
        <Row>
          {cart.map((item) => <JobCart key={item._id} job={item} />)}
        </Row>
      </Container>
    ) : <LoadingSpinner />)
  );
};

export default CartStudent;

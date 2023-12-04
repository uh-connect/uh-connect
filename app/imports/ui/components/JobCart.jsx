import React, { useEffect, useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { Button, Card, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useTracker } from 'meteor/react-meteor-data';
import swal from 'sweetalert';
import { SavedList } from '../../api/cart/Cart';
import { Jobs } from '../../api/job/Job';
import LoadingSpinner from './LoadingSpinner';

const JobCart = ({ job }) => {
  const { item, ready } = useTracker(() => {
    const subscription = Meteor.subscribe(Jobs.studentPublicationName);
    const rdy = subscription.ready();
    const doc = Jobs.collection.findOne({ _id: job.itemId });
    return {
      item: doc,
      ready: rdy,
    };
  }, [job]);
  const [isLoading, setLoading] = useState(false);
  const buttonHandler = () => {
    setLoading(true);
    SavedList.collection.remove({ _id: job._id });
  };

  useEffect(() => {
    if (isLoading) {
      swal('Removing Item');
      setLoading(false);
    }
  }, [isLoading]);
  return (ready ? (
    <Card className="p-4 border" style={{ width: '18rem' }}>
      <Card.Title className="text-center"><strong>{item.title}</strong></Card.Title>
      <Card.Body>
        <Card.Text>
          <strong>{item.jobType}</strong> <br />
          <small>Available Positions: {item.positions}</small>
        </Card.Text>
        <Card.Text>
          <strong>Position Description</strong> <br />
          <small>INSERT DESC HERE</small>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <strong>Skills Required</strong> <br />
        {item.skills.map((skill) => <small>{skill}, </small>)} <br />
        <hr />
        <strong>Salary</strong> <br />
        <small>{item.salary}</small> <br />
        <small><a href={item.link}>Apply Here</a></small>
      </Card.Footer>
      <Button variant="danger" onClick={buttonHandler}>Remove</Button>
    </Card>
  ) : <LoadingSpinner />);
};

JobCart.propTypes = {
  job: PropTypes.shape({
    itemId: PropTypes.string,
    role: PropTypes.string,
    owner: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default JobCart;

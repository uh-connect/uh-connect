import React, { useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Card, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useTracker } from 'meteor/react-meteor-data';
import swal from 'sweetalert';
import { SavedList } from '../../api/cart/Cart';
import Content from './ReadMore';

const JobItem = ({ job }) => {
  const [isLoading, setLoading] = useState(false);
  const [inList, setInList] = useState(false);

  const { currentUser, numItems } = useTracker(() => {
    const subscription = Meteor.subscribe(SavedList.userPublicationName);
    const rdy = subscription.ready();
    const num = rdy ? SavedList.collection.find({ itemId: job._id }).count() : -1;
    return {
      currentUser: Meteor.user() ? Meteor.user().username : '',
      numItems: num,
    };
  }, []);
  const buttonHandler = () => {
    SavedList.collection.insert({ itemId: job._id, role: 'student', owner: currentUser });
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
    <Col>
      <Card className="p-4 border" style={{ width: '18rem' }}>
        <Card.Title className="text-center"><strong>{job.title}</strong></Card.Title>
        <Card.Body>
          <Card.Text>
            <strong>{job.jobType}</strong> <br />
            <small>Available Positions: {job.positions}</small>
          </Card.Text>
          <Card.Text>
            <strong>Position Description</strong> <br />
            <Content description={job.description} />
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <strong>Skills Required</strong> <br />
          {job.skills.map((skill) => <small>{skill}, </small>)} <br />
          <hr />
          <strong>Salary</strong> <br />
          <small>{job.salary}</small> <br />
          <small><a href={job.link}>Apply Here</a></small>
        </Card.Footer>
        {currentUser && Roles.userIsInRole(Meteor.userId(), 'student') ? (
          <Button id="add-cart" onClick={buttonHandler} disabled={inList}>Save</Button>
        ) : ''}
        {currentUser && Roles.userIsInRole(Meteor.userId(), 'admin') ? (
          <Card.Text>Owner: {job.owner}</Card.Text>
        ) : ''}
        {currentUser && Roles.userIsInRole(Meteor.userId(), ['company', 'admin']) ? (
          <Card.Link href={`/edit/${job._id}`}>edit</Card.Link>
        ) : ''}
      </Card>
    </Col>
  );
};

JobItem.propTypes = {
  job: PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
    jobType: PropTypes.string,
    positions: PropTypes.number,
    description: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.oneOfType(PropTypes.string)),
    salary: PropTypes.string,
    link: PropTypes.string,
    owner: PropTypes.string,
  }).isRequired,
};

export default JobItem;

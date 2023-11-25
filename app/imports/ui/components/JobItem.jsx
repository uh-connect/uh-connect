import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Card, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useTracker } from 'meteor/react-meteor-data';

const JobItem = ({ job }) => {
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }), []);
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
            <small>INSERT DESC HERE</small>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <strong>Skills Required</strong> <br />
          {job.skills.map((skill) => <small>{skill}, </small>)} <br />
          <hr />
          <strong>Salary</strong> <br />
          <small>{job.salary}</small>
        </Card.Footer>
        {currentUser && Roles.userIsInRole(Meteor.userId(), 'company') ? (
          <Card.Link href={`/edit/${job._id}`}>edit</Card.Link>
        ) : ''}
      </Card>
    </Col>
  );
};

JobItem.propTypes = {
  job: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType(PropTypes.string))),
};

JobItem.defaultProps = {
  job: [],
};

export default JobItem;

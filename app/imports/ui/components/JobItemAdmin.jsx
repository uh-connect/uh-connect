import React from 'react';
import { Card, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const JobItemAdmin = ({ job }) => (
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
      <Card.Text>Owner: {job.owner}</Card.Text>
    </Card>
  </Col>
);

JobItemAdmin.propTypes = {
  job: PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
    jobType: PropTypes.string,
    positions: PropTypes.number,
    description: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.oneOfType(PropTypes.string)),
    salary: PropTypes.string,
    owner: PropTypes.string,
  }).isRequired,
};

export default JobItemAdmin;

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Jobs } from '../../api/job/Job';
import LoadingSpinner from '../components/LoadingSpinner';
import JobItem from '../components/JobItem';

const ListJobStudent = () => {
  const { ready, jobs } = useTracker(() => {
    const subscription = Meteor.subscribe(Jobs.studentPublicationName);
    const rdy = subscription.ready();
    const jobListings = Jobs.collection.find({}).fetch();
    return {
      ready: rdy,
      jobs: jobListings,
    };
  }, []);

  return (
    (ready ? (
      <Container id="listjob-student">
        <Row>
          {jobs.map((job) => <JobItem key={job._id} job={job} />)}
        </Row>
      </Container>
    ) : <LoadingSpinner />)
  );

};

export default ListJobStudent;

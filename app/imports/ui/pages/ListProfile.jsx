import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Profiles } from '../../api/profile/Profile';
import ProfileItem from '../components/ProfileItem';
import LoadingSpinner from '../components/LoadingSpinner';

const ListProfile = () => {
  const { ready, profiles } = useTracker(() => {
    const subscription = Meteor.subscribe(Profiles.companyPublicationName);
    const rdy = subscription.ready();
    const document = Profiles.collection.find({}).fetch();
    return {
      ready: rdy,
      profiles: document,
    };
  }, []);

  return (
    (ready ? (
      <Container id="listprofile">
        {profiles.map((profile) => <ProfileItem key={profile._id} profile={profile} />)}
      </Container>
    ) : <LoadingSpinner />)
  );
};

export default ListProfile;

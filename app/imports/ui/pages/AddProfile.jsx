import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, SubmitField, TextField, ErrorsField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Navigate } from 'react-router-dom';
import { Roles } from 'meteor/alanning:roles';
import { ExclamationOctagon } from 'react-bootstrap-icons';
import { useTracker } from 'meteor/react-meteor-data';
import { Profiles } from '../../api/profile/Profile';
import LoadingSpinner from '../components/LoadingSpinner';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  firstName: String,
  lastName: String,
  about: String,
  skills: String,
  interests: String,
  link: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the AddStuff page for adding a document. */
const AddProfile = () => {
  const { ready, profileCreated } = useTracker(() => {
    const subscription = Meteor.subscribe(Profiles.studentPublicationName);
    const rdy = subscription.ready();
    const numProfiles = Profiles.collection.find({}).count();
    const profile = numProfiles > 0;
    return {
      ready: rdy,
      profileCreated: profile,
    };
  }, []);
  // On submit, insert the data.
  const submit = (data, formRef) => {
    const { firstName, lastName, about, skills, interests, link } = data;
    if (Roles.userIsInRole(Meteor.userId(), 'student')) {
      const owner = Meteor.user().username;
      Profiles.collection.insert(
        { firstName, lastName, about, skills, interests, link, owner },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Item added successfully', 'success');
            formRef.reset();
          }
        },
      );
    } else {
      swal('Error', 'YOU DO NOT HAVE PERMISSION', 'error');
    }
  };
  if (profileCreated) {
    return <Navigate to="/previewprofile" />;
  }
  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  let fRef = null;
  return ((ready && !profileCreated) ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center">
            <h2><strong>Tell me about yourself</strong></h2>
            <h6><strong><ExclamationOctagon /> PROFILES ARE PUBLIC TO COMPANIES</strong></h6>
          </Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <TextField name="firstName" />
                  </Col>
                  <Col>
                    <TextField name="lastName" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <TextField name="interests" />
                  </Col>
                  <Col>
                    <TextField name="skills" />
                  </Col>
                </Row>
                <Row>
                  <TextField name="about" />
                </Row>
                <Row>
                  <h6><strong>Link Your Resume</strong></h6>
                  <TextField name="link" />
                </Row>
                <SubmitField value="Submit" />
                <ErrorsField />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default AddProfile;

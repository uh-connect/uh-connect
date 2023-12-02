import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, NumField, SubmitField, TextField, ErrorsField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Roles } from 'meteor/alanning:roles';
import Navigate from 'react-router-dom';
import { ExclamationOctagon } from 'react-bootstrap-icons';
import { Profiles } from '../../api/profile/Profile';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  firstname: String,
  lastname: String,
  about: String,
  skills: String,
  interests: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the AddStuff page for adding a document. */
const AddProfile = () => {
  const username = Meteor.user().username;
  const subscription = Meteor.subscribe(Profiles.studentPublicationName);
  const numProfiles = subscription.ready() ? Profiles.collection.find({ owner: username }).count() : 0;
  if (numProfiles !== 0) {
    return (
      <Navigate to="/home" />
    );
  }
  // On submit, insert the data.
  const submit = (data, formRef) => {
    const { firstname, lastname, about, skills, interests } = data;
    if (Roles.userIsInRole(Meteor.userId(), 'company')) {
      const owner = Meteor.user().username;
      Profiles.collection.insert(
        { firstname, lastname, about, skills, interests, owner },
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

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  let fRef = null;
  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center">
            <h2>Tell me about yourself</h2>
            <h6><strong><ExclamationOctagon /> PROFILES ARE PUBLIC</strong></h6>
          </Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <TextField name="firstname" />
                  </Col>
                  <Col>
                    <TextField name="lastname" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <TextField name="interests" />
                  </Col>
                  <Col>
                    <NumField name="skills" />
                  </Col>
                </Row>
                <Row>
                  <TextField name="about" />
                </Row>
                <SubmitField value="Submit" />
                <ErrorsField />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

export default AddProfile;

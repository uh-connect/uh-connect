import React from 'react';
import swal from 'sweetalert';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, SubmitField, TextField } from 'uniforms-bootstrap5';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { useParams } from 'react-router';
import { Profiles } from '../../api/profile/Profile';
import LoadingSpinner from '../components/LoadingSpinner';

const bridge = new SimpleSchema2Bridge(Profiles.schema);

const EditProfile = () => {
  const { _id } = useParams();
  const { doc, ready } = useTracker(() => {
    const subscription = Meteor.subscribe(Profiles.studentPublicationName);
    const rdy = subscription.ready();
    const document = Profiles.collection.findOne(_id);
    return {
      doc: document,
      ready: rdy,
    };
  }, [_id]);
  const submit = (data) => {
    const { firstName, lastName, about, skills, interests, link } = data;
    Profiles.collection.update(_id, { $set: { firstName, lastName, about, skills, interests, link } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success')));
  };

  return ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center"><h2>Edit Profile</h2></Col>
          <AutoForm schema={bridge} onSubmit={data => submit(data)} model={doc}>
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
  ) : <LoadingSpinner />;
};

export default EditProfile;

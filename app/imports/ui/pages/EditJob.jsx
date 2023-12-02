import React from 'react';
import swal from 'sweetalert';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, NumField, SubmitField, TextField } from 'uniforms-bootstrap5';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { useParams } from 'react-router';
import { Jobs } from '../../api/job/Job';
import LoadingSpinner from '../components/LoadingSpinner';

const bridge = new SimpleSchema2Bridge(Jobs.schema);

const EditJob = () => {
  const { _id } = useParams();
  const { doc, ready } = useTracker(() => {
    const subscription = Meteor.subscribe(Jobs.companyPublicationName);
    const rdy = subscription.ready();
    const document = Jobs.collection.findOne(_id);
    return {
      doc: document,
      ready: rdy,
    };
  }, [_id]);
  const submit = (data) => {
    const { title, company, jobType, positions, description, skills, salary } = data;
    Jobs.collection.update(_id, { $set: { title, company, jobType, positions, description, skills, salary } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success')));
  };

  return ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center"><h2>Edit Stuff</h2></Col>
          <AutoForm schema={bridge} onSubmit={data => submit(data)} model={doc}>
            <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <TextField name="title" />
                    <TextField name="company" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <TextField name="jobType" />
                    <NumField name="positions" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <TextField name="description" />
                    <TextField name="skills" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <TextField name="salary" />
                  </Col>
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

export default EditJob;

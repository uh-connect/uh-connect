import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, NumField, SubmitField, TextField, ErrorsField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Roles } from 'meteor/alanning:roles';
import { Jobs } from '../../api/job/Job';
// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  title: String,
  company: String,
  jobType: String,
  positions: Number,
  description: String,
  skills: Array,
  'skills.$': {
    type: String,
  },
  salary: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the AddStuff page for adding a document. */
const AddJob = () => {

  // On submit, insert the data.
  const submit = (data, formRef) => {
    const { title, company, jobType, positions, description, skills, salary } = data;
    if (Roles.userIsInRole(Meteor.userId(), 'company')) {
      const owner = Meteor.user().username;
      Jobs.collection.insert(
        { title, company, jobType, positions, description, skills, salary, owner },
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
          <Col className="text-center"><h2>Add Job</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
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
  );
};

export default AddJob;

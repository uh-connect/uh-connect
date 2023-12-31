import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Card, Col, Container, Row } from 'react-bootstrap';
import SimpleSchema from 'simpl-schema';
import swal from 'sweetalert';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { AutoForm, ErrorsField, SubmitField, SelectField } from 'uniforms-bootstrap5';

/**
 * SignUp component is similar to signin component, but we create a new user instead.
 */
const RoleAssign = () => {
  const schema = new SimpleSchema({
    role: String,
  });
  const bridge = new SimpleSchema2Bridge(schema);

  /* Handle SignUp submission. Create user account and a profile entry, then redirect to the home page. */
  const submit = (doc) => {
    const { role } = doc;
    Meteor.call('roleAssigner', { role: role }, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        console.log(result);
        swal('Waiting for role refresh, wait 3 seconds...');
        Meteor.setTimeout(function () { window.location.reload(); }, 3000);
      }
    }); // MAKE SURE ITS SYNCHRONOUS
  };
  return (
    <Container id="roleassign-page" className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center">
            <h2>Choose a Role (Student, Company)</h2>
          </Col>
          <AutoForm schema={bridge} onSubmit={data => submit(data)}>
            <Card>
              <Card.Body>
                <SelectField name="role" options={[{ label: 'Student', value: 'student' }, { label: 'Company', value: 'company' }]} />
                <ErrorsField />
                <SubmitField />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};
export default RoleAssign;

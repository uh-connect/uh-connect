import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { Link, Navigate } from 'react-router-dom';
import { Alert, Card, Col, Container, Row } from 'react-bootstrap';
import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { AutoForm, ErrorsField, SubmitField, SelectField } from 'uniforms-bootstrap5';

/**
 * SignUp component is similar to signin component, but we create a new user instead.
 */
const RoleAssign = () => {
  const [error, setError] = useState('');
  const [redirectToReferer, setRedirectToRef] = useState(false);

  const schema = new SimpleSchema({
    role: String,
  });
  const bridge = new SimpleSchema2Bridge(schema);

  /* Handle SignUp submission. Create user account and a profile entry, then redirect to the home page. */
  const submit = (doc) => {
    const { role } = doc;
    const subscription = Meteor.subscribe('roles', role);
    const rdy = subscription.ready();
    window.location.reload(false);
    setTimeout(1000);
    if (rdy) {
      // console.log('ROLE PUBLISHED');
      setError('Role Not Published');
    } else {
      setRedirectToRef(true);
    }
  };

  if (redirectToReferer) {
    return <Navigate to="/home" />;
  }
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
          <Alert variant="light">
            <Link to="/">Click here to go back to the homepage!</Link>
          </Alert>
          {error === '' ? (
            ''
          ) : (
            <Alert variant="danger">
              <Alert.Heading>Registration was not successful</Alert.Heading>
              {error}
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};
export default RoleAssign;

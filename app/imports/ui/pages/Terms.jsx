import React from 'react';
import { Col, Container, Navbar } from 'react-bootstrap';

/* A simple static component to render some text for the landing page. */
const Terms = () => (
  <div>
    <Navbar style={{ backgroundColor: 'darkgreen', color: 'white' }} expand="lg">
      <Container className="w-100" id="landing-page">
        <Col className="text-center pb-3 pt-3">
          <h2><strong>Terms of Services</strong></h2>
        </Col>
      </Container>
    </Navbar>
    <Container>
      <Col className="p-5">
        <h2 className="ps-5 pe-5">Use of the Service</h2>
        <h5 className="ps-5 pe-5">Eligibility: You must be at least 18 years old to use the Service. By using the Service, you represent and warrant that you are of legal age to form a binding contract with us.</h5>
        <h5 className="ps-5 pe-5">
          User Accounts: To access certain features of the Service, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
        </h5>
        <h5 className="ps-5 pe-5 pb-3">
          User Content: You are solely responsible for any content you submit to the Service. You agree not to post, transmit, or share content that violates these Terms, including content that is unlawful, harmful, defamatory, infringing,
          or otherwise objectionable
          .
        </h5>

        <h2 className="ps-5 pe-5">Termination</h2>
        <h5 className="ps-5 pe-5 pb-3">The Service is provided &quotas is&quot and &quotas available&quot without warranties of any kind, either express or implied, including, but not limited to, the implied warranties of merchantability,
          fitness for a particular purpose, or non-infringement.
        </h5>

        <h2 className="ps-5 pe-5">Limitation of Liability</h2>
        <h5 className="ps-5 pe-5 pb-3">
          We shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill,
          or other intangible losses resulting from your use of the Service.
        </h5>
        <h2 className="ps-5 pe-5">Changes to Terms</h2>
        <h5 className="ps-5 pe-5 pb-3">We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of the Service after any changes indicate your acceptance of the updated Terms.</h5>
      </Col>
    </Container>
  </div>
);

export default Terms;

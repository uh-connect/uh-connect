import React from 'react';
import { Col, Container, Navbar } from 'react-bootstrap';

/* A simple static component to render some text for the landing page. */
const FAQ = () => (
  <div>
    <Navbar style={{ backgroundColor: 'darkgreen', color: 'white' }} expand="lg">
      <Container className="w-100" id="FAQ-page">
        <Col className="text-center pb-3 pt-3">
          <h2><strong>Frequently Asked Questions</strong></h2>
        </Col>
      </Container>
    </Navbar>
    <Container>
      <Col className="p-5">
        <h5 className="ps-5 pe-5">Q: What is UH Connect, and how does it differ from other job-seeking platforms?</h5>
        <h5 className="ps-5 pe-5">A: UH Connect is a website that allows University of Hawai’i students and
          companies to reach out to each other and discuss potential job opportunities within
          their field of interest. Based on the student’s interests, employers can directly contact
          the student via email and describe who they are and what they are looking for in that
          particular student. The main difference from this and other platforms is that UH
          Connect is more local within the state of Hawai’i as opposed to all other companies
          from the mainland, so it is more exclusive in terms of availability.
        </h5>
        <h5 className="pt-3 ps-5 pe-5">Q: Who can use UH Connect? Is it open to all students, or is it specific to a particular
          university or program?
        </h5>
        <h5 className="ps-5 pe-5">A: Students that are registered within the University of Hawai’i system can use the
          program freely. As it is stated above that this platform is exclusive to Hawai’i, the
          predominant stature states that you are a UH student, therefore, students from
          other universities are not generally inclined to use the application more than a
          student that is registered within UH.
        </h5>
        <h5 className="pt-3 ps-5 pe-5">Q: How do I create an account on UH Connect?</h5>
        <h5 className="ps-5 pe-5">A: Once directed to the website itself (called the landing page) it will give you a
          prompt in the middle of the screen that says “Get started here” followed by a
          clickable button that allows you to create your account with UH Connect. Follow
          the prompts and after having signed in, click on the top Role Assignment tab to
          select whether you are a student or an employer.
        </h5>
        <h5 className="pt-3 ps-5 pe-5">Q: Is there a fee associated with UH Connect for either students or employers?
        </h5>
        <h5 className="ps-5 pe-5">A: No fee to start the account, it is free at the moment.</h5>
        <h5 className="pt-3 ps-5 pe-5">Q: How does the job search functionality work on UH Connect?
        </h5>
        <h5 className="ps-5 pe-5">A: Once an employer is listed within the database, the student will have the ability to
          search for jobs given from whichever is listed from the top tab “Find Job”. Similarly,
          employers can search for students via certain prerequisites according to their
          preferences and can contact students directly from there.
        </h5>
        <h5 className="pt-3 ps-5 pe-5">Q: Can employers actively search for potential candidates on UH Connect?</h5>
        <h5 className="ps-5 pe-5">A: Yes, employers have the option to directly look up interests based on their
          preferences which will return a student that has the closest match to whichever
          is needed within their company.
        </h5>
        <h5 className="pt-3 ps-5 pe-5">Q: What features does UH Connect offer to help students prepare for job
          applications and interviews?
        </h5>
        <h5 className="ps-5 pe-5">A: Students are able to see the information that is provided within the company that
          allows them to adjust their portfolio if necessary and gives tips to improve their
          resumes for potential jobs.
        </h5>
        <h5 className="pt-3 ps-5 pe-5">Q: Can students connect with employers or other students directly on the platform?</h5>
        <h5 className="ps-5 pe-5">A: Our current functionality does not provide chat from within the platform itself, but
          it does provide email information should both users consent to applying and hiring from
          the company.
        </h5>
        <h5 className="pt-3 ps-5 pe-5">Q: What kind of information should students include within their UH Connect
          profiles to stand out to potential employers?
        </h5>
        <h5 className="ps-5 pe-5">A: Students are free to include anything that they wish to but interests and skills are
          highly recommended. Companies are actively seeking students that fit their needs and
          criteria. The more skills that are incorporated into a student profile will give more
          incentive for the company to contact the student, thus it is highly encouraged that the
          student put as much about themselves as possible.
        </h5>
        <h5 className="pt-3 ps-5 pe-5">Q: Can employers customize their job postings to include specific requirements and
          qualifications?
        </h5>
        <h5 className="ps-5 pe-5">A: Yes, companies can post anything to their profiles that allows them to give
          students the opportunity to contact the company based on what the employer is
          actively seeking. This is including requirements and qualifications if necessary to inform
          the student what they would need before contacting.
        </h5>
      </Col>
    </Container>
  </div>
);

export default FAQ;

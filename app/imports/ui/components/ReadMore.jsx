import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Row } from 'react-bootstrap';

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setReadMore] = useState(true);
  const toggleReadMore = () => {
    setReadMore(!isReadMore);
  };
  return (
    <Row>
      <small>
        {isReadMore ? text.slice(0, 50) : text}
      </small>
      <Button
        onClick={toggleReadMore}
        className="btn-sm"
      >
        {isReadMore ? '...read more' : ' show less'}
      </Button>
    </Row>
  );
};

const Content = ({ description }) => (
  <ReadMore>
    {description}
  </ReadMore>
);

ReadMore.propTypes = {
  children: PropTypes.string.isRequired,
};

Content.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Content;

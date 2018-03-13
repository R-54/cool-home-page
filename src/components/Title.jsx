import React from 'react';
import PropTypes from 'prop-types';

const Title = props => (
  <div className="title">
    <h1>
      {props.name}<br />
      {props.lastName}<br />
      <p className="subtitle">{props.degree}</p>
    </h1>
  </div>
);

Title.protoType = {
  name: PropTypes.string,
  lastName: PropTypes.string,
  degree: PropTypes.degree,
};

export default Title;
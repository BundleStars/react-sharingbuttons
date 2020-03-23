import React from 'react';
import PropTypes from 'prop-types';

const SharingButton = props => (
  <a
    className={`react-sharing-button__link react-sharing-button--${props.type}`}
    href={props.fullUrl}
    target="_blank"
    rel="noopener noreferrer"
    onClick={props.onClick}
    title={props.text}
  >
    {props.icon({ className: 'react-sharing-button__icon' })}
  </a>
);

SharingButton.propTypes = {
  type: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  fullUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default SharingButton;

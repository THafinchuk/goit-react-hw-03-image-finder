import React from 'react';

import PropTypes from 'prop-types';

import { StyledButton } from './BtnStyled';

const Button = ({ onClick }) => {
  return <StyledButton onClick={onClick}>Load more</StyledButton>;
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;

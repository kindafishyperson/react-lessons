import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  border-radius: 0.5em;
  max-width: 30%;
  min-width: 15%;`;
function CustomButton(props) {
  const { onClick, text, type } = props;
  return <StyledButton type={type} onClick={onClick}>{text}</StyledButton>;
}
CustomButton.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
CustomButton.defaultProps = {
  onClick: () => false,
};
export default CustomButton;

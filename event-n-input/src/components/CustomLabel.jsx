import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const StyledLabel = styled.label``;

function CustomLabel(props) {
  const { text } = props;
  return <StyledLabel>{text}</StyledLabel>;
}
CustomLabel.propTypes = {
  text: PropTypes.string.isRequired,
};
export default CustomLabel;

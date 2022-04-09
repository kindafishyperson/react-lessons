import styled from 'styled-components';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const StyledInput = styled.input`
  border-radius: 0.5em;
  min-width: 70%;
  max-width: 80%;
  margin: 10%;
  border: 2px solid black;
  &:invalid {
    border: 2px solid red;
}`;
function CustomInput(props) {
  const {
    type, onChange, placeholder, required, minlength, maxlength,
  } = props;
  const [value, setValue] = useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };
  return (
    <StyledInput
      onChange={handleChange}
      type={type}
      value={value}
      placeholder={placeholder}
      required={required}
      minLength={minlength}
      maxLength={maxlength}
    />
  );
}
CustomInput.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  minlength: PropTypes.number,
  maxlength: PropTypes.number,
};
CustomInput.defaultProps = {
  required: false,
  minlength: 0,
  maxlength: 524288,
};
export default CustomInput;

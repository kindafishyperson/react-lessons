import React from 'react';
import PropTypes from 'prop-types';

function TodoItemTextInput({ checked, onChange }) {
  return <input className="Item-input" type="checkbox" onChange={onChange} checked={checked} />;
}
TodoItemTextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
};
TodoItemTextInput.defaultProps = {
  checked: false,
};
export default TodoItemTextInput;

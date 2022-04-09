import React from 'react';
import PropTypes from 'prop-types';

function TodoItemTextInput({ defaultValue, onChange }) {
  return (
    <input
      className="Item-input"
      type="text"
      onChange={onChange}
      defaultValue={defaultValue}
      onFocus={(e) => e.target.select()}
    />
  );
}
TodoItemTextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
};
TodoItemTextInput.defaultProps = {
  defaultValue: '',
};
export default TodoItemTextInput;

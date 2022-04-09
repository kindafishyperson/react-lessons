import React from 'react';
import PropTypes from 'prop-types';

function TodoItemText({ text, isCompleted }) {
  return <span className={`Item-text ${isCompleted ? 'Item-completed' : ''}`}>{text}</span>;
}
TodoItemText.propTypes = {
  text: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool,
};
TodoItemText.defaultProps = {
  isCompleted: false,
};
export default TodoItemText;

import React from 'react';
import PropTypes from 'prop-types';

function TodoItemButton({ text, onClick }) {
  return <button className="Item-button" type="button" onClick={onClick}>{text}</button>;
}
TodoItemButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default TodoItemButton;

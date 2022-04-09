import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoItemTextInput from './TodoItemTextInput';
import TodoItemButton from './TodoItemButton';

function NewItem(props) {
  const { onAdd } = props;
  const [tempText, setTempText] = useState('');
  return (
    <div className="Item Header">
      <TodoItemTextInput onChange={(e) => setTempText(e.target.value)} />
      <TodoItemButton onClick={() => onAdd(tempText)} text="Add" />
    </div>
  );
}
NewItem.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
export default NewItem;

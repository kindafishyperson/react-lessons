/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  statuses,
  Item,
} from './Item';
import './Item.css';
import TodoItemText from './TodoItemText';
import TodoItemButton from './TodoItemButton';
import TodoItemTextInput from './TodoItemTextInput';
import TodoItemCheckboxInput from './TodoItemCheckboxInput';

function TodoItem(props) {
  const {
    task, actionCallbacks, editMode: initialEditMode,
  } = props;
  const { onRemove, onToggle, onEditSave } = actionCallbacks;
  const { text, id, isCompleted } = task;
  const [editMode, setEditMode] = useState(initialEditMode);
  const [tempText, setTempText] = useState('');
  const onEdit = () => {
    setTempText(text);
    setEditMode(true);
  };
  const onApply = () => {
    onEditSave(id, tempText);
    setEditMode(false);
  };
  return (
    <li className="Item">
      {!editMode ? (
        <>
          <TodoItemText text={text} isCompleted={isCompleted} />
          <TodoItemText text={statuses[isCompleted]} />
          <TodoItemCheckboxInput onChange={() => onToggle(id)} checked={isCompleted} />
          <TodoItemButton onClick={onEdit} text="Edit" />
          <TodoItemButton onClick={() => onRemove(id)} text="Remove" />
        </>
      ) : (
        <>
          <TodoItemTextInput defaultValue={text} onChange={(e) => setTempText(e.target.value)} />
          <TodoItemButton onClick={onApply} text="Apply" />
        </>
      )}
    </li>
  );
}
TodoItem.propTypes = {
  task: PropTypes.instanceOf(Item).isRequired,
  actionCallbacks: PropTypes.shape({
    onRemove: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
    onEditSave: PropTypes.func.isRequired,
  }).isRequired,
  editMode: PropTypes.bool.isRequired,
};
export default TodoItem;

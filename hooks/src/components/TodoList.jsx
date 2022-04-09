/* eslint-disable react/prop-types */
import React, { useReducer, useCallback, memo } from 'react';
import {
  Item,
} from './Item';
import TodoItem from './TodoItem';
import NewItem from './NewItem';

const actions = {
  remove: 1,
  toggle: 2,
  edit: 3,
  add: 4,
};
const listReducer = (state, action) => {
  const { type, id } = action;
  switch (type) {
    case actions.remove: return state.filter((item) => item.id !== id);
    case actions.toggle:
      return state.map((item) => (item.id === id ? new Item({
        ...item,
        isCompleted: !item.isCompleted,
      }) : item));
    case actions.edit:
      return state.map((item) => (item.id === id ? new Item({
        ...item,
        text: action.updated,
      }) : item));
    case actions.add:
      return [...state, action.new];
    default: return state;
  }
};
let counter = 0;
function TodoList() {
  const [tasks, updateList] = useReducer(listReducer, []);
  const MemoItem = memo(({
    task, actionCallbacks,
  }) => (
    <TodoItem
      task={task}
      actionCallbacks={actionCallbacks}
      editMode={false}
    />
  ));
  const onAdd = useCallback((itemText) => {
    if (itemText === '') return;
    updateList({
      type: actions.add,
      new: new Item(
        { id: counter, text: itemText, isCompleted: false },
      ),
    });
    counter += 1;
  }, []);
  const onRemove = useCallback((id) => {
    updateList({ id, type: actions.remove });
  }, []);
  const onToggle = useCallback((id) => {
    updateList({
      id,
      type: actions.toggle,
    });
  }, []);
  const onEditSave = useCallback((id, itemText) => {
    updateList({
      id,
      type: actions.edit,
      updated: itemText,
    });
  }, []);
  const tasksItems = tasks.map((task) => (
    <MemoItem
      key={task.id}
      task={task}
      actionCallbacks={
      { onRemove, onToggle, onEditSave }
    }
    />
  ));
  return (
    <div className="List-container">
      <NewItem onAdd={onAdd} />
      <ul className="List">
        {tasksItems}
      </ul>
    </div>
  );
}
export default TodoList;

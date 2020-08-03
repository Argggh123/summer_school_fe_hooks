import React from 'react';
import './TodoItem.css'

const TodoItem = ({ todo, checkHandler }) => {
  return (
    <div className="todo-item">
      <h3>{todo.name}</h3>
      <p>{todo.description}</p>
      <label htmlFor="isDone" onClick={checkHandler}>
        <input type="checkbox" name="isDone" value={todo.isDone} checked={todo.isDone} />
        Выполнено
      </label>
    </div>
  );
};

export default TodoItem;

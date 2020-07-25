import React from 'react';

import './TodoList.css';

const TodoList = props => {
  return (
    <section className="todo-list">
      <h2>Todo List</h2>
      <ul>
        {props.todos.map(ig => (
          <li key={ig.id} onClick={props.onRemoveTodo.bind(this, ig.id)}>
            <span>{ig.title}</span>
            <span>{ig.amount}x</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TodoList;

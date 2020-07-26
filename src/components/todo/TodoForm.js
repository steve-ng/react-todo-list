import React, { useState } from 'react';

import './TodoForm.css';

const TodoForm = props => {
  const [enteredTitle, setEnteredTitle] = useState('');

  const submitHandler = event => {
    event.preventDefault();
    props.onAddTodo({ title: enteredTitle });
  };

  return (
    <div className="todo-form">
      <div className="card">
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={enteredTitle}
              onChange={event => setEnteredTitle(event.target.value)}
            />
          </div>
          <div className="todo-form__actions">
            <button type="submit">Add Todo</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;

import React, { useState } from 'react';

import Card from '../UI/Card';
import './TodoForm.css';

const TodoForm = props => {
  const [enteredTitle, setEnteredTitle] = useState('');

  const submitHandler = event => {
    event.preventDefault();
    props.onAddTodo({ title: enteredTitle });
  };

  return (
    <section className="todo-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={enteredTitle}
              onChange={event => {
                setEnteredTitle(event.target.value);
              }}
            />
          </div>
          <div className="todo-form__actions">
            <button type="submit">Add Todo</button>
          </div>
        </form>
      </Card>
    </section>
  );
};

export default TodoForm;

import React, { useState } from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todos = props => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = todo => {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: Math.random().toString(), ...todo }
    ]);
  };

  const removeTodoHandler = id => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className="App">
      <TodoForm onAddTodo={addTodoHandler} />

      <section>
        <TodoList 
          todos={todos} 
          onRemoveTodo={removeTodoHandler} />
      </section>
    </div>
  );
}

export default Todos;

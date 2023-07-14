import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Form from './Components/Form';
import TodoList from './Components/TodoList';

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const filteredTodos = todos.filter((todo) =>
  todo.title.toLowerCase().includes(searchQuery.toLowerCase())
);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  })
  return (
    <div className="App">
      <div className='container'>
        <div>
          <Header />
        </div>
    
          <input
            type="text"
            placeholder="Search..."
            onChange={handleSearchChange}
          />
          <ul>
            {filteredTodos.map((todo) => (
              <li >{todo.title}</li>
            ))}
          </ul>
        
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo} />
        </div>
        <div>
          <TodoList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>

    </div>
  );
}

export default App;

import './App.css';
import React, { useState, Text } from 'react';
import Header from './components/header';
import ToDoList from './components/todolist';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'feed the cat', key: '3' },
  ]);

// deletes a todo upon click
  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  // adds a todo upon submit of button
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   AddTodo(e);
  //   setTodos('');
  // }
  
// adds a todo upon submit of button, gets a random id/key
  const submitHandler = (text) => {
  setTodos((prevTodos) => {
    return [
      {text: text, key: Math.random().toString()},
      ...prevTodos
    ]
  })
}
  return (
    <div className='App'>
      <Header />
      {/* add form here */}
      <AddTodo submitHandler={submitHandler} />
      <div className='item-list'>
        {todos.map((item, index) => (
          <ToDoList // equivalent as FlatList
            data={todos}
            key={index}
            index={index}
            item={item}
            pressHandler={pressHandler}
          />
        ))}
      </div>
    </div>
  );
}

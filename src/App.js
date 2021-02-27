import './App.css';
import React, { useState, Text } from 'react';
import Header from './components/header';
import ToDoList from './components/todolist';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'feed the cat', key: '3' },
  ]);

  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  return (
    <div className='App'>
      <Header />
      {/* add form here */}
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

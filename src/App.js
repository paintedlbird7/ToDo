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

  return (
    <div className='App'>
      <Header />
      {/* <p>
          Rosa's Todo List
        </p> */}
      {/* add form here */}
      <div className='todo-list'>
        {todos.map((todo, index) => (
          <ToDoList // equivalent as FlatList
            data={todos}
            key={index}
            index={index}
            todo={todo}
          />
        ))}
      </div>
    </div>
  );
}

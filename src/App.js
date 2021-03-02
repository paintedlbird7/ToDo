import './App.css';
import React, { useState, } from 'react';
import Header from './components/header';
import ToDoList from './components/todolist';
import AddTodo from './components/addTodo';

export default function Todo() {
  const [tasks, setTasks] = useState([
    { title: 'buy coffee', key: '1' },
    { title: 'create an app', key: '2' },
    { title: 'feed the cat', key: '3' },
  ]);

// DELETES a todo upon click
  const pressHandler = (key) => {
    setTasks(prevTasks => {
      return prevTasks.filter(tasks => tasks.key != key);
    });
  };

  // ADDS a todo upon submit
  const addTask = title => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
};

  return (
    <div className='App'>
      <Header />
      <AddTodo addTask={addTask}/>
      <div className='item-list'>
        {tasks.map((item, index) => (
          <ToDoList // equivalent as FlatList
            data={tasks}
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

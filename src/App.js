import './App.css';
import React, { useState } from 'react';
import Header from './components/header';
// import ToDoList from './components/deleteTodo';
import AddTodo from './components/addTodo';
// import ToDoList from './components/completeTodo';

function ToDoList({ tasks, index, item, completeTodo, deleteTodo }) {
  console.log(item);
  return (
    <div className='task'>
      <span style={{ textDecoration: tasks.completed ? 'line-through' : '' }}>
        {tasks.title}
      </span>
      <button onClick={() => completeTodo(index)}>Complete</button>
      {/* // TouchableOpacity for mobile */}
      <button
        onClick={() => deleteTodo(index)}
        style={{ color: 'red' }}
        className='item'>
        {/* {item.title} */}x
      </button>
    </div>
  );
}

function Todo() {
  const [tasks, setTasks] = useState([
    { title: 'buy coffee', key: '1', completed: false },
    { title: 'create an app', key: '2', completed: false },
    { title: 'feed the cat', key: '3', completed: false },
  ]);

  // DELETES a todo upon click
  const deleteTodo = key => {
    console.log(key);
    const newTasks = [...tasks];
    newTasks.splice(key, 1);
    setTasks(newTasks);
  };

  // ADDS a todo upon submit
  const addTask = title => {
    console.log(title);
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
  };

  // COMPLETES
  const completeTodo = index => {
    // console.log("index", index);
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };

  return (
    <div className='App'>
      <Header />
      <AddTodo addTask={addTask} />
      <div className='item-list'>
        {tasks.map((tasks, index) => (
          <ToDoList // equivalent as FlatList
            data={tasks}
            key={index}
            index={index}
            // item={item}
            tasks={tasks}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
}
export default Todo;

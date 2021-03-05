import './App.css';
import React, { useState, } from 'react';
import Header from './components/header';
// import ToDoList from './components/deleteTodo';
import AddTodo from './components/addTodo';
// import ToDoList from './components/completeTodo';

function ToDoList({ tasks, index, item, completeTask,  pressHandler }) {
   console.log(item)
   return (
       <div className="task">
         <span style={{ textDecoration: tasks.completed ? "line-through" : "" }}>{tasks.title}</span>
           <button onClick={() => completeTask(index)}>Complete</button>
           {/* // TouchableOpacity for mobile */}
    <button onClick={() => pressHandler(index)} 
    style={{color: "red"}}
    className="item">
    {/* {item.title} */}
    x</button>
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
  const pressHandler = (key) => {
    const newTasks = [...tasks];
    newTasks.splice(key, 1);    
    setTasks(newTasks);
  };

// ADDS a todo upon submit
  const addTask = title => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
};

// COMPLETES
const completeTask = index => {
  // console.log("index", index);
  const newTasks = [...tasks];
  newTasks[index].completed = true;
  setTasks(newTasks);
};

  return (
    <div className='App'>
      <Header />
      <AddTodo addTask={addTask}/>
      <div className='item-list'>
        {tasks.map((tasks, index) => (
          <ToDoList // equivalent as FlatList
            data={tasks}
            key={index}
            index={index}
            // item={item}
            tasks={tasks}
            completeTask={completeTask}
            pressHandler={pressHandler}
          />
        ))}
      </div>
    </div>
  );
}
export default Todo;
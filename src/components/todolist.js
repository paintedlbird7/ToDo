import React from 'react';
 
export default function ToDoList({ todo }) {
   return (
    <div className="todo">
    {todo.text}
  </div>
   );
};
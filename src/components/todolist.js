import React from 'react';
 
export default function ToDoList({ item, pressHandler }) {
   return (
    <div onClick={() => pressHandler(item.key)} style={{color: "red"}}className="item">
    {item.text}
  </div>
   );
};
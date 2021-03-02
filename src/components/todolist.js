import React from 'react';
 
export default function ToDoList({ item, pressHandler }) {
   return (
    <div // TouchableOpacity for mobile
    onClick={() => pressHandler(item.key)} 
    style={{color: "red"}}
    className="item">
    {item.title}
  </div>
   );
};
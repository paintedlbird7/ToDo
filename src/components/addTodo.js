import React, { useState } from 'react';

export default function AddTodo({ addTask }) { //destructuring submitHandler
    const [value, setValue] = useState('');
    
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      
      addTask(value);
      setValue("");
      }

    
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                placeholder='add a new todo'
                onChange={e => setValue(e.target.value)}
            />    
            {/* <button onClick={() => //this duplicates AddTask text
                // addTask(value)} title='add todo'>Submit</button> */} 
            </form>
    );
 };
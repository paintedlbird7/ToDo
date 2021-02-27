import './App.css';
import React, { useState } from 'react';
import Header from './components/header';


export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'feed the cat', key: '3' }
  ]);

  return (
    <div className="App">
      <Header />
        <p>
          Rosa's Todo List
        </p>
    </div>
  );
}
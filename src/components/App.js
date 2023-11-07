import React, { useState } from 'react';
import './App.css';
import Login from './Login';

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  let content = null;

  if (currentPage === 'login') {
    content = (
      <div className="login-container">
        <Login />
      </div>
    );
  } 

  return <div className="App">{content}</div>;
}

export default App;

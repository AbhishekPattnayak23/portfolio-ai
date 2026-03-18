import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Application</h1>
        <p>Environment: {process.env.REACT_APP_ENV}</p>
      </header>
    </div>
  );
}

export default App;

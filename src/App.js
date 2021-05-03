import React from 'react';
import './App.css';
import Header from './components/Header'
import MemeGenerator from './components/MemeGenerator'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <MemeGenerator/>
      </div>
    </div>
  );
}

export default App;

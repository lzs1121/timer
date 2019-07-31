import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FuncTimer from './components/FuncTimer';
import ClassTimer from './components/ClassTimer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <FuncTimer />
        <ClassTimer change={() => {}}/>
      </main>
    </div>
  );
  }
}


export default App;

import React, { Component } from 'react';
import TodoForm from './components/TodoForm/TodoForm'
import NavBar from './components/NavBar/NavBar'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      text: "",
      todos: []
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          React Todo App
        </header>
        <NavBar />
        <TodoForm />
      </div>
    );
  }
}

export default App;

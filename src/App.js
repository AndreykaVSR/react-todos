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
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(evt){
    this.setState({ text: evt.currentTarget.value })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          React Todo App
        </header>
        <NavBar />
        <TodoForm
        text={this.state.text} 
        handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;

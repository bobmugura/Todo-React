import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Leetcode practice',
        completed: false,
      },
      {
        id: 2,
        title: 'Dinner prep',
        completed: true,
      },
      {
        id: 3,
        title: 'Get a haircut',
        completed: false,
      },
    ]
  }

  markComplete = (id) => {
    console.log(id)
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;

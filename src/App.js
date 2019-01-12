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
        completed: false,
      },
      {
        id: 3,
        title: 'Get a haircut',
        completed: false,
      },
    ]
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;

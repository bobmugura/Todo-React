import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos'
import Header from './components/layout/Header'

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

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) =>
        (todo.id !== id)
      )]
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Todos todos={this.state.todos} toggleComplete={this.toggleComplete}
          deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;

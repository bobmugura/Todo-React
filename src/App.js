import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import uuid from 'uuid'

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Leetcode practice',
        completed: false,
      },
      {
        id: uuid.v4(),
        title: 'Dinner prep',
        completed: true,
      },
      {
        id: uuid.v4(),
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

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false,
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo} />
        </div>
      </div>
    );
  }
}

export default App;

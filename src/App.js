import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css';

const todos = [
  {
  name: '',
  id: '',
  completed: false
}
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos
    }
  }

  //class method to update state
  toggleTodo = todoId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        setTimeout(console.log(this.state.todos), 5000);
        return todo;
      })
    });
  };

  //class method to add a todo item
  addTodo = todo => {
    const newTodo = {
      name: todo,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
    console.log(newTodo);
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  };


  render() {
    return (
      <div>
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTodo={this.addTodo}/>
        </div>

          <TodoList
            todos={this.state.todos}
            toggleTodo={this.toggleTodo}
            clearCompleted={this.clearCompleted}
          />
      </div>
    );
  }
}

export default App;

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    //for sorting the list based on completed or not
    return (
        <div className='todo-list'>
            {props.todos.map(todo => (
                <Todo key={todo.id} todo={todo} toggleTodo={props.toggleTodo} />
            ))}
            <button className='clear-btn' onClick={props.clearCompleted}>
                Clear Completed
            </button>
        </div>
    );
};

export default TodoList;
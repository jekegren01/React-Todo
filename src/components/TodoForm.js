import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: ""
        };
    }

    handleChanges = e => {
        this.setState({ todo: e.target.value });
    };

    submitTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.props.todo);
        this.setState({ todo: ""});
    };

    render() {
        return (
            <form onSubmit={this.submitTodo}>
                <input
                    type='text'
                    name='todo'
                    value={this.state.todo}
                    onChange={this.handleChanges} 
                />
                <button>Add Todo</button>
            </form>
        );
    }
};

export default TodoForm;
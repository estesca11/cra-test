import React, { Component } from "react";
class TodoList extends Component {
    state = {
        todos: [],
    };
    onClick = () => {
        import('./Todo.js').then(({ Todo }) => {
            const { todos } = this.state;
            const position = todos.length + 1;
            const newTodo = <Todo key={position} title={`To Do ${position}`} />;
            this.setState({ todos: [...todos, newTodo] });
        });
    };

    render() {
        const { todos } = this.state;
        return (
            <div>
                <button onClick={this.onClick}>add</button>
                {todos}
            </div>
        );
    }
}
export default TodoList;
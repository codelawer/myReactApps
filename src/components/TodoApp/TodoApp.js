import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import uuid from 'react-uuid';

export default class TodoApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todo: '',
            datepicker: '',
            edit: false,
            todos: [{ id: 0, todo: 'sample', datepicker: '11-02-2009' }],
            toggleHeader: true,
        };
    }

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value, [e.target.id]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        let newTodo = { id: uuid(), todo: this.state.todo, datepicker: this.state.datepicker };
        let todos = [...this.state.todos, newTodo];

        this.state.todo.length <= 0
            ? alert('Add Todo SVP')
            : this.state.datepicker === null
            ? alert('Chose assignment date SVP!')
            : this.setState({ todos, todo: '', datepicker: null, edit: false });
    };

    handleDelete = id => {
        let todos = this.state.todos.filter(todo => todo.id !== id);
        this.setState({ todos });
    };

    handleEdit = id => {
        let selectedTodo = this.state.todos.find(todo => todo.id === id);
        let todos = this.state.todos.filter(todo => todo.id !== id);
        this.setState({
            todos,
            todo: selectedTodo.todo,
            datepicker: selectedTodo.datepicker,
            edit: true,
        });
    };
    render() {
        return (
            <div className="container mt-5 border-top border-danger">
                <button
                    onClick={() => this.setState({ toggleHeader: !this.state.toggleHeader })}
                    className="btn-block btn-primary mb-3 font-weight-bold"
                >
                    Todo App{' '}
                    <FontAwesomeIcon
                        style={{ float: 'right' }}
                        icon={this.state.toggleHeader ? faArrowUp : faArrowDown}
                    />
                </button>
                {this.state.toggleHeader && (
                    <div>
                        <TodoForm
                            state={this.state}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                        />

                        {this.state.todos.length > 0 ? (
                            <TodoList
                                todos={this.state.todos}
                                handleDelete={this.handleDelete}
                                handleEdit={this.handleEdit}
                            />
                        ) : (
                            <div className="btn btn-warning btn-block mt-3 p-3 font-weight-bold">
                                No Todos Yet!
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    }
}

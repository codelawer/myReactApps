import React, { Component } from 'react';

export default class TodoForm extends Component {
    render() {
        const { todo, datepicker, edit } = this.props.state;
        const { handleChange, handleSubmit } = this.props;
        return (
            <div className="container mt-5 border-top border-danger">
                <h2>Add Todo</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Todo</label>
                            <input
                                type="text"
                                className="form-control"
                                id="todo"
                                placeholder="Add To Do..."
                                onChange={handleChange}
                                value={todo}
                            ></input>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Due Date</label>
                            <input
                                id="datepicker"
                                onChange={handleChange}
                                className="form-control"
                                type="date"
                                value={datepicker}
                            ></input>
                        </div>
                    </div>
                    {edit ? (
                        <button className="btn btn-success">Edit</button>
                    ) : (
                        <button className="btn btn-primary">Submit</button>
                    )}
                </form>
            </div>
        );
    }
}

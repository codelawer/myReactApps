import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

const TodoList = ({ todos, handleDelete, handleEdit }) => {
    return (
        <div className="container">
            <table className="table table-dark table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Number</th>
                        <th scope="col">Todos</th>
                        <th scope="col">Assignment Date</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Edit</th>
                    </tr>
                </thead>

                {todos.map((todo, i) => (
                    <tbody key={i}>
                        <tr>
                            <th scope="row">{i + 1}</th>
                            <td>{todo.todo}</td>
                            <td>{todo.datepicker}</td>
                            <td onClick={() => handleDelete(todo.id)}>
                                <FontAwesomeIcon icon={faTrashAlt} />
                            </td>
                            <td onClick={() => handleEdit(todo.id)}>
                                <FontAwesomeIcon icon={faEdit} />
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    );
};
export default TodoList;

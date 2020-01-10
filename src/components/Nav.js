import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <div>
                <ul className="nav nav-pills nav-fill nav-tabs m-3 ">
                    <li className="nav-item">
                        {' '}
                        <Link to="/counter">Counter</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/repos">Repos</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/address">TR Addresses</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/todoApp">Todo App</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/todoRaw">Todo Raw</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Counter from './components/Counter';
import Repos from './components/Repos';
import TrAddress from './components/TrAddress';
import TodoApp from './components/TodoApp/TodoApp';
import Calculator from './components/Calculator';

import './App.css';

export default class App extends Component {
    toggleHeader = () => {
        console.log('toggled');
    };
    render() {
        return (
            <div className="container">
                <Router>
                    <Nav />

                    <Switch>
                        <Route exact path="/counter">
                            <Counter
                                handleIncrement={this.handleIncrement}
                                handleDecrement={this.handleDecrement}
                                state={this.state}
                                retrieve={this.retrieve}
                            />
                        </Route>
                        <Route path="/repos">
                            <Repos />
                        </Route>
                        <Route path="/address">
                            <TrAddress />
                        </Route>
                        <Route path="/todoApp">
                            <TodoApp />
                        </Route>
                        <Route path="/calculator">
                            <Calculator />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

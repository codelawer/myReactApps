import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            errMes: '',
            display: true,
        };
    }

    handleIncrement = () => {
        this.state.counter < 10 && this.state.counter >= 0
            ? this.setState({
                  counter: this.state.counter + 1,
                  errMes: '',
              })
            : this.setState({
                  counter: 0,
                  errMes: 'Reset',
              });
    };

    handleDecrement = () => {
        this.state.counter <= 0
            ? this.setState({
                  counter: 0,
                  errMes: 'Not less than zero',
              })
            : this.setState({
                  counter: this.state.counter - 1,
              });

        this.state.errMes.length > 5 && this.setState({ display: false });
    };

    retrieve = () => {
        this.setState({
            display: true,
        });
    };

    render() {
        let { counter, errMes, display } = this.state;
        return (
            <div>
                <button className="btn-block btn-primary mb-3 font-weight-bold">
                    Counter <FontAwesomeIcon style={{ float: 'right' }} icon={faArrowDown} />
                </button>
                <div>Counter: {counter}</div>
                {display ? (
                    <div>
                        <button onClick={this.handleIncrement}>Increment</button>
                        <button onClick={this.handleDecrement}>Decrement</button>
                        {errMes !== '' && <div>{errMes}</div>}
                    </div>
                ) : (
                    <div>
                        <button onClick={this.retrieve}>Refresh</button>
                    </div>
                )}
            </div>
        );
    }
}

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            displayValue: '0',
            waitingForOperand: false,
            operator: null,
        };
    }

    handleInput = e => {
        let { displayValue, waitingForOperand } = this.state;
        waitingForOperand
            ? this.setState({
                  displayValue:
                      displayValue === '0' ? String(e.target.id) : displayValue + e.target.id,
                  waitingForOperand: true,
              })
            : this.setState({
                  displayValue:
                      displayValue === '0' ? String(e.target.id) : displayValue + e.target.id,
                  waitingForOperand: false,
              });
    };

    handleDot = dot => {
        this.state.displayValue.indexOf('.') === -1 &&
            this.setState({ displayValue: this.state.displayValue + dot });
    };

    handlePercentage = () => {
        let percentage = parseInt(this.state.displayValue) / 100;
        this.setState({
            displayValue: String(percentage),
        });
    };

    handleClear = () => {
        this.setState({ displayValue: '0' });
    };

    handleOperator = operator => {
        function operate(previousVal, nextVal) {
            return parseFloat(previousVal) + parseFloat(nextVal);
        }
        let value = operate(this.state.displayValue, this.state.displayValue);

        this.setState({
            value,
            waitingForOperand: false,
        });
    };

    handleResult = () => {};

    render() {
        console.log(this.state.displayValue);
        return (
            <div>
                <button className=" btn-block btn-primary mb-3 font-weight-bold">
                    Calculator <FontAwesomeIcon style={{ float: 'right' }} icon={faArrowDown} />
                </button>

                <div className="container">
                    <div className="row justify-content-center">
                        <div>
                            <div className="card " style={{ height: '50px' }}>
                                {this.state.displayValue}
                            </div>
                            <button
                                id="AC"
                                className="col-3 btn btn-sm btn-outline-danger m-1"
                                onClick={this.handleClear}
                            >
                                AC
                            </button>
                            <button
                                className="col-3 btn btn-sm btn-outline-danger m-1"
                                onClick={() => this.handleOperator('+')}
                            >
                                +
                            </button>
                            <button
                                id="0"
                                className="col-3 btn btn-sm btn-outline-danger m-1"
                                onClick={this.handleInput}
                            >
                                0
                            </button>
                            <button
                                id="1"
                                className="col-3 btn btn-sm btn-outline-danger m-1"
                                onClick={this.handleInput}
                            >
                                1
                            </button>
                            <button
                                id="2"
                                className="col-3 btn btn-sm btn-outline-danger m-1"
                                onClick={this.handleInput}
                            >
                                2
                            </button>
                            <button
                                id="3"
                                className="col-3 btn btn-sm btn-outline-danger m-1"
                                onClick={this.handleInput}
                            >
                                3
                            </button>
                            <button
                                id="4"
                                className="col-3 btn btn-sm btn-outline-danger m-1"
                                onClick={this.handleInput}
                            >
                                4
                            </button>
                            <button
                                id="5"
                                className="col-3 btn btn-sm btn-outline-danger m-1"
                                onClick={this.handleInput}
                            >
                                5
                            </button>
                            <button
                                id="6"
                                className="col-3 btn btn-sm btn-outline-danger m-1"
                                onClick={this.handleInput}
                            >
                                6
                            </button>
                            <button
                                id="7"
                                className="col-3 btn btn-sm btn-outline-danger m-1"
                                onClick={this.handleInput}
                            >
                                7
                            </button>
                            <button
                                id="8"
                                className="col-3 btn btn-sm btn-outline-danger m-1"
                                onClick={this.handleInput}
                            >
                                8
                            </button>
                            <button
                                id="9"
                                className="col-3 btn btn-sm btn-outline-danger m-1"
                                onClick={this.handleInput}
                            >
                                9
                            </button>
                            <button
                                className="col-3 btn btn-sm btn-outline-danger m-1"
                                onClick={() => this.handleDot('.')}
                            >
                                .
                            </button>

                            <button
                                className="col-3 btn btn-sm btn-outline-danger m-1"
                                onClick={this.handlePercentage}
                            >
                                %
                            </button>

                            <button
                                id="="
                                className="col-3 btn btn-sm btn-outline-danger m-1"
                                onClick={this.handleResult}
                            >
                                =
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

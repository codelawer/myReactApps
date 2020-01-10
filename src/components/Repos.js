import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default class Repos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: [],
            selectedRepo: '',
            contributors_url: '',
        };
    }

    async componentDidMount() {
        await fetch('https://api.github.com/users/HackYourFutureBelgium/repos')
            .then(response => response.json())
            .then(res =>
                this.setState({
                    repos: res,
                }),
            );

        let contributors_url = this.state.repos
            .filter(repo => {
                return repo.id === Number(this.state.selectedRepo);
            })
            .map(repo => {
                return repo.contributors_url;
            })
            .toString();
        console.log(contributors_url);
    }

    render() {
        console.log(this.state.contributors_url);
        return (
            <div style={{ marginTop: '50px', borderTop: '1px solid red', paddingTop: '10px' }}>
                <button className="btn-block btn-primary mb-3 font-weight-bold">
                    Repos <FontAwesomeIcon style={{ float: 'right' }} icon={faArrowDown} />
                </button>
                {this.state.repos.length > 0 ? (
                    <div>
                        <select
                            onChange={e => {
                                this.setState({ selectedRepo: e.target.value });
                            }}
                        >
                            {this.state.repos.map(repo => {
                                return (
                                    <option key={repo.id} value={repo.id}>
                                        {repo.name}
                                    </option>
                                );
                            })}
                        </select>
                        <div>
                            {this.state.repos
                                .filter(repo => {
                                    return repo.id === Number(this.state.selectedRepo);
                                })
                                .map(repo => {
                                    return repo.contributors_url;
                                })
                                .toString()}
                        </div>
                    </div>
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        );
    }
}

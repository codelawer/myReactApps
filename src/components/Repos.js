import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default class Repos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: [],
            repos2: [],
            selectedRepo: '',
            contributors_url: '',
        };
    }
    componentDidMount() {
        fetch('https://api.github.com/users/HackYourFutureBelgium/repos')
            .then(response => response.json())
            .then(res =>
                this.setState({
                    repos: res,
                }),
            );
    }

    handleChange = e => {
        this.setState({ selectedRepo: e.target.value });
        let contributors_url = this.state.repos
            .filter(repo => {
                return repo.id === Number(this.state.selectedRepo);
            })
            .map(repo => {
                return repo.contributors_url;
            });

        this.setState({
            contributors_url,
        });
        fetch(`${this.state.contributors_url}`)
            .then(res => res.json())
            .then(data => this.setState({ repos2: data }));
    };

    render() {
        return (
            <div style={{ marginTop: '50px', borderTop: '1px solid red', paddingTop: '10px' }}>
                <button className="btn-block btn-primary mb-3 font-weight-bold">
                    Repos <FontAwesomeIcon style={{ float: 'right' }} icon={faArrowDown} />
                </button>
                {this.state.repos.length > 0 ? (
                    <div>
                        <select onChange={e => this.handleChange(e)}>
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
                {this.state.repos2.length > 0 &&
                    this.state.repos2.map(repo => {
                        return (
                            <div key={repo.id}>
                                <img src={repo.avatar_url} alt="avatar" width="100px" />
                                <p>{repo.login}</p>
                                <p>{repo.contributions}</p>
                            </div>
                        );
                    })}
            </div>
        );
    }
}

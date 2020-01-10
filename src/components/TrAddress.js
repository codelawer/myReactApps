import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import sehir from '../main/resources/sehir.json';
import ilceler from '../main/resources/ilce.json';
import mahalleler from '../main/resources/mahalle.json';

export default class TrAddress extends Component {
    constructor(props) {
        super(props);

        this.state = {
            iller: [],
            ilceler: [],
            mahalleler: [],
            selectedIl: null,
            selectedIlce: null,
            selectedMahalle: null,
            fullAddress: '',
        };
    }

    componentDidMount() {
        this.setState({
            iller: sehir[2].data,
            ilceler: ilceler[2].data,
            mahalleler: mahalleler[2].data,
        });
    }

    render() {
        return (
            <div
                style={{ marginTop: '50px', borderTop: '1px solid red', paddingTop: '10px' }}
                className="form-row"
            >
                <button className="btn-block btn-primary mb-3 font-weight-bold">
                    TR Addresses <FontAwesomeIcon style={{ float: 'right' }} icon={faArrowDown} />
                </button>
                <div className="form-group col-md-4">
                    <select
                        className="form-control"
                        onChange={e => {
                            this.setState({ selectedIl: e.target.value });
                        }}
                    >
                        {this.state.iller.map(il => {
                            return (
                                <option
                                    key={il.sehir_id}
                                    value={il.sehir_key}
                                    defaultValue={undefined}
                                >
                                    {il.sehir_title}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="form-group col-md-4">
                    {this.state.selectedIl && (
                        <select
                            className="form-control"
                            onChange={e => {
                                this.setState({ selectedIlce: e.target.value });
                            }}
                        >
                            {this.state.ilceler
                                .filter(ilce => {
                                    return ilce.ilce_sehirkey === this.state.selectedIl;
                                })
                                .map(ilce => {
                                    return (
                                        <option key={ilce.ilce_id} value={ilce.ilce_key}>
                                            {ilce.ilce_title}
                                        </option>
                                    );
                                })}
                        </select>
                    )}
                </div>

                <div className="form-group col-md-4">
                    {this.state.selectedIlce && (
                        <select
                            className="form-control"
                            onChange={e => {
                                this.setState({ selectedMahalle: e.target.value });
                            }}
                        >
                            {this.state.mahalleler
                                .filter(mahalle => {
                                    return mahalle.mahalle_ilcekey === this.state.selectedIlce;
                                })
                                .map(mahalle => {
                                    return (
                                        <option
                                            key={mahalle.mahalle_id}
                                            value={mahalle.mahalle_key}
                                        >
                                            {mahalle.mahalle_title}
                                        </option>
                                    );
                                })}
                        </select>
                    )}
                </div>
                {/* result */}
                <div className="container">
                    {this.state.selectedMahalle && (
                        <button
                            onClick={() => console.log('clicked')}
                            className="btn btn-primary btn-lg btn-block"
                        >
                            {this.state.iller
                                .filter(il => {
                                    return il.sehir_key === this.state.selectedIl;
                                })
                                .map(il => {
                                    return il.sehir_title + ' ili ';
                                })
                                .toString()}
                            {this.state.ilceler
                                .filter(ilce => {
                                    return ilce.ilce_sehirkey === this.state.selectedIl;
                                })
                                .filter(ilce => {
                                    return ilce.ilce_key === this.state.selectedIlce;
                                })
                                .map(ilce => {
                                    return ilce.ilce_title + ' İlçesi ';
                                })
                                .toString()}
                            {this.state.mahalleler
                                .filter(mahalle => {
                                    return mahalle.mahalle_ilcekey === this.state.selectedIlce;
                                })
                                .filter(mahalle => {
                                    return mahalle.mahalle_key === this.state.selectedMahalle;
                                })
                                .map(mahalle => {
                                    return mahalle.mahalle_title + ' Mahallesi ';
                                })
                                .toString()}
                        </button>
                    )}
                </div>
            </div>
        );
    }
}

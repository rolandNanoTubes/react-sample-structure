import React, { Component } from 'react';
import Images from '../../Templates/Images';
import { Title, PageDefaultDescription as Description } from '../../Templates/Constants';

export default class Home extends Component {
    render() {
        return (
            <header className="App-header">
                <p> {Title.Home} </p>
                <img src={Images.logo} className="App-logo" alt="logo" />
                <p>{Description.default}</p>
                <a className="App-link" href="" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        );
    }
}

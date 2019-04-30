import React, { Component } from 'react';
import Images from '../../Templates/Images';
import { PageDefaultDescription as Description, Title } from '../../Templates/Constants';

export default class About extends Component {
    render() {
        return (
            <header className="App-header">
                <p> {Title.Home} </p>
                <img src={Images.aboutLogo} className="App-logo" alt="logo" />
                <p>{Description.default}</p>
                <a className="App-link" href="" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        );
    }
}

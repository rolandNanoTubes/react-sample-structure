import React, { Component } from 'react';
import Images from '../../Templates/Images';
import { PageDefaultDescription as Description, Title } from '../../Templates/Constants';

export default class About extends Component {
    render() {
        return (
            <section id="facebook">
                <header className="App-header">
                    <p> {Title.facebook} </p>
                    <img src={Images.aboutLogo} className="App-logo" alt="logo" />
                    <p>{Description.default}</p>
                    <a className="App-link" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                        Learn React
                    </a>
                </header>
            </section>
        );
    }
}

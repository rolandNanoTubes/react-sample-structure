import React, { Component } from 'react';
import Images from '../../Templates/Images';
import { PageDefaultDescription as Description, Title } from '../../Templates/Constants';

export default class Todo extends Component {
    render() {
        return (
            <section id="google">
                <header className="App-header">
                    <p> {Title.google} </p>
                    <img src={Images.todoLogo} className="App-logo" alt="logo" />
                    <p>{Description.default}</p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </section>
        );
    }
}

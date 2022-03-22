import React, { Component } from 'react';
import Images from '../../Utils/Images';
import { PageDefaultDescription as Description, Title } from '../../Utils/Constants';

export default class GoogleRender extends Component {
    render() {
        const { sectionId = ''} = this.props;
        return (
            <section id="google">
                <header className="App-header">
                    <p> {Title.google} </p>
                    <img src={Images[sectionId]} className="App-logo" alt="logo" />
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

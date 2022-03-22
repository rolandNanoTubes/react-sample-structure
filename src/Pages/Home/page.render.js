import React, { Component } from 'react';

import Images from '../../Utils/Images';
import { Title, PageDefaultDescription as Description } from '../../Utils/Constants';

import SampleMessage from './SubComponents/customMessage';

export default class Home extends Component {
    render() {
        const { sample, showSampleMessage, hideSampleMessage, sectionId } = this.props;
        return (
            <section id="home">
                <header className="App-header">
                    <p> {Title.home} </p>
                    <img src={Images[sectionId]} className="App-logo" alt="logo" />
                    <p>{Description.default}</p>
                    <a
                        className="App-link"
                        href="https://reactjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>

                    {sample.isShowSampleMessage ? (
                        <SampleMessage
                            message={sample.message}
                            fullName={sample.fullName}
                            hideSampleMessage={hideSampleMessage}
                        />
                    ) : (
                        <button type="button" className="sample-button" onClick={showSampleMessage}>
                            Show
                        </button>
                    )}
                </header>
            </section>
        );
    }
}

import React from 'react';
import PropTypes from 'prop-types';
import { PageDefaultDescription as Description } from '../../Utils/Constants';
import Images from '../../Utils/Images';

class NewsComponent extends React.Component {
    _renderHeader = () => {
        const { headerContent = 'Place Holder', sectionId } = this.props;

        return (
            <header className="App-header">
                <p> {headerContent} </p>
                <img src={Images[sectionId]} className="App-logo" alt="logo" />
                <p>{Description.default}</p>
                <a className="App-link" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        );
    }

    _renderContent = () => {
        const { dataDetails = [] } = this.state;

        const content = dataDetails.map((dataDetails = {}, index) => {
            const { content1, content2 } = dataDetails;
            return (
                <div className="data-container" key={`${content1}-${index}`}>
                    <div>
                        Description 1:{content1}
                    </div>
                    <div>
                        Description 1:{content2}
                    </div>
                </div>
            );
        });

        return (
            <div className="content-container">
                {content}
            </div>
        )
    }

    render() {
        const {sectionId} = this.props;
        return (
            <section id={sectionId}>
                {this._renderHeader()}
                {this._renderContent()}
            </section>
        );
    }
}

NewsComponent.propTypes = {
    dataDetails: PropTypes.array,
    headerContent: PropTypes.string,
};

export default NewsComponent;

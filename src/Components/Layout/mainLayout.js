import React from 'react';

export default class MainLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { children } = this.props;
        return (
            <section className="App" id="page-content">
                {children}
            </section>
        );
    }
}

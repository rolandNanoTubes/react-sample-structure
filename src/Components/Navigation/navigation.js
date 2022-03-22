import React, { Component }  from 'react';
import {Link} from "react-router-dom";

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <section id="navigation">
                <header>
                    <Link to="/">Home</Link>
                    <Link to="/page1">page1</Link>
                    <Link to="/page2">page2</Link>
                </header>
            </section>
        )
    }
}

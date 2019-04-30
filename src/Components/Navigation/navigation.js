import React, { Component }  from 'react';
import {Link} from "react-router-dom";

export default class Navigation extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section id="navigation">
                <header>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/todo">Todo</Link>
                </header>
            </section>
        )
    }
}
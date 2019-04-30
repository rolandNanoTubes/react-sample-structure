import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/store';
import App from './Router/appRoute';

import './Styles/main.scss';

const target = document.querySelector('#root');

render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <App />
            </div>
        </BrowserRouter>
    </Provider>,
    target,
);

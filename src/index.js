import React from "react";
import ReactDOM from "react-dom";

import logger from "redux-logger";
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import reducer from './reducers/index';

import "./index.css";
import App from "./App";
import { applyMiddleware, createStore } from "redux";

const { worker } = require('./mocks/browser');
worker.start();

const store = createStore(reducer, applyMiddleware(logger, thunk));

const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);


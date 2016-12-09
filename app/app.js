import React, {Component,PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Provider} from 'react-redux';
// route configure
import RouteConfig from './Router/Router.js';
import store from './Store/Store.js';
import {createStore, applyMiddleware } from 'redux';
//default cinfigure
import './Config/Config.js'

// let store = createStore(
// 	reduces,
// 	applyMiddleware(thunl)
// );

render(
	<Provider store={store}>
		<RouteConfig />
	</Provider>,
	document.body
);
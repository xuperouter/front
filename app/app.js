import React, {Component,PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Provider} from 'redux';
// route configure
import router from './Router/Router.js';
// import store from './Redux/Store/Store.js';
import {createStore} from 'redux';
//default cinfigure
import './Config/Config.js'

var store = createStore();

store.subscribe(()=>{
	console.log(store.getState());
});

render(
	<Provider store={store}>
		{router}
	</Provider>,
	document.body
);
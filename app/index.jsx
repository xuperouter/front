var ReactDOM = require('react-dom');
var React = require('react');
var App = require('./components/app');
var RegisterForm = require('./components/RegistrationForm.jsx');
var Register = require('./components/pages/Register.jsx');
var Welcome = require('./components/pages/welcome.jsx');

import {Router, Route, Link, hashHistory} from 'react-router';

var NotFound = React.createClass({
  render:function(){
    return(
      <h1>Page Not Found</h1>
      )
  }
});

ReactDOM.render(
  <Router history={hashHistory}>  
    <Route title='Easy Design' component={App}>
      <Route path='/' component={Welcome} />
      <Route path="/register" component={Register} />
      <NotFound title='Page Not Found' component={NotFound} />
    </Route>
  </Router>,document.body)
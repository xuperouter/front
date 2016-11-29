var ReactDOM = require('react-dom');
var React = require('react');
var Footer = require('./components/footer.js');
var RegisterForm = require('./components/RegistrationForm.jsx');
var Register = require('./components/pages/Register.jsx');
var Welcome = require('./components/pages/welcome.jsx');

import {Router, Route, Link, hashHistory} from 'react-router';

var App = React.createClass({
  render:function(){
    return (
      <div id="main-container" className="container">
        {this.props.children}
      </div> 
    )
  }
})
ReactDOM.render(
  <Router history={hashHistory}>  
    <Route path='/' component={Welcome} />
    <Route path="/register" component={Register} />
  </Router>,document.body)
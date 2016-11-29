var ReactDOM = require('react-dom');
var React = require('react');
var Footer = require('./components/footer.js');
var WelcomeSection = require('./components/welcome_section.js');
var RegisterForm = require('./components/RegistrationForm.jsx');
var Register = require('./components/pages/Register.jsx');

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
    <Route path='/' component={App}>
      <Route path="/register" component={Register} />
    </Route>
  </Router>,document.body)
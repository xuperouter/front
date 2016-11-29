/**
 * Created by Sheldon on 2016/11/27.
 */
var ReactDOM = require('react-dom');
var React = require('react');
var Footer = require('./components/footer.js');
var WelcomeSection = require('./components/welcome_section.js');
var RegisterForm = require('./components/RegistrationForm.jsx');

ReactDOM.render(
    <div id="main-container" className="container">
    <WelcomeSection/>
    <Footer />
    <RegisterForm />
    </div>
    , document.body);


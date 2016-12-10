var React = require('react');
var LoginComponent = require('../login_component.jsx');

var Welcome = React.createClass({
	render:function(){
		return(
			<div id="login_container">
				<LoginComponent />
			</div>
		)
	}
})

module.exports = Welcome;
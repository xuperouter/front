var React = require('react');

var Header = React.createClass({
	render:function(){
		return(
			<header></header>
		)
	}
});
var Footer = React.createClass({
	render:function(){
		return(
			<footer></footer>
		)
	}
});
var App = React.createClass({
	render:function(){
		return(
			<div className='main-content container'>
				<Header />
				{this.props.children}
				<Footer />
			</div>
		)
	}
})

module.exports = App;
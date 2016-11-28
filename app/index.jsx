import React from 'react'
import ReactDOM from 'react-dom'

import {Router, Route, Link, IndexRouter} from 'react-router'

const App = React.createClass({
  render(){
    return(
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
})

const About = React.createClass({
  render(){
    return <h3>About</h3>
  }
})

const Inbox = React.createClass({
  render(){
    return(
      <div>
      <h2>Inbox</h2>
      {this.props.children || "welcome to your Inbox"}
      </div>
      )
  }
})

const Message = React.createClass({
  render(){
    return <h3>Message {this.props.params.id}</h3>
  }
})

const DashBoard = React.createClass({
  render(){
    return <div>Welcome to the app!</div>
  }
})

ReactDOM.render(
  <Router>  
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox} />
    </Route>
  </Router>,document.body)
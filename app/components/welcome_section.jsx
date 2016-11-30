/**
 * Created by Sheldon on 2016/11/28.
 */
var React = require('react');
import {Router, Route, Link, hashHistory} from 'react-router';

var WelcomeSection = React.createClass({
    render:function(){
        return(
            <div id="welcome_section">
                <div id="logo">
                    <span className="title">Easy Design</span>
                </div>
                <div id="sign">
                    <span className='button'><Link to='/register'>注册</Link></span>
                    <span className='button'><Link to='/signin'>登录</Link></span>
                </div>
            </div>
        )
    }
});
module.exports = WelcomeSection;
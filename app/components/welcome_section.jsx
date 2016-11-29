/**
 * Created by Sheldon on 2016/11/28.
 */
var React = require('react');

var WelcomeSection = React.createClass({
    render:function(){
        return(
            <div id="welcome_section">
                <div id="logo">
                    <span className="title">简化设计</span>
                    <span className="url">webgua.github.io</span>
                    <span className="subtitle">简单设计，高效工作</span>
                </div>
                <div id="sign">
                    <a href="/signup" className="button">注册</a>
                    <a href="/signin" className="button">登录</a>
                    <a href="/home" className="button">随便看看</a>
                </div>
            </div>
        )
    }
});
module.exports = WelcomeSection;
/**
 * Created by Sheldon on 2016/11/28.
 */
var React = require('react');

var footer = React.createClass({
    render:function(){
        return(
            <footer className="page_footer">
                <div id="page_footer_inner">
                    <span>
                        <em>community:</em>
                        <a target="_blank" href="#">同济门道</a>
                    </span>
                </div>
            </footer>
        )
    }
});
module.exports = footer;
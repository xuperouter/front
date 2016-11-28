var React = require('react');

var MessageForm = React.createClass({
    onSubmit:function (e) {
        e.preventDefault();
        var name = this.refs.name.getDOMNode().value.trim();
        var comment = this.refs.comment.getDOMNode().value.trim();
        this.props.submit(name,comment);
        this.refs.name.getDOMNode().value = "";
        this.refs.comment.getDOMNode().value = "";
    },
    render:function () {
        return(
            <div className="well">
                <h4> Leave a Message</h4>
                <div className="form-group">
                    <label htmlFor="inputmail">your name</label>
                    <input ref="name" className="form-control" placeholder="your name"/>
                </div>
                <div className="form-group">
                    <label for="">your comment</label>
                    <textarea ref="comment" className="form-control" placeholder="enter message"></textarea>
                </div>
                <a onClick={this.onSubmit} className="btn btn-primary">submit</a>
            </div>
        )
    }
});

var Container = React.createClass({
    submit: function(name , comment){
        $.ajax({
            type:'post',
            url:'/post',
            data:{name:name, comment:comment}
        }).done(function (data) {
            this.listComment();
        }).bind(this);
    },
    getInitialState: function () {
        return {
            data:[]
        }
    },
    listComment:function () {
        $.ajax({
            type:'get',
            url:'/get',
        }).done(function (resp) {
            if(resp.status == 'success'){
                this.setData({
                    data:resp.data
                })
            }
        }).bind(this);
    },
    componentDidMount:function () {
        this.listComment();
    }
});

var MessageList = React.createClass({
   render:function () {
       var message = this.props.data.map(function (item) {
           return (
               <li className="list-group-item">
               {item.name} 留言于 ({item.create_at})
               <p> {item.comment} </p>
               </li>
           )
       });
       return (
           <ul className="list-group" id="message-container">
               <li className="list-group-item">Placeholder message</li>
               {message}
           </ul>
       )
   }
});
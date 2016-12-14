/**
 * Created by Sheldon on 2016/11/28.
 */
var React = require('react');
var Config = require('../Config/Config.js');


import {Form , Icon , Input, Button , Checkbox } from 'antd';

const FormItem = Form.Item;


const LoginComponent = Form.create()(React.createClass({

    getDefaultProps: function(){
        return{
            login:(username,password)=>{
                var data = {
                    username:username,
                    password:password
                };

                var url = "http://"+Config.Server_IP+":"+Config.Server_Port+"/easydesign/login";
                console.log("the url is "+url);
                console.log(JSON.stringify(data));
                fetch(url,{
                    method:'POST',
                    body:JSON.stringify(data)
                })
                .then(function(data){
                    console.log('request succeed with JSON response',data);
                })
                .catch(function(error){
                    console.log('request failed',error);
                })
            }
        }
    },
    getInitialState: function(){
        return{
            username: '',
            password: '',
            isRemember:false
        };
    },
    //监听Input中的数据，保存到state中
    changeUserName:function(e){
        let uname = e.target.value;
        this.setState({
            username:uname
        });
        console.log("the user name state change to "+this.state.userName);
    },
    changePassWord:function(e){
        let upwd = e.target.value;
        this.setState({
            password:upwd
        });
    },
    //if remember password
    handleCheckbox:function(e){
        let ischecked = e.target.checked;
        if(ischecked){
            this.setState({
                isRemember:true
            })
        }else{
            this.setState({
                isRemember:false
            })
        }
    },

    handleClick(){
        if(this.state.isRemember === true){
            let loginData={};
            loginData.username = this.state.username;
            loginData.password = this.state.password;
            // Data.localSetItem("mm_loginStatus",loginData);
        }else{
            // Data.localRemoveItem("jiaj-loginStatus");
        }

        this.props.login(this.state.username,this.state.password);
    },


    render(){
        const {getFieldDecorator} = this.props.form;
        return(
            <Form className='login-form'>
                <FormItem>
                    {getFieldDecorator('usename',{
                        rules:[{required:true,message:'Please Input your username!'}],
                    })(
                        <Input addonBefore={<Icon type='user' />} placeholder="UserName" onChange={this.changeUserName}/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password',{
                        rules:[{required:true,message:"Please input your Password!"}],
                    })(
                        <Input addonBefore={<Icon type='lock' />} type='password' placeholder='Password' onChange={this.changePassWord}/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember',{
                        valueProName:'checked',
                        initialValue:true,
                    })(
                    <Checkbox  checked={this.state.isRemember} onClick={this.handleCheckbox}>Remember me</Checkbox>
                    )}
                    <a className='login-form-forgot'>Forgot password</a>
                    <Button type='primary' htmlType='submit' className='login-form-button' onClick={this.handleClick}>
                        Log in
                    </Button>
                    Or <a>register now!</a>
                </FormItem>
            </Form>
        )
    }
}));


module.exports = LoginComponent;
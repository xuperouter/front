/**
 * Created by Sheldon on 2016/11/28.
 */
var React = require('react');
var Config = require('../Config/Config.js');


import {Form , Icon , Input, Button , Checkbox } from 'antd';
import {Link} from 'react-router';

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
                    header:{
                        "alg":"HS256",
                        "typ":"JWT",
                        "Content_Type":"application/json"
                    },
                    body:JSON.stringify(data)
                })
                .then(function(data){
                    //todo 将token数据存储下来
                    console.log('request succeed with JSON response',data);
                })
                .catch(function(error){
                    console.log('request failed',error);
                })
            }
        }
    },
    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFields((err,values)=>{
            if(!err){
                console.log("Received values of form: ",values);
                this.props.login(values.username,values.password);
            }
        });
    },

    render(){
        const {getFieldDecorator} = this.props.form;
        return(
            <Form className='login-form' onSubmit={this.handleSubmit}>
                <FormItem>
                    {getFieldDecorator('username',{
                        rules:[{required:true,message:'Please Input your username!'}],
                    })(
                        <Input addonBefore={<Icon type='user' />} placeholder="UserName"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password',{
                        rules:[{required:true,message:"Please input your Password!"}],
                    })(
                        <Input addonBefore={<Icon type='lock' />} type='password' placeholder='Password'/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember',{
                        valueProName:'checked',
                        initialValue:true,
                    })(
                    <Checkbox>Remember me</Checkbox>
                    )}
                    <a className='login-form-forgot'>Forgot password</a>
                    <Button type='primary' htmlType='submit' className='login-form-button'>
                        Log in
                    </Button>
                    Or <Link to="/register">register now!</Link>
                </FormItem>
            </Form>
        )
    }
}));


module.exports = LoginComponent;
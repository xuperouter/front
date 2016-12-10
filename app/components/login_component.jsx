/**
 * Created by Sheldon on 2016/11/28.
 */
var React = require('react');
import {Form , Icon , Input, Button , Checkbox } from 'antd';
const FormItem = Form.Item;

const LoginComponent = Form.create()(React.createClass({
    render(){
        const {getFieldDecorator} = this.props.form;
        return(
            <Form className='login-form'>
                <FormItem>
                    {getFieldDecorator('userName',{
                        rules:[{required:true,message:'Please Input your username!'}],
                    })(
                        <Input addonBefore={<Icon type='user' />} placeholder="UserName" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password',{
                        rules:[{required:true,message:"Please input your Password!"}],
                    })(
                        <Input addonBefore={<Icon type='lock' />} type='password' placeholder='Password' />
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
                    Or <a>register now!</a>
                </FormItem>
            </Form>
        )
    }
}));


module.exports = LoginComponent;
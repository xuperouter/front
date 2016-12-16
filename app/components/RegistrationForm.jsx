import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button } from 'antd';
import 'antd/dist/antd.css';
import {Link} from 'react-router';

const FormItem = Form.Item;
const Option = Select.Option;
var React = require('react');

 const RegistrationForm = Form.create()(
 	React.createClass({
 		getInitialState(){
 			return {
 				passwordDirty:false,
 			};
 		},
 		handleSubmit(e){
 			e.preventDefault();
 			this.props.form.validateFieldsAndScroll((err,values) => {
 				if(!err){
 					console.log('Received values of form: ',values);
 				}
 			});
 		},
 		handlePasswordBlur(e){
 			const value = e.target.value;
 			this.setState({passwordDirty:this.state.passwordDirty || !!value});
 		},
 		checkPassword(rule,value,callback){
 			const form = this.props.form;
   			if (value && value !== form.getFieldValue('password')) {
      			callback('Two passwords that you enter is inconsistent!');
    		} else {
      			callback();
    		}
 		},
 		checkConfirm(rule, value, callback) {
    		const form = this.props.form;
    		if (value && this.state.passwordDirty) {
      			form.validateFields(['confirm'], { force: true });
    		}
    		callback();
  		},
  		render(){
  			const {getFieldDecorator} = this.props.form;
  			const formItemLayout = {
  				labelCol: {span : 6},
  				wrapperCol:{span:14},
  			};
  			const tailFormItemLayout = {
  				wrapperCol:{
  					span:14,
  					offset:6,
  				},
  			};
  			return (
  				<Form horizontal onSubmit={this.handleSubmit}>
  					<FormItem
          				{...formItemLayout}
          				label="E-mail"
          				hasFeedback
        			>
          				{getFieldDecorator('email', {
            			rules: [{
              				type: 'email', message: 'The input is not valid E-mail!',
            			}, {
              			required: true, message: 'Please input your E-mail!',
            			}],
          				})(
           					<Input />
          				)}
        			</FormItem>
        			<FormItem
        			{...formItemLayout}
        			label="Password"
        			hasFeedback
        			>
        			{getFieldDecorator('password', {
        				rules: [{
        					required: true, message: 'Please input your password!',
        				}, {
        					validator: this.checkConfirm,
        				}],
        			})(
        			<Input type="password" onBlur={this.handlePasswordBlur} />
        			)}
        			</FormItem>
        			<FormItem
        			{...formItemLayout}
        			label="Confirm Password"
        			hasFeedback
        			>
        			{getFieldDecorator('confirm', {
        				rules: [{
        					required: true, message: 'Please confirm your password!',
        				}, {
        					validator: this.checkPassowrd,
        				}],
        			})(
        			<Input type="password" />
        			)}
        			</FormItem>
        			<FormItem
        			{...formItemLayout}
        			label={(
        				<span>
        				Username&nbsp;
        				<Tooltip title="What do you want other to call you?">
        				<Icon type="question-circle-o" />
        				</Tooltip>
        				</span>
        				)}
        			hasFeedback
        			>
        			{getFieldDecorator('username', {
        				rules: [{ required: true, message: 'Please input your nickname!' }],
        			})(
        			<Input />
        			)}
        			</FormItem>
        			
              <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
        			{getFieldDecorator('agreement', {
        				valuePropName: 'checked',
        			})(
        			<Checkbox>I had read the <a>agreement</a></Checkbox>
        			)}
        			</FormItem>
        			<FormItem {...tailFormItemLayout}>
        			<Button type="primary" htmlType="submit" size="large">Register</Button>
        			</FormItem>
  				</Form>
  			);
  		},
 	})
 	);

module.exports = RegistrationForm;
import React, { Component } from 'react';
import {
  Form,
  Input,
  Icon,
  Button,
  Checkbox,
  Tooltip,
  Alert,
  Spin,
} from 'antd';
const FormItem = Form.Item;

class Signup extends Component {
  constructor(props) {
    super(props);
  }

  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('Password')) {
      callback('The two passwords must match!');
    } else {
      callback();
    }
  };

  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value) {
      form.validateFields(['confirm'], { force: true });
    }

    callback();
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const errors = this.props.errors;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };

    if (this.props.status === 'SUCCESS') {
      setTimeout(() => {
        this.props.onRedirect();
        this.props.onHideSignupModal();
      }, 4000);
      setTimeout(() => {
        this.props.onClearStatusErrorsMessage();
        this.props.form.resetFields();
      }, 4500);
    }

    return <Form className="signup-form">
      {this.props.message ?
          <FormItem>
            <Alert message={this.props.message} type="error" showIcon/>
          </FormItem>
          :
          null
      }
      {this.props.status === 'SUCCESS' ?
          <FormItem style={{ cursor: 'pointer' }}>
            <Alert message="You have successfully registered!"
                   description="You will now be authenticated automatically."
                   type="success"
                   showIcon/>
          </FormItem>
          :
          null
      }
      {errors.username ?
          <FormItem>
            <Alert message={errors.username} type="error"/>
          </FormItem>
          :
          null
      }
      <Spin tip="Logging you in..."
            size="large"
            spinning={this.props.status === 'SUCCESS'}>
        <FormItem key="0"
                  {...formItemLayout}
                  label={(
                      <span>Username&nbsp;
                        <Tooltip title="Your display name when commenting.">
                        <Icon type="question-circle-o"/>
                      </Tooltip>
                    </span>)}
                  hasFeedback
        >
          {getFieldDecorator('Username', {
            rules: [
              { required: true, message: 'Please input your username!', },
              { min: 4, max: 16, },
              { setFieldsValue: this.props.username, },
            ],
          })(
              <Input prefix={<Icon type="user" style={{ fontSize: 13 }}/>}
                     onChange={this.props.onUsernameChange}/>,
          )}
        </FormItem>
        {errors.email ?
            <FormItem>
              <Alert message={errors.email} type="error"/>
            </FormItem>
            :
            null
        }
        <FormItem key="1"
                  label="E-mail"
                  {...formItemLayout}
                  hasFeedback>
          {getFieldDecorator('E-mail', {
            rules: [
              { type: 'email', },
              { required: true, },
              { setFieldsValue: this.props.email, },
            ],
          })(
              <Input prefix={<Icon type="mail" style={{ fontSize: 13 }}/>}
                     onChange={this.props.onEmailChange}/>,
          )}
        </FormItem>
        {errors.password ?
            <FormItem>
              <Alert message={errors.password} type="error"/>
            </FormItem>
            :
            null
        }
        <FormItem key="2"
                  {...formItemLayout}
                  label="Password"
                  hasFeedback
        >
          {getFieldDecorator('Password', {
            rules: [
              { required: true, message: 'Please input your password!', },
              { validator: this.checkConfirm, },
              { min: 8, max: 64 },
              { setFieldsValue: this.props.password },
            ],
          })(
              <Input prefix={<Icon type="lock" style={{ fontSize: 13 }}/>}
                     onChange={this.props.onPasswordChange}
                     type="password"/>,
          )}
        </FormItem>
        <FormItem key="3"
                  {...formItemLayout}
                  label="Confirm Password"
                  hasFeedback
        >
          {getFieldDecorator('confirm', {
            rules: [
              { required: true, message: 'Please confirm your password!', },
              { validator: this.checkPassword, },
              { setFieldsValue: this.props.confirmPassword },
            ],
          })(
              <Input prefix={<Icon type="lock" style={{ fontSize: 13 }}/>}
                     onChange={this.props.onConfirmPasswordChange}
                     type="password"/>,
          )}
        </FormItem>
        <FormItem key="4"
                  {...tailFormItemLayout}
                  style={{ marginBottom: 8 }}>
          {getFieldDecorator('Agreement', {
            valuePropName: 'checked',
          })(
              <Checkbox onClick={this.props.onAgreeTermsOfService}>
                I have read the <a href="">terms of
                service</a>
              </Checkbox>,
          )}
        </FormItem>
        <FormItem key="5"
                  {...tailFormItemLayout}>
          <Button type="primary"
                  htmlType="submit"
                  disabled={!this.props.checked}
                  loading={this.props.status === 'ATTEMPTING'}
                  onClick={this.props.onSignup}>
            {this.props.status === 'ATTEMPTING' ?
                <span>Finishing sign up and logging in...</span>
                :
                <span>Register</span>
            }
          </Button>
        </FormItem>
      </Spin>
    </Form>;
  }
}

export default Form.create()(Signup);

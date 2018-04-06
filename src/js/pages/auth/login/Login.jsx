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

class Login extends Component {
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
      this.props.onHideLoginModal();
      this.props.onRedirect();
      setTimeout(() => {
        this.props.onClearStatusErrorsMessage();
      }, 1500);
    }

    return <Form className="login-form">
      {this.props.message ?
          <FormItem>
            <Alert message={this.props.message} type="error" showIcon/>
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
      {errors.email ?
          <FormItem>
            <Alert message={errors.email} type="error"/>
          </FormItem>
          :
          null
      }
      <Spin tip="Logging you in..."
            size="large"
            spinning={this.props.status === 'ATTEMPTING'}>
        <FormItem key="0"
                  label={(
                      <span>Username/E-mail &nbsp;
                        <Tooltip
                            title="You can log in with either your username or E-mail address">
                                <Icon type="question-circle-o"/>
                            </Tooltip>
                          </span>)}
                  {...formItemLayout}
                  hasFeedback>
          {getFieldDecorator('Username/E-mail', {
            rules: [
              {
                required: true,
                message: 'Please input your username or E-mail!',
              },
              { min: 3, max: 254, },
              { setFieldsValue: this.props.usernameOrEmail, },
            ],
          })(
              <Input prefix={<Icon type="user" style={{ fontSize: 13 }}/>}
                     onChange={this.props.onUsernameOrEmailChange}/>,
          )}
        </FormItem>
        {errors.password ?
            <FormItem>
              <Alert message={errors.password} type="error"/>
            </FormItem>
            :
            null
        }
        <FormItem key="1"
                  label='Password'
                  {...formItemLayout}
                  hasFeedback>
          {getFieldDecorator('Password', {
            rules: [
              { required: true, message: 'Please input your password!', },
              { min: 8, max: 64 },
              { setFieldsValue: this.props.password },
            ],
          })(
              <Input prefix={<Icon type="lock" style={{ fontSize: 13 }}/>}
                     onChange={this.props.onPasswordChange}
                     type="password"/>,
          )}
        </FormItem>
        <FormItem key="2"
                  {...tailFormItemLayout}>
          <div className="login-form-remember-forgot">
            <Checkbox onChange={this.props.onRememberMeChangeHandler}>
              Remember me
            </Checkbox>
            <a className="login-form-forgot"
               onClick={() => {
                 this.props.onHideLoginModal();
               }}>
              Forgot password
            </a>
          </div>
          <Button type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  loading={this.props.status === 'ATTEMPTING'}
                  onClick={() => {
                    this.props.onLogin();
                  }
                  }>
            {this.props.status === 'ATTEMPTING' ?
                <span>Logging in...</span>
                :
                <span>Log in</span>
            }
          </Button>
          <span>Or <a onClick={() => {
            this.props.onHideLoginModal();
            this.props.onShowSignupModal();
          }
          }>register now!</a></span>
        </FormItem>
      </Spin>
    </Form>;
  }
}

export default Form.create()(Login);

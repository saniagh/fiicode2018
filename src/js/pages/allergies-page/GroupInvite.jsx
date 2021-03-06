import React, { Component } from 'react';
import { Form, Input, Card, Button } from 'antd';
const FormItem = Form.Item;

class GroupInvite extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mainClassName: 'main-container hidden',
      disabledField: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        mainClassName: 'main-container',
      });
    }, 100);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.email) {
      this.setState({
        disabledField: true,
      });
    }
  }

  render() {

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

    const mediaQuery = window.matchMedia('(max-width: 1100px)');

    const { getFieldDecorator } = this.props.form;

    return (
        <div className={this.state.mainClassName}>
          <Form className="group-invite-form">
            <Card noHovering={true}
                  bordered={false}
                  bodyStyle={{
                    padding: mediaQuery.matches ?
                        '20px 0 0 0' :
                        '75px 32px 150px 32px',
                  }}>
              <h1 className="page-header">
                Group Invitation
              </h1>
              <Card noHovering={true}
                    style={{
                      width: mediaQuery.matches ?
                          '90vw'
                          :
                          900,
                      margin: '24px auto 0 auto',
                    }}
                    bodyStyle={{
                      padding: mediaQuery.matches ? 10 : '20px 0 0 0',
                    }}>
                <FormItem key="0"
                          label="E-mail Adress"
                          {...formItemLayout}
                          required={true}>
                  <Input htmlType="email"
                         disabled={this.state.disabledField}
                         value={this.props.emailAddress}
                         onChange={this.props.onEmailAddressChange}/>
                </FormItem>
                <FormItem key="1"
                          label="Full name"
                          {...formItemLayout}>
                  <Input value={this.props.fullName}
                         onChange={this.props.onFullNameChange}/>
                </FormItem>
                <FormItem key="2"
                          {...formItemLayout}
                          style={{
                            margin: '0 auto',
                            maxWidth: 250,
                            padding: '0 0 10px 0',
                          }}>
                  <Button onClick={this.props.onEnterGroup}
                          loading={this.props.enteringGroup}>
                    Enter Group
                  </Button>
                </FormItem>
              </Card>
            </Card>
          </Form>
        </div>
    );
  }
}

export default Form.create()(GroupInvite);

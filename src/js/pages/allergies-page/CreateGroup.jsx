import React, { Component } from 'react';
import {
  Card,
  Switch,
  Button,
  Form,
  Input,
  DatePicker,
  Collapse,
  Icon,
  Tooltip,
} from 'antd';
const FormItem = Form.Item;
const Panel = Collapse.Panel;

import moment from 'moment';

class CreateGroup extends Component {

  constructor(props) {
    super(props);

    this.state = {
      mainClassName: 'main-container hidden',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        mainClassName: 'main-container',
      });
    }, 100);
  }

  disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < moment().startOf('day');
  };

  render() {
    const { getFieldDecorator } = this.props.form;
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

    return (
        <div className={this.state.mainClassName}>
          <Form className="group-form">
            <Card noHovering={true}
                  bordered={false}
                  bodyStyle={{
                    padding: mediaQuery.matches ?
                        '20px 0 0 0' :
                        '24px 32px 0 32px',
                  }}>
              <h1 className="page-header">
                Create Group
              </h1>
              <Card noHovering={true}
                    style={{
                      width: mediaQuery.matches ?
                          '90vw'
                          :
                          900,
                      margin: '0 auto',
                    }}
                    bodyStyle={{
                      padding: mediaQuery.matches ? 10 : '20px 0 0 0',
                    }}>
                <FormItem key="0"
                          label="Group Name"
                          {...formItemLayout}
                          hasFeedback>
                  {getFieldDecorator('Group Name', {
                    rules: [
                      { required: true },
                      { setFieldsValue: this.props.groupName },
                    ],
                  })(
                      <Input onChange={this.props.onGroupNameChange}/>,
                  )}
                </FormItem>
                <FormItem key="1"
                          label="Group Motto (Optional)"
                          {...formItemLayout}>
                  <Input value={this.props.groupMotto}
                         onChange={this.props.onGroupMottoChange}/>
                </FormItem>
                <FormItem key="2"
                          label={<span>
                          Group Message (Optional)&nbsp;
                            <Tooltip
                                title="A short description of what this group is for: e.g. Egg allergy">
                            <Icon type="question-circle-o"/>
                          </Tooltip>
                          </span>}
                          {...formItemLayout}>
                  <Input value={this.props.groupMessage}
                         onChange={this.props.onGroupMessageChange}/>
                </FormItem>
              </Card>
            </Card>
            <Card noHovering={true}
                  bordered={false}
                  bodyStyle={{
                    padding: mediaQuery.matches ?
                        '20px 0 0 0' :
                        '24px 32px 0 32px',
                  }}>
              <Card noHovering={true}
                    style={{
                      width: mediaQuery.matches ?
                          '90vw'
                          :
                          900,
                      margin: '0 auto',
                    }}
                    bodyStyle={{
                      padding: mediaQuery.matches ? 10 : '20px 0 0 0',
                    }}>
                <FormItem key="3"
                          label="E-mail Adress"
                          {...formItemLayout}
                          required={true}>
                  <Input value={this.props.ownerEmailAddress}
                         onChange={this.props.onOwnerEmailAddressChange}/>
                </FormItem>
                <FormItem key="4"
                          label="Full Name (Optional)"
                          {...formItemLayout}>
                  <Input value={this.props.ownerFullName}
                         onChange={this.props.onOwnerFullNameChange}/>
                </FormItem>
              </Card>
            </Card>
            <Card noHovering={true}
                  bordered={false}
                  bodyStyle={{
                    padding: mediaQuery.matches ?
                        '20px 0 0 0' :
                        '24px 32px 0 32px',
                  }}>
              <Card noHovering={true}
                    style={{
                      width: mediaQuery.matches ?
                          '90vw'
                          :
                          900,
                      margin: '0 auto',
                    }}
                    bodyStyle={{
                      padding: mediaQuery.matches ? '10px 0 0 0' : 20,
                    }}>
              <span style={{
                width: '100%',
                margin: '0 auto',
                padding: 10,
                fontWeight: 500,
                fontSize: 14,
              }}>Allergies Opted For:</span>
                {this.props.allergiesOptedFor.map((allergy, index) => {
                  return <FormItem key={index + 5}>
                  <span style={{ marginTop: 10 }}>
                    <Card noHovering={true}
                          bordered={mediaQuery.matches ? false : true}
                          style={{
                            width: mediaQuery.matches ?
                                '80vw'
                                :
                                600,
                            margin: '0 auto',
                          }}
                          bodyStyle={{
                            padding: mediaQuery.matches ?
                                0 :
                                '10px 10px 10px 10px',
                          }}>
                      {allergy.isGeneralAllergy ?
                          <Collapse>
                            <Panel header={allergy.type}>
                              <p>
                                Type: {allergy.type}
                              </p>
                            </Panel>
                          </Collapse>
                          :
                          <Collapse>
                            <Panel header={allergy.species + ' (' +
                            allergy.accession +
                            ')'}>
                              <p>
                                Species: {allergy.species}
                              </p>
                              <p>
                                Common: {allergy.common}
                              </p>
                              <p>
                                IUISAllergen: {allergy.iuisAllergen}
                              </p>
                              <p>
                                Type: {allergy.type}
                              </p>
                              <p>
                                Group: {allergy.group}
                              </p>
                              <p>
                                Length: {allergy.length}
                              </p>
                              <p>
                                Accession:{' '}
                                <a href={`https://www.ncbi.nlm.nih.gov/protein/${allergy.accession}`}>
                                  {allergy.accession}
                                </a>
                              </p>
                              <p>
                                GI#@ : {allergy.gi}
                              </p>
                              <p>
                                First Version: {allergy.firstVersion}
                              </p>
                            </Panel>
                          </Collapse>
                      }
                      <div style={{ marginTop: 10 }}>
                        <DatePicker
                            showTime
                            format="HH:mm:ss YYYY-MM-DD "
                            placeholder="Select Alert Time"
                            disabledDate={this.disabledDate}
                            onOk={this.props.onSelectAlertTime}
                            onChange={() => this.props.onChoosingDateIndexChange(
                                index)}
                        />
                      </div>
                    </Card>
                  </span>
                  </FormItem>;
                })}
              </Card>
            </Card>
            <Card noHovering={true}
                  bordered={false}
                  bodyStyle={{
                    padding: mediaQuery.matches ?
                        '20px 0 0 0' :
                        '24px 32px 0 32px',
                  }}>
              <Card noHovering={true}
                    style={{
                      width: mediaQuery.matches ?
                          '90vw'
                          :
                          900,
                      margin: '0 auto',
                    }}
                    bodyStyle={{
                      padding: 0,
                    }}>
                <FormItem>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: 10,
                    width: mediaQuery.matches ? 'auto' : 600,
                    margin: mediaQuery.matches ? 0 : '0 auto',
                  }}>
                  <span style={{
                    fontWeight: 500,
                    fontSize: 14,
                    width: '70%',
                  }}>Create share link:</span>
                    <span style={{
                      width: '30%',
                      display: 'flex',
                      justifyContent: 'center',
                    }}>
                    <Switch checked={this.props.shareLinkExists}
                            onChange={this.props.onShareLinkExistsChange}/>
                  </span>
                  </div>
                  {this.props.shareLinkExists ?
                      <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        padding: 10,
                        width: mediaQuery.matches ? 'auto' : 600,
                        margin: mediaQuery.matches ? 0 : '0 auto',
                      }}>
                      <span style={{
                        fontWeight: 500,
                        fontSize: 14,
                        width: '70%',
                      }}>
                        Should link expire (24 hours):
                      </span>
                        <span style={{
                          width: '30%',
                          display: 'flex',
                          justifyContent: 'center',
                        }}>
                        <Switch checked={this.props.shareLinkExpires}
                                onChange={this.props.onShareLinkExpiresChange}/>
                      </span>
                      </div>
                      :
                      null
                  }
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: 10,
                    width: mediaQuery.matches ? 'auto' : 600,
                    margin: mediaQuery.matches ? 0 : '0 auto',
                  }}>
                  <span style={{
                    fontWeight: 500,
                    fontSize: 14,
                    width: '70%',
                  }}>Enable Group Chat:</span>
                    <span style={{
                      width: '30%',
                      display: 'flex',
                      justifyContent: 'center',
                    }}>
                    <Switch checked={this.props.allowGroupChat}
                            onChange={this.props.onAllowGroupChatChange}/>
                  </span>
                  </div>
                </FormItem>
              </Card>
            </Card>
            <Card noHovering={true}
                  bordered={false}
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    width: mediaQuery.matches ?
                        '90vw'
                        :
                        900,
                    margin: '0 auto',
                  }}
                  bodyStyle={{
                    padding: 20,
                  }}>
              <Button type="primary"
                      size="large"
                      disabled={this.props.savedGroup}
                      loading={this.props.savingGroup}
                      onClick={this.props.onSaveGroup}>
                {this.props.savingGroup ?
                    <span>Saving...</span>
                    :
                    <span>Save and Create Group</span>
                }
              </Button>
            </Card>
          </Form>
        </div>
    );
  }
}

// verify recaptcha and save result in redux state

export default Form.create()(CreateGroup);

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import 'antd-mobile/dist/antd-mobile.css';
import { Drawer, NavBar } from 'antd-mobile';
import { Modal, Layout, Menu, Icon } from 'antd';
const { Header } = Layout;
const MenuItem = Menu.Item;

import LoginView from '../auth/login/LoginView.jsx';
import SignupView from '../auth/signup/SignupView.jsx';

import Auth from '../../modules/Auth.js';

class Navigation extends Component {

  constructor(props) {
    super(props);

    this.state = {
      collapsed: false,
      selectedKeys: [],
      mouseIsOn: '',
      overlayZIndex: -1,
      drawerZIndex: -1,
    };
  }

  componentDidMount() {
    this.setState({ selectedKeys: [this.props.location.pathname] });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ selectedKeys: [nextProps.location.pathname] });
  }

  onCollapse = () => {
    if (this.state.collapsed === true) {
      setTimeout(() => {
        this.setState({
          overlayZIndex: -1,
        });
      }, 500);
    } else this.setState({
      overlayZIndex: 1,
    });

    if (this.state.collapsed === true) {
      setTimeout(() => {
        this.setState({
          drawerZIndex: -1,
        });
      }, 500);
    } else this.setState({
      drawerZIndex: 1,
    });

    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleMenuClick = (e) => {
    if (e.key === 'login') {
      this.props.onShowLoginModal();
      this.onCollapse();
      this.forceUpdate();

    } else if (e.key === 'signup') {
      this.props.onShowSignupModal();
      this.onCollapse();
      this.forceUpdate();

    } else if (e.key === 'logout') {
      this.props.onGetUserCredentialsHandler('', '', '', false);
      this.props.router.history.replace('/');
      this.onCollapse();
      Auth.deauthenticateUser();
      this.forceUpdate();

    } else
      this.onCollapse();
  };

  render() {

    const mediaQuery = window.matchMedia('(max-width: 1100px)');

    return (
        mediaQuery.matches ?
            <nav className="top-navigation">
              <NavBar
                  style={{
                    position: 'fixed',
                    width: '100vw',
                    transition: 'all 600ms cubic-bezier(0.23, 1, 0.32, 1)',
                    zIndex: 1,
                    height: 120,
                    backgroundColor: '#fff',
                  }}
                  icon={<Icon className="trigger"
                              style={{ color: '#000' }}
                              type='menu-unfold'
                              onClick={this.onCollapse}/>}>
                <Link to={`/`}>
                  <div className="site-logo">
                    <img src="logo.png"/>
                  </div>
                </Link>
                {Auth.isUserAuthenticated() ?
                    <Drawer className="my-drawer"
                            style={{
                              minHeight: '100vh',
                              width: this.state.drawerZIndex === 1 ?
                                  document.documentElement.clientWidth :
                                  0,
                              zIndex: this.state.drawerZIndex,
                            }}
                            contentStyle={{
                              color: '#A6A6A6',
                              textAlign: 'center',
                              paddingTop: 42,
                              zIndex: this.state.overlayZIndex === 1 ? 0 : -1,
                            }}
                            overlayStyle={{
                              zIndex: this.state.overlayZIndex,
                            }}
                            sidebar={<Menu
                                theme="light"
                                mode="inline"
                                style={{ lineHeight: '64px' }}
                                selectedKeys={this.state.selectedKeys}
                                defaultSelectedKeys={this.state.selectedKeys}
                                onClick={this.handleMenuClick}
                            >
                              <MenuItem key="control-navigator"
                                        style={{
                                          display: 'flex',
                                          justifyContent: 'center',
                                        }}>
                                <span>
                                  <Icon className="trigger"
                                        type='menu-fold'/>
                                </span>
                              </MenuItem>
                              <MenuItem key="/">
                                <Link to={`/`}/>
                                <Icon type="home"/>
                                <span>Home</span>
                              </MenuItem>
                              {this.props.isAdmin ?
                                  <MenuItem key="/control-panel">
                                    <Link to={`/control-panel`}/>
                                    <Icon type="skin"/>
                                    <span>Allergies Management</span>
                                  </MenuItem>
                                  :
                                  null
                              }
                              <MenuItem key="logout">
                                <Icon type="logout"/>
                                <span>Logout</span>
                              </MenuItem>
                            </Menu>}
                            open={this.state.collapsed}
                            onOpenChange={this.onCollapse}>
                    </Drawer>
                    :
                    <Drawer className="my-drawer"
                            style={{
                              minHeight: '100vh',
                              width: this.state.drawerZIndex === 1 ?
                                  document.documentElement.clientWidth :
                                  0,
                              zIndex: this.state.drawerZIndex,
                            }}
                            contentStyle={{
                              color: '#A6A6A6',
                              textAlign: 'center',
                              paddingTop: 42,
                              zIndex: this.state.overlayZIndex === 1 ? 0 : -1,
                            }}
                            overlayStyle={{
                              zIndex: this.state.overlayZIndex,
                            }}
                            sidebar={<Menu
                                theme="light"
                                mode="inline"
                                style={{ lineHeight: '64px' }}
                                selectedKeys={this.state.selectedKeys}
                                defaultSelectedKeys={this.state.selectedKeys}
                                onClick={this.handleMenuClick}
                            >
                              <MenuItem key="control-navigator"
                                        style={{
                                          display: 'flex',
                                          justifyContent: 'center',
                                        }}>
                                <span>
                                  <Icon className="trigger"
                                        type='menu-fold'/>
                                </span>
                              </MenuItem>
                              <MenuItem key="/">
                                <Link to={`/`}/>
                                <Icon type="home"/>
                                <span>Home</span>
                              </MenuItem>
                              <MenuItem key="login">
                                <Icon type="login"/>
                                <span>
                                  Login
                                </span>
                              </MenuItem>
                              <MenuItem key="signup">
                                <Icon type="user-add"/>
                                <span>
                                  Signup
                                </span>
                              </MenuItem>
                            </Menu>}
                            open={this.state.collapsed}
                            onOpenChange={this.onCollapse}>
                    </Drawer>
                }

                <Modal title="Authentication"
                       wrapClassName="vertical-center-modal"
                       visible={this.props.login.isModalVisible}
                       footer={null}
                       width="560px"
                       onOk={this.props.onHideLoginModal}
                       onCancel={this.props.onHideLoginModal}>
                  <LoginView/>
                </Modal>
                <Modal title="Registration"
                       wrapClassName="vertical-center-modal"
                       visible={this.props.signup.isModalVisible}
                       footer={null}
                       width="520px"
                       onOk={this.props.onHideSignupModal}
                       onCancel={this.props.onHideSignupModal}>
                  <SignupView/>
                </Modal>
              </NavBar>
            </nav>
            :
            <nav className="top-navigation">
              <Header style={{ height: 155 }}>
                <Link to={`/`}>
                  <div className="site-logo">
                    <img src="logo.png"/>
                  </div>
                </Link>
                {Auth.isUserAuthenticated() ?
                    <Menu
                        theme="light"
                        mode="horizontal"
                        style={{
                          lineHeight: '48px',
                          position: 'relative',
                          top: '52px',
                          float: 'right',
                        }}
                        selectedKeys={this.state.selectedKeys}
                        defaultSelectedKeys={this.state.selectedKeys}
                        onClick={this.handleMenuClick}
                    >
                      <MenuItem key="/">
                        <Link to={`/`}/>
                        <Icon type="home"/>
                        <span>Home</span>
                      </MenuItem>
                      {this.props.isAdmin ?
                          <MenuItem key="/control-panel">
                            <Link to={`/control-panel`}/>
                            <Icon type="appstore"/>
                            <span>Control Panel</span>
                          </MenuItem>
                          :
                          null
                      }
                      <MenuItem key="logout">
                        <Icon type="logout"/>
                        <span>Logout</span>
                      </MenuItem>
                    </Menu>
                    :
                    <Menu
                        theme="light"
                        mode="horizontal"
                        style={{
                          lineHeight: '48px',
                          position: 'relative',
                          top: '52px',
                          float: 'right',
                        }}
                        selectedKeys={this.state.selectedKeys}
                        defaultSelectedKeys={this.state.selectedKeys}
                        onClick={this.handleMenuClick}
                    >
                      <MenuItem key="/">
                        <Link to={`/`}/>
                        <Icon type="home"/>
                        <span>Home</span>
                      </MenuItem>
                      <MenuItem key="login">
                        <Icon type="login"/>
                        <span>
                          Login
                        </span>
                      </MenuItem>
                      <MenuItem key="signup">
                        <Icon type="user-add"/>
                        <span>
                          Signup
                        </span>
                      </MenuItem>
                    </Menu>
                }
              </Header>
              <Modal title="Authentication"
                     wrapClassName="vertical-center-modal"
                     visible={this.props.login.isModalVisible}
                     footer={null}
                     width="560px"
                     onOk={this.props.onHideLoginModal}
                     onCancel={this.props.onHideLoginModal}>
                <LoginView/>
              </Modal>
              <Modal title="Registration"
                     wrapClassName="vertical-center-modal"
                     visible={this.props.signup.isModalVisible}
                     footer={null}
                     width="520px"
                     onOk={this.props.onHideSignupModal}
                     onCancel={this.props.onHideSignupModal}>
                <SignupView/>
              </Modal>
            </nav>
    );
  }
}

export default Navigation;

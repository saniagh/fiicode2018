import React, { Component } from 'react';

class GroupAccess extends Component {
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

  handlePressEnterSearch = (e) => {
    if (e.key === 'Enter') {
      this.props.onVerifyGroupIdAndPassCode();
    }
  };

  render() {
    return (
        <div className="group-authentication-background">
          <div className={this.state.mainClassName}>
            <div className="my-group-spacing">
              <input type="text"
                     className="my-group-input"
                     placeholder="Enter group's passcode"
                     value={this.props.passCode}
                     onChange={this.props.onPassCodeChange}
                     onKeyDown={this.handlePressEnterSearch}/>
              <button className="my-group-button"
                      onClick={this.props.onVerifyGroupIdAndPassCode}>
                Search
              </button>
            </div>
          </div>
        </div>
    );
  }
}

export default GroupAccess;

import React, { Component } from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

class MyGroups extends Component {
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

  render() {

    const mediaQuery = window.matchMedia('(max-width: 1100px)');

    return (
        <div className={this.state.mainClassName}>
          <Card noHovering={true}
                bordered={false}
                bodyStyle={{
                  padding: mediaQuery.matches ?
                      '20px 0 20px 0' :
                      '50px 32px 150px 32px',
                }}>
            <div className="page-header">
              My groups
            </div>
            <Card noHovering={true}
                  style={{
                    width: mediaQuery.matches ?
                        '90vw'
                        :
                        900,
                    margin: '0 auto',
                  }}
                  bodyStyle={{
                    padding: mediaQuery.matches ? 10 : '10px 20px 10px 20px',
                  }}>
              <div className="my-groups-section-header">
                Groups I own
              </div>
              <ul className="groups-list">
                {this.props.ownGroups.map((groups, index) => {
                  return <Link key={index}
                               to={`/groups/verified/${groups._id}&${groups.passCode}`}>
                    <li className="groups-list-item">
                      {groups.groupName}
                      {groups.groupMotto ?
                          <i>{` (`}{groups.groupMotto}{`)`}</i>
                          :
                          null
                      }
                      {groups.groupMessage ? ': ' + groups.groupMessage : null}
                    </li>
                  </Link>;
                })}
              </ul>
            </Card>
            <Card noHovering={true}
                  style={{
                    width: mediaQuery.matches ?
                        '90vw'
                        :
                        900,
                    margin: '30px auto 0 auto',
                  }}
                  bodyStyle={{
                    padding: mediaQuery.matches ? 10 : '10px 20px 10px 20px',
                  }}>
              <div className="my-groups-section-header">
                Groups I take part in
              </div>
              <ul className="groups-list">
                {this.props.participantGroups.map((groups, index) => {
                  return <Link key={index}
                               to={`/groups/verified/${groups._id}&${groups.passCode}`}>
                    <li className="groups-list-item">
                      {groups.groupName}
                      {groups.groupMotto ?
                          <i>{` (`}{groups.groupMotto}{`)`}</i>
                          :
                          null
                      }
                      {groups.groupMessage ? ': ' + groups.groupMessage : null}
                    </li>
                  </Link>;
                })}
              </ul>
            </Card>
          </Card>
        </div>
    );
  }
}

export default MyGroups;

import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';
import { Collapse, Progress, Button, notification, Card } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';
const Panel = Collapse.Panel;

import Auth from '../../modules/Auth.js';

class Group extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mainClassName: 'main-container hidden',
      inputValue: '',
      terminalReplies: [
        {
          sender: 'allergy-ai',
          message: 'Welcome! I am the Allergy AI and I\'m here to take your command. For a list of possible commands type /help',
        },
      ],
      availableCommands: [],
      possibleAllergies: [],
    };
  }

  updateScroll = () => {
    let element = document.getElementById('terminal');
    if (element)
      element.scrollTop = element.scrollHeight;
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        mainClassName: 'main-container',
      });
    }, 100);

    if (this.props.group.allowGroupChat) {
      // Disqus script
      let d = document;
      let s = d.createElement('script');
      s.src = 'https://allergy-storm.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    }

    axios({
      url: '/robot/handle-command',
      method: 'post',
      headers: {
        'Authorization': `bearer ${Auth.getToken()}`,
        'Content-type': 'application/x-www-form-urlencoded',
      },
      data: qs.stringify({
        command: '/help',
      }),
    }).then((res) => {

      this.setState({
        availableCommands: res.data.availableCommands,
        possibleAllergies: res.data.possibleAllergies,
      });

    }).catch((err) => {

    });

  }

  onInputValueChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  onAppendRobotReply = (value) => {
    let newTerminalReplies = this.state.terminalReplies;

    newTerminalReplies.push({
      sender: 'allergy-ai',
      message: value,
    });
  };

  onProcessCommand = (command) => {

    // XSS protection
    if (command.indexOf('script') !== -1 || command.indexOf('<') !== -1) {
      alert('Please don\'t.');

      this.setState({
        inputValue: '',
      });
    }

    if (command) {
      if (command === '/help') {
        let newTerminalReplies = this.state.terminalReplies;

        newTerminalReplies.push({
          sender: 'allergy-ai',
          message: `<p>Available commands:</p>${this.state.availableCommands.map(
              (command, index) => {
                if (index + 1 < this.state.availableCommands.length)
                  return `<li>${command}</li>`;
                else {

                  return `<li>${command}</li><p>Available allergies:</p>${this.state.possibleAllergies.map(
                      (allergy) => {
                        return `<li>${allergy}</li>`;
                      }).join('')}`;
                }
              }).join('')}`,
        });

        this.setState({
          terminalReplies: newTerminalReplies,
        });

        this.updateScroll();
      } else {
        axios({
          url: '/robot/handle-command',
          method: 'post',
          headers: {
            'Authorization': `bearer ${Auth.getToken()}`,
            'Content-type': 'application/x-www-form-urlencoded',
          },
          data: qs.stringify({
            command: command,
          }),
        }).then((res) => {

          let newTerminalReplies = this.state.terminalReplies;

          newTerminalReplies.push({
            sender: 'allergy-ai',
            message: `<p>Find info here : <a href=${`/allergies/` +
            res.data.allergyLinkAnchor}
target="_blank">localhost/allergies/${res.data.allergyLinkAnchor}</a></p>`,
          });

          this.setState({
            terminalReplies: newTerminalReplies,
          });

        }).catch((err) => {

          if (err.response.data.message === 'Incorrect command.') {
            notification.warning({
              message: 'Incorrect command',
              description: 'Type /help to get a list of the available commands.',
              duration: 6,
            });
          } else if (err.response.data.message === 'Incorrect allergy') {
            notification.warning({
              message: 'Incorrect allergy name',
              description: 'This is not a valid name for an allergy. Type /help to get a full list of the available allergies.',
              duration: 6,
            });
          } else if (err.response.data.message ===
              'Use only the specified commands') {
            notification.warning({
              message: 'Use only the specified commands',
              description: 'You have used an incorrect command. Type /help for a list of the available commands.',
              duration: 6,
            });
          }

          console.log(err.response);
        });
      }
    }

    this.updateScroll();

  };

  onAddMessageToTerminal = (value) => {
    let newTerminalReplies = this.state.terminalReplies;

    if (value) {
      newTerminalReplies.push({
        sender: this.props.username,
        message: value,
      });

      this.onProcessCommand(value);

      this.setState({
        terminalReplies: newTerminalReplies,
        inputValue: '',
      });

      this.updateScroll();
    }
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.onAddMessageToTerminal(e.target.value);
    }
  };

  getTimeUntilShareLinkExpires = () => {
    if (this.props.group.shareLinkExpiresAt) {
      let newDate = new Date(parseInt(this.props.group.shareLinkExpiresAt));
      let currentDate = new Date();

      let timeDiff = newDate.getTime() - currentDate.getTime();

      return Math.ceil(timeDiff / (1000 * 3600 * 24));
    } else return 1;

  };

  render() {

    this.updateScroll();

    const mediaQuery = window.matchMedia('(max-width: 1100px)');

    const group = this.props.group;
    return (
        <div className={this.state.mainClassName}>
          <Card bordered={false}
                noHovering={true}
                bodyStyle={{
                  padding: mediaQuery.matches ?
                      '40px 0 60px 0' :
                      '50px 32px 100px 32px',
                }}>
            <h3 className="group-name">
              {group.groupName}
            </h3>
            <div className="group-motto">
              {group.groupMotto}
            </div>
            <div className="group-middle">
              <div className="group-middle-alerts">
                <h4 className="group-middle-title">
                  Group's message:
                </h4>
                <div>
                  {group.groupMessage}
                </div>
                <h4 className="group-middle-title">
                  Alerts enabled for this group:
                </h4>
                {group.allergiesOptedFor.map((allergy, index) => {

                  let newDate = new Date(allergy.alertTime);
                  let currentDate = new Date();

                  let timeDiff = newDate.getTime() - currentDate.getTime();
                  let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

                  return <span key={index}>
                      {allergy.isGeneralAllergy ?
                          <Collapse>
                            <Panel header={allergy.type}>
                              {diffDays >= 1 ?
                                  <div className="progress-spacing">
                                    <p className="progress-label">
                                      Time left until the alert will be mailed
                                      to the participants:
                                    </p>
                                    <Progress type="circle"
                                              percent={diffDays > 100 ?
                                                  0 :
                                                  100 - diffDays}
                                              format={
                                                percent => `${diffDays} Days`}/>
                                  </div>
                                  :
                                  <div className="alert-sent">
                                    Alert has been sent!
                                  </div>
                              }
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

                              {diffDays >= 1 ?
                                  <div className="progress-spacing">
                                    <p className="progress-label">
                                      Time left until the alert will be mailed
                                      to the participants:
                                    </p>
                                    <Progress type="circle"
                                              percent={diffDays > 100 ?
                                                  0 :
                                                  100 - diffDays}
                                              format={
                                                percent => `${diffDays} Days`}/>
                                  </div>
                                  :
                                  <div className="alert-sent">
                                    Alert has been sent!
                                  </div>
                              }

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
                </span>;
                })}
              </div>
              <div className="group-middle-participants">
                <h4 className="group-middle-title">
                  Participants in this group:
                </h4>
                <ul className="group-middle-participants-list">
                  {group.participants.map((participant, index) => {
                    return <li key={index}
                               style={participant.participantRole === 'Owner' ?
                                   { color: 'tomato' } :
                                   {}}>
                      {participant.participantFullName ?
                          participant.participantFullName :
                          participant.participantEmailAddress}&nbsp;
                      {participant.participantRole === 'Owner' ?
                        <span>(Owner)</span> : null}
                    </li>;
                  })}
                </ul>
              </div>

              {Auth.isUserAuthenticated && group.shareLinkEnabled &&
              this.getTimeUntilShareLinkExpires() >= 0 &&
              this.props.ownerEmailAddress &&
              group.ownerEmailAddress === this.props.ownerEmailAddress ?
                  <div className="group-middle-participants share-link">
                    <CopyToClipboard text={group.shareLink}
                                     onCopy={() => {
                                       notification.success({
                                         message: 'Copied!',
                                         description: 'The link has been copied to the clipboard.',
                                       });
                                     }}>
                      <Button>
                        Copy share link
                      </Button>
                    </CopyToClipboard>
                    <p className="share-link-paragraph">
                      {group.shareLink}
                    </p>
                  </div>
                  :
                  <div className="group-middle-participants share-link"
                       style={{
                         display: Auth.isUserAuthenticated() &&
                         group.ownerEmailAddress ===
                         this.props.ownerEmailAddress ? 'flex' : 'none',
                       }}>
                    <Button onClick={this.props.onRequestNewShareLink}
                            loading={this.props.fetchingGroup}>
                      Request a share link
                    </Button>
                    <p className="share-link-paragraph">
                      It will expire in 24 hours.
                    </p>
                  </div>}
            </div>
            {Auth.isUserAuthenticated() ?
                <div className="conversational-robot-container">
                  <div
                      className="conversational-robot-executed-commands-terminal"
                      id="terminal">
                    <ul>
                      {this.state.terminalReplies.map((reply, index) => {
                        if (index + 1 === this.state.terminalReplies.length) {
                          this.updateScroll();
                        }
                        return <li key={index}>
                      <span
                          className="conversational-robot-sender-name">{reply.sender}@allergy-storm: </span>
                          <span
                              className="conversational-robot-message-text"
                              dangerouslySetInnerHTML={{ __html: reply.message, }}></span>
                        </li>;
                      })}
                    </ul>
                  </div>
                  <div className="conversational-robot-input-field-container">
                    <input className="conversational-robot-input-field"
                           value={this.state.inputValue}
                           onChange={this.onInputValueChange}
                           onKeyDown={this.handleKeyPress}/>
                  </div>
                </div>
                :
                null
            }
            {group.allowGroupChat ?
                <div className="disqus-container">
                  <div id="disqus_thread"/>
                </div>
                :
                null
            }
          </Card>
        </div>
    );
  }
}

export default Group;

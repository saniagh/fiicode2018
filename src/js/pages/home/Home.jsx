import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { Link } from 'react-router-dom';

class Home extends Component {
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
                      '40px 0 60px 0' :
                      '90px 32px 150px 32px',
                }}>
            <h1 className="page-header">
              What's Allergy Storm?
            </h1>
            <p className="home-paragraph">
              Allergy Storm is a Web App designed to help people with allergies
              all over the world
            </p>
            <p className="home-paragraph">
              Using our app you can set reminders for your allergies, we'll just
              mail you whenever you chose to be reminded of your allergy
            </p>
            <p className="home-paragraph">
              To get started just click the button below
            </p>
            <div className="get-started-button-spacing">
              <Button type="primary"
                      size="large">
                <Link to={`/allergies`}>
                  Get started here
                </Link>
              </Button>
            </div>
          </Card>
        </div>
    );
  }
}

export default Home;

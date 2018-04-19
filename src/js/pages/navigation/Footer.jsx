import React, { Component } from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

import { smoothScroll } from '../../modules/scrollFunction.js';

class Footer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      footerClassName: 'footer-navigation hidden',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        footerClassName: 'footer-navigation',
      });
    }, 100);
  }

  render() {
    return (
        <div className={this.state.footerClassName}>
          <Card noHovering={true}
                bordered={false}
                bodyStyle={{
                  padding: 0,
                  margin: 0,
                  background: '#ececec',
                }}>
            <div className="footer-main">
              <nav className="footer-nav">
                <ul>
                  <li className="footer-nav-title">
                    Links
                  </li>
                  <li className="footer-nav-link"
                      onClick={smoothScroll()}>
                    <Link to={`/`}>
                      Home
                    </Link>
                  </li>
                  <li className="footer-nav-link"
                      onClick={smoothScroll()}>
                    <Link to={`/my-groups`}>
                      My groups
                    </Link>
                  </li>
                  <li className="footer-nav-link"
                      onClick={smoothScroll()}>
                    <Link to={`/allergies`}>
                      All allergies
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li className="footer-nav-title">
                    Allergies by category
                  </li>
                  <li className="footer-nav-link"
                      onClick={smoothScroll()}>
                    <Link to={`/allergies/food-allergy`}>
                      Food allergy
                    </Link>
                  </li>
                  <li className="footer-nav-link"
                      onClick={smoothScroll()}>
                    <Link to={`/allergies/skin-allergy`}>
                      Skin allergy
                    </Link>
                  </li>
                  <li className="footer-nav-link"
                      onClick={smoothScroll()}>
                    <Link to={`/allergies/dust-allergy`}>
                      Dust allergy
                    </Link>
                  </li>
                  <li className="footer-nav-link"
                      onClick={smoothScroll()}>
                    <Link to={`/allergies/insect-sting-allergy`}>
                      Insect string allergy
                    </Link>
                  </li>
                  <li className="footer-nav-link"
                      onClick={smoothScroll()}>
                    <Link to={`/allergies/pet-allergies`}>
                      Pet allergies
                    </Link>
                  </li>
                  <li className="footer-nav-link"
                      onClick={smoothScroll()}>
                    <Link to={`/allergies/eye-allergies`}>
                      Eye allergies
                    </Link>
                  </li>
                  <li className="footer-nav-link"
                      onClick={smoothScroll()}>
                    <Link to={`/allergies/drug-allergies`}>
                      Drug allergies
                    </Link>
                  </li>
                  <li className="footer-nav-link"
                      onClick={smoothScroll()}>
                    <Link to={`/allergies/allergic-rhinitis`}>
                      Allergic rhinitis
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li className="footer-nav-title">
                    More allergies by category
                  </li>
                  <li className="footer-nav-link"
                      onClick={smoothScroll()}>
                    <Link to={`/allergies/latex-allergy`}>
                      Latex allergy
                    </Link>
                  </li>
                  <li className="footer-nav-link"
                      onClick={smoothScroll()}>
                    <Link to={`/allergies/mold-allergy`}>
                      Mold allergy
                    </Link>
                  </li>
                  <li className="footer-nav-link"
                      onClick={smoothScroll()}>
                    <Link to={`/allergies/sinus-infection`}>
                      Sinus Infection
                    </Link>
                  </li>
                  <li className="footer-nav-link"
                      onClick={smoothScroll()}>
                    <Link to={`/allergies/cockroach-allergy`}>
                      Cockroach allergy
                    </Link>
                  </li>
                  <li className="footer-nav-link">
                    <a href="https://github.com/saniagh/fiicode2018">
                      Github
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="footer-subscribe-social">
                <Link to={`/`}>
                  <div className="site-logo"
                       style={{ paddingBottom: 20 }}>
                    <img src="http://i.imgur.com/Ua80D2q.png" alt=""
                         style={{ top: 0 }}/>
                  </div>
                </Link>
                <h3 className="footer-sub-title">FOLLOW US ON SOCIAL
                  MEDIA</h3>
                <div className="footer-socials">
                  <a href=""
                     className="footer-share footer-share-facebook"/>
                  <a href=""
                     className="footer-share footer-share-instagram"/>
                  <a href="" className="footer-share footer-share-twitter"/>
                </div>
              </div>
            </div>
          </Card>
        </div>
    );
  }
}

export default Footer;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as Scroll from 'react-scroll';
import { Anchor, Button, Card } from 'antd';
const ScrollLink = Scroll.Link;
const Element = Scroll.Element;
const Events = Scroll.Events;
const scrollSpy = Scroll.scrollSpy;

import Modal from 'react-responsive-modal';

class MoldAllergy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mainClassName: 'main-container hidden',
      isModalVisible: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        mainClassName: 'main-container',
      });
    }, 100);

    Events.scrollEvent.register('begin', (to, element) => {
    });

    Events.scrollEvent.register('end', (to, element) => {
    });

    scrollSpy.update();

    if (this.props.router.route.location.hash) {
      this.setState({
        isModalVisible: true,
      });
    }
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  onHideModal = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  render() {

    let hash = this.props.router.route.location.hash.replace(
        '#', '');

    const mediaQuery = window.matchMedia('(max-width: 1100px)');

    let selectedArray = [];
    selectedArray.push(this.props.moldAllergy._id);

    let symptoms = (
        <div>
          <Element name="Symptoms">
            <h3 className="allergy-section-title">
              Symptoms
            </h3>
          </Element>
          <p className="allergy-section-paragraph">
            Mold allergy symptoms can be similar to those of other
            respiratory allergies:
          </p>
          <ul className="allergy-section-list">
            <li>
              Nasal congestion
            </li>
            <li>
              Runny nose
            </li>
            <li>
              Sneezing
            </li>
            <li>
              Irritated eyes
            </li>
            <li>
              Coughing
            </li>
            <li>
              Wheezing
            </li>
            <li>
              Itchy throat
            </li>
          </ul>
          <p className="allergy-section-paragraph">
            Mold can also trigger or aggravate asthma symptoms.
          </p>
        </div>
    );

    let management = (
        <div>
          <Element name="Management and Treatment">
            <h3 className="allergy-section-title">
              Management and Treatment
            </h3>
          </Element>
          <p className="allergy-section-paragraph">
            If you suspect you might have a mold allergy, or if you have
            similar symptoms that continue to persist, consult an allergist.
            Skin or blood testing can help pinpoint the allergy.
          </p>
          <p className="allergy-section-paragraph">
            In the case of mold allergies, you may be able to identify the
            source of the mold by tracking your symptoms over a two-week
            period, along with where you’ve been. Exposure to mold allergies
            can occur just about anywhere — in the home, outdoors or at
            work.
          </p>
          <p className="allergy-section-paragraph">
            Antihistamines and decongestants can help relieve the symptoms.
            Plan ahead and wear a dust mask — or pre-emptively take allergy
            medications — if you’re going to be around potential sources of
            mold, such as when doing yard work. Once you are home, remove
            any mold spores by rinsing your nose with a saline solution and
            taking a shower.
          </p>
          <p className="allergy-section-paragraph">
            Another key step in the treatment of mold allergies is guarding
            against mold in your home:
          </p>
          <ul className="allergy-section-list">
            <li>
              Quickly clean up any spills or leaks to prevent mold from
              growing.
            </li>
            <li>
              Use dehumidifiers or exhaust fans — or crack open a window —
              to help reduce moisture and humidity in bathrooms or other
              rooms in your home.
            </li>
            <li>
              Regularly clean garbage cans and refrigerator drip pans.
            </li>
            <li>
              Regularly clear your gutters, and ensure that drainage flows
              away from your home’s foundation.
            </li>
            <li>
              Consult a professional, or follow the guidelines from the
              Environmental Protection Agency, to clean up existing mold in
              your home.
            </li>
          </ul>
        </div>
    );

    return (
        <div className={this.state.mainClassName}>
          <h1 className="page-header">
            Mold Allergy
          </h1>
          <div className="allergy-create-group-button">
            <Button type='primary'
                    size="large"
                    onClick={() => {
                      this.props.onConfirmSelectionOneAllergy(
                          selectedArray);
                      this.props.onSelect(this.props.moldAllergy._id);
                    }
                    }>
              <Link to={`/create-group`}>
                Continue creating group
              </Link>
            </Button>
          </div>
          <div className="allergy-page-container">
            <div className="allergy-page-anchor-container">
              <Anchor affix={!mediaQuery.matches}
                      offsetTop={mediaQuery.matches ? 120 : 50}>
                <div className="ant-anchor-link">
                  <ScrollLink to="Overview"
                              offset={mediaQuery.matches ? -120 : -50}
                              spy={true}
                              smooth={true}
                              duration={500}
                              isDynamic={true}>
                    Overview
                  </ScrollLink>
                </div>
                <div className="ant-anchor-link">
                  <ScrollLink to="Symptoms"
                              offset={mediaQuery.matches ? -120 : -50}
                              spy={true}
                              smooth={true}
                              duration={500}
                              isDynamic={true}>
                    Symptoms
                  </ScrollLink>
                </div>
                <div className="ant-anchor-link">
                  <ScrollLink to="Management and Treatment"
                              offset={mediaQuery.matches ? -120 : -50}
                              spy={true}
                              smooth={true}
                              duration={500}
                              isDynamic={true}>
                    Management and Treatment
                  </ScrollLink>
                </div>
              </Anchor>
            </div>
            <div className="allergy-page-content" id="page-content"
                 style={{ paddingBottom: 20 }}>
              <Element name="Overview">
                <h3 className="allergy-section-title">
                  Overview
                </h3>
              </Element>
              <p className="allergy-section-paragraph">
                Mold allergies can be tough to outrun. The fungus can grow in
                your basement, in your bathroom, in the cabinet under your sink
                where a leak went undetected, in the pile of dead leaves in your
                backyard and in the field of uncut grass down the road.
              </p>
              <p className="allergy-section-paragraph">
                There are roughly 1,000 species of mold in the United States —
                many of which aren’t visible to the naked eye. As tiny mold
                spores become airborne, they can cause allergic reactions in
                people who have mold allergies.
              </p>
              {symptoms}
              {management}
            </div>
          </div>
          <Modal open={this.state.isModalVisible}
                 onClose={this.onHideModal}>
            <Card noHovering={true}
                  bordered={false}>
              {hash === 'symptoms' ?
                  symptoms
                  :
                  null
              }
              {hash === 'management' ?
                  management
                  :
                  null
              }
            </Card>
          </Modal>
        </div>
    );
  }
}

export default MoldAllergy;

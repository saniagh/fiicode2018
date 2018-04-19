import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as Scroll from 'react-scroll';
import { Anchor, Button } from 'antd';
const ScrollLink = Scroll.Link;
const Element = Scroll.Element;
const Events = Scroll.Events;
const scrollSpy = Scroll.scrollSpy;

class CockroachAllergy extends Component {
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

    Events.scrollEvent.register('begin', (to, element) => {
    });

    Events.scrollEvent.register('end', (to, element) => {
    });

    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {

    const mediaQuery = window.matchMedia('(max-width: 1100px)');

    let selectedArray = [];
    selectedArray.push(this.props.cockroachAllergy._id);

    return (
        <div className={this.state.mainClassName}>
          <h1 className="page-header">
            Cockroach Allergy
          </h1>
          <div className="allergy-create-group-button">
            <Button type='primary'
                    size="large"
                    onClick={() => {
                      this.props.onConfirmSelectionOneAllergy(
                          selectedArray);
                      this.props.onSelect(this.props.cockroachAllergy._id);
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
                Cockroaches aren’t just unsightly pests, crawling across your
                kitchen floor in the middle of the night. They can be an allergy
                trigger as well.
              </p>
              <p className="allergy-section-paragraph">
                The saliva, feces and shedding body parts of cockroaches can
                trigger both asthma and allergies. These allergens act like dust
                mites, aggravating symptoms when they are kicked up in the air.
              </p>
              <p className="allergy-section-paragraph">
                The National Pest Management Association reports that 63 percent
                of homes in the United States contain cockroach allergens. In
                urban areas, that number rises to between 78 and 98 percent of
                homes
              </p>
              <Element name="Symptoms">
                <h3 className="allergy-section-title">
                  Symptoms
                </h3>
              </Element>
              <p className="allergy-section-paragraph">
                Typical cockroach allergy symptoms include:
              </p>
              <ul className="allergy-section-list">
                <li>
                  Coughing
                </li>
                <li>
                  Nasal congestion
                </li>
                <li>
                  Skin rash
                </li>
                <li>
                  Wheezing
                </li>
                <li>
                  Ear infection
                </li>
                <li>
                  Sinus infection
                </li>
              </ul>
              <p className="allergy-section-paragraph">
                In many cases with cockroach allergens, these symptoms become
                chronic, lasting beyond typical seasonal allergies.
              </p>
              <Element name="Management and Treatment">
                <h3 className="allergy-section-title">
                  Management and Treatment
                </h3>
              </Element>
              <p className="allergy-section-paragraph">
                If you suspect that you have a cockroach allergy, see an
                allergist, who can conduct a skin test. This test involves
                applying a diluted allergen to the surface of your skin, waiting
                about 15 minutes, then observing to see if there’s a reaction,
                such as a raised, red and itchy bump.
              </p>
              <p className="allergy-section-paragraph">
                If a reaction develops, your allergist may recommend
                medications, either prescription or over-the-counter, or allergy
                shots, which help your body become less sensitive to specific
                allergens.
              </p>
              <p className="allergy-section-paragraph">
                Of course, one of the best ways to treat and prevent cockroach
                allergies is to eliminate these insects from your home. Key tips
                include:
              </p>
              <ul className="allergy-section-list">
                <li>
                  Keep your house clean, including kitchen floors, sinks,
                  counters and stoves.
                </li>
                <li>
                  Keep food containers and garbage cans sealed.
                </li>
                <li>
                  Fix any leaks that could unknowingly give cockroaches access
                  to water.
                </li>
                <li>
                  Avoid piles — of newspapers, laundry, magazines or dirty
                  dishes.
                </li>
                <li>
                  Consult a pest control company or exterminator.
                </li>
              </ul>
            </div>
          </div>
        </div>
    );
  }
}

export default CockroachAllergy;

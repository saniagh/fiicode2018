import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as Scroll from 'react-scroll';
import { Anchor, Button, Card } from 'antd';
const ScrollLink = Scroll.Link;
const Element = Scroll.Element;
const Events = Scroll.Events;
const scrollSpy = Scroll.scrollSpy;
import Modal from 'react-responsive-modal';

class LatexAllergy extends Component {
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

      let availableCommands = ['symptoms', 'triggers', 'management'];

      let hash = this.props.router.route.location.hash.replace(
          '#', '');

      if (availableCommands.indexOf(hash) !== -1) {
        this.setState({
          isModalVisible: true,
        });
      }
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
    const iframeQuery = window.matchMedia('(max-width: 620px)');

    let selectedArray = [];
    selectedArray.push(this.props.latexAllergy._id);

    let symptoms = (
        <div>
          <Element name="Triggers and Symptoms">
            <h3 className="allergy-section-title">
              Triggers and Symptoms
            </h3>
          </Element>
          <h4 className="allergy-section-mid-title">
            What triggers the allergic reaction to latex?
          </h4>
          <p className="allergy-section-paragraph">
            When people with latex allergy come into direct contact with
            latex, an allergic reaction may follow. Common examples include:
          </p>
          <ul className="allergy-section-list">
            <li>
              A medical or dental procedure conducted by health care workers
              wearing natural rubber latex gloves
            </li>
            <li>
              Blowing up a rubber balloon
            </li>
          </ul>
          <h4 className="allergy-section-mid-title">
            What are latex allergy symptoms?
          </h4>
          <p className="allergy-section-paragraph">
            In most cases, latex allergy develops after many previous
            exposures to latex. Latex allergy symptoms may include hives,
            itching, stuffy or runny nose. It can cause asthma symptoms of
            wheezing, chest tightness and difficulty breathing. Symptoms
            begin within minutes after exposure to latex containing
            products. The most severe latex allergy can result in
            anaphylaxis, a serious allergic reaction involving severe
            breathing difficulty and/or fall in blood pressure (shock).
          </p>
          <p className="allergy-section-paragraph">
            Allergic skin problems can occur following direct contact with
            allergic latex proteins in latex glove products. Symptoms may
            include immediate itching, redness and swelling of skin that
            touched the item containing latex. These and other latex
            allergic reactions are less common now. Many hospitals or
            doctors’ offices have switched to non-latex gloves or low
            protein latex gloves.
          </p>
          <p className="allergy-section-paragraph">
            A second type of skin allergy called “allergic contact
            dermatitis” may be caused by chemicals used to manufacture
            rubber gloves. This dermatitis is recognized by the eczema and
            blisters on the back of the hands. It resembles a poison ivy
            rash, and begins 1 to 3 days after wearing rubber gloves.
          </p>
          <p className="allergy-section-paragraph">
            Direct physical contact with latex products is not needed to
            trigger an allergic reaction. Anaphylaxis and severe asthmatic
            reactions have been caused by inhaling latex proteins in the air
            resulting from the powder in the latex glove.
          </p>
          <h4 className="allergy-section-mid-title">
            What foods are potential problems for people with latex allergy?
          </h4>
          <p className="allergy-section-paragraph">
            If you have latex allergy you also can have food allergies. The
            foods most likely to cause this problem include: apple, avocado,
            banana, carrot, celery, chestnut, kiwi, melons, papaya, raw
            potato and tomato.
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
          <h4 className="allergy-section-mid-title">
            How is latex allergy diagnosed?
          </h4>
          <p className="allergy-section-paragraph">
            Latex allergy is diagnosed by an allergy blood test.
          </p>
          <h4 className="allergy-section-mid-title">
            How is latex allergy treated?
          </h4>
          <p className="allergy-section-paragraph">
            The best treatment for latex allergy is avoidance. If you have
            severe latex allergy reaction you should:
          </p>
          <ul className="allergy-section-list">
            <li>
              Wear medical alert identification
            </li>
            <li>
              Carry an epinephrine (adrenaline) auto-injector for emergency
              treatment
            </li>
          </ul>
          <p className="allergy-section-paragraph">
            Health care workers with a history of latex sensitivity who must
            wear gloves should stop wearing latex gloves. Their co-workers
            should also not use latex gloves, but rather switch to synthetic
            gloves.
          </p>
          <p className="allergy-section-paragraph">
            Patients with latex allergy are at risk of asthma on exposure to
            latex-containing aerosols. They should try to avoid areas where
            powdered latex gloves or other latex products are used.
          </p>
          <h4 className="allergy-section-mid-title">
            How can latex allergy be prevented?
          </h4>
          <p className="allergy-section-paragraph">
            If you have latex allergy you should avoid direct contact with
            all products and devices that contain latex. Also avoid food
            that causes an allergic reaction. Latex allergy problems during
            dental, medical or surgical procedures can be prevented by
            warning health care providers about latex allergy before any
            test or treatment. Latex allergic people can receive medical or
            dental care in a latex-safe area. Hospitals and clinics that use
            only low protein latex gloves and non-latex gloves have
            experienced dramatic declines in new cases of latex allergy.
          </p>
          <p className="allergy-section-paragraph">
            Allergists can provide latex-allergic people with information
            and assistance to help them avoid products which may contain
            latex. The American Latex Allergy Association also has
            additional information.
          </p>
        </div>
    );

    return (
        <div className={this.state.mainClassName}>
          <h1 className="page-header">
            Latex Allergy
          </h1>
          <div className="allergy-create-group-button">
            <Button type='primary'
                    size="large"
                    onClick={() => {
                      this.props.onConfirmSelectionOneAllergy(
                          selectedArray);
                      this.props.onSelect(this.props.latexAllergy._id);
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
                  <ScrollLink to="What is natural rubber latex?"
                              offset={mediaQuery.matches ? -120 : -50}
                              spy={true}
                              smooth={true}
                              duration={500}
                              isDynamic={true}>
                    What is natural rubber latex?
                  </ScrollLink>
                </div>
                <div className="ant-anchor-link">
                  <ScrollLink to="Triggers and Symptoms"
                              offset={mediaQuery.matches ? -120 : -50}
                              spy={true}
                              smooth={true}
                              duration={500}
                              isDynamic={true}>
                    Triggers and Symptoms
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
                Allergic reactions to latex may be serious and can very rarely
                be fatal. If you have latex allergy you should limit or avoid
                future exposure to latex products.
              </p>
              <p className="allergy-section-paragraph">
                People who are at higher risk for developing latex allergy
                include:
              </p>
              <ul className="allergy-section-list">
                <li>
                  Health care workers and others who frequently wear latex
                  gloves
                </li>
                <li>
                  People who have had multiple surgeries (for example, 10 or
                  more), such as children with spina bifida
                </li>
                <li>
                  People who are often exposed to natural rubber latex,
                  including rubber industry workers
                </li>
                <li>
                  People with other allergies, such as hay fever (allergic
                  rhinitis) or allergy to certain foods
                </li>
              </ul>
              <p className="allergy-section-paragraph">
                An allergist has specialized training and expertise in managing
                allergies, allergic rhinitis and asthma. They can develop a plan
                for rhinitis treatment. The goal will be to enable you to lead a
                life that is as normal and symptom-free as possible.
              </p>
              {symptoms}
              <Element name="What is natural rubber latex?">
                <h3 className="allergy-section-title">
                  What is natural rubber latex?
                </h3>
              </Element>
              <p className="allergy-section-paragraph">
                Natural rubber latex comes from the sap of the rubber tree,
                Hevea brasiliensis, found in Africa and Southeast Asia. Allergic
                reactions to products made with latex develop in persons who
                become allergic (or sensitized) to proteins contained in natural
                rubber latex. Natural rubber latex should not be confused with
                synthetic rubber made from chemicals. Synthetic rubber products,
                including “latex” house paints, are not made with natural latex
                and do not trigger allergic reactions in people who are allergic
                to products made with natural rubber latex.
              </p>
              <p className="allergy-section-paragraph">
                What products contain natural rubber latex?
              </p>
              <p className="allergy-section-paragraph">
                Latex is a common component of many medical and dental supplies.
                These include disposable gloves, dental dams, airway and
                intravenous tubing, syringes, stethoscopes, catheters, dressings
                and bandages. Latex also is found in many consumer products.
                These include condoms, handbags, balloons, athletic shoes,
                tires, tools, underwear leg and waistbands, rubber toys, baby
                bottles, nipples and pacifiers.
              </p>
              <iframe width={iframeQuery.matches ? '100%' : 560} height="315"
                      src="https://www.youtube.com/embed/A2IXz8kt2Eo"
                      frameBorder="0" allow="autoplay; encrypted-media"
                      allowFullScreen></iframe>
              {management}
            </div>
          </div>
          <Modal open={this.state.isModalVisible}
                 onClose={this.onHideModal}>
            <Card noHovering={true}
                  bordered={false}>
              {hash === 'symptoms' || hash === 'triggers' ?
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

export default LatexAllergy;

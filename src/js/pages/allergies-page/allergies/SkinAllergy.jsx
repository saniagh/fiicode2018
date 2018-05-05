import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as Scroll from 'react-scroll';
import { Anchor, Button, Card } from 'antd';
const ScrollLink = Scroll.Link;
const Element = Scroll.Element;
const Events = Scroll.Events;
const scrollSpy = Scroll.scrollSpy;

import Modal from 'react-responsive-modal';

class SkinAllergy extends Component {
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

      let availableCommands = ['symptoms', 'faq'];

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
    selectedArray.push(this.props.skinAllergy._id);

    let symptoms = (
        <div>
          <Element name="Eczema">
            <h3 className="allergy-section-title">
              Eczema
            </h3>
          </Element>
          <p className="allergy-section-paragraph">
            Eczema, also known as atopic dermatitis, affects between 10 and
            20 percent of children and 1 to 3 percent of adults. A common
            symptom of eczema is dry, red, irritated and itchy skin.
            Sometimes, especially when infected, the skin may have small,
            fluid-filled bumps that ooze a clear or yellowish liquid. People
            with eczema often have a family history of allergies.
          </p>
          <Element name="Hives">
            <h3 className="allergy-section-title">
              Hives
            </h3>
          </Element>
          <p className="allergy-section-paragraph">
            Hives (urticaria) are red bumps or welts that appear on the
            body. The condition is called acute urticaria if it lasts for no
            more than six weeks, and chronic urticaria if it persists beyond
            six weeks. Acute urticaria is most commonly caused by exposure
            to an allergen or by an infection. The cause of chronic
            urticaria is largely unknown.
          </p>
          <p className="allergy-section-paragraph">
            Learn more about urticaria and how to manage it:
          </p>
          <iframe width={iframeQuery.matches ? '100%' : 560} height="315"
                  src="https://www.youtube.com/embed/9bSdoO9QYXA"
                  frameBorder="0" allow="autoplay; encrypted-media"
                  allowFullScreen></iframe>
          <Element name="Contact dermatitis">
            <h3 className="allergy-section-title">
              Contact dermatitis
            </h3>
          </Element>
          <p className="allergy-section-paragraph">
            Contact dermatitis is a reaction that appears when the skin
            comes in contact with an irritant or an allergen. Symptoms can
            include a rash, blisters, itching and burning.
          </p>
          <p className="allergy-section-paragraph">
            Soaps, laundry detergents, fabric softeners, shampoos — or even
            excessive exposure to water — can all cause contact dermatitis.
            Other items that can cause a reaction are metals (such as
            nickel, a component of stainless steel and other alloys used to
            make costume jewelry), adhesives, nail polish, topical
            medications, plants and latex gloves.
          </p>
          <p className="allergy-section-paragraph">
            Sometimes an allergen won’t cause a skin reaction unless the
            skin is also exposed to sunlight. This condition is called
            photoallergic contact dermatitis. It can occur with products
            such as shaving lotion, sunscreen and some perfumes.
          </p>
        </div>
    );

    let faq = (
        <div>
          <Element name="FAQs">
            <h3 className="allergy-section-title">
              FAQs
            </h3>
          </Element>
          <h4 className="allergy-section-mid-title">
            What does a skin allergy look like?
          </h4>
          <p className="allergy-section-paragraph">
            There are several different types of skin allergy reactions that
            allergists treat.
          </p>
          <p className="allergy-section-paragraph">
            Eczema (also commonly called atopic dermatitis) typically
            results in dry, sensitive skin. You may experience red itchy
            patches. Eczema can come and go over time, and flare-ups may
            crack, ooze, and itch severely. It is very itchy and can vary in
            severity from mild (just dry skin ) to severe (red, scaly,
            thick, fissured and oozing skin)
          </p>
          <p className="allergy-section-paragraph">
            Hives (also known as urticaria) are raised itchy bumps.
            Typically hives appear reddish, and will “blanch” (or turn
            white) in the center when pressed.
          </p>
          <p className="allergy-section-paragraph">
            Contact dermatitis is typically caused by exposure to an
            allergen or irritant. If you have red itchy bumps on your skin,
            especially at the site of contact with some potential irritant
            or allergen, you may be experiencing contact dermatitis.
          </p>
          <p className="allergy-section-paragraph">
            Your allergist can conduct an examination and do testing to help
            determine the cause of your skin reaction, and can recommend
            treatment to help relieve your symptoms.
          </p>
          <h4 className="allergy-section-mid-title">
            How can I relieve the itching from my skin rash?
          </h4>
          <p className="allergy-section-paragraph">
            Avoid scratching! Scratching your rash or hives can create more
            irritation and can lead to infection. Frequent baths followed
            immediately with adequate moisturization may help ease your
            discomfort.
          </p>
          <p className="allergy-section-paragraph">
            Your allergist may prescribe a cream or oral medication to help
            alleviate your discomfort. Antihistamines and moisturizing
            ointments can also help ease irritation and dryness. Recently,
            new medications such as an ointment has been approved for mild
            to moderate atopic dermatitis and a biologic for moderate to
            severe atopic dermatitis. You can discuss these options with
            your allergist.
          </p>
          <h4 className="allergy-section-mid-title">
            I haven’t changed anything about my usual routine – what could
            be causing my skin rash or hives?
          </h4>
          <p className="allergy-section-paragraph">
            There could be many causes for your skin rash. Some types of
            rash are caused by allergies, others may be caused by
            infections, skin conditions such as eczema or rosacea, or even
            just by dry or damaged skin. Your allergist can help diagnose
            the cause of your symptoms and prescribe treatment to help you
            get relief.
          </p>
          <h4 className="allergy-section-mid-title">
            Should I stay out of the sun until my rash or hives are gone?
          </h4>
          <p className="allergy-section-paragraph">
            If your skin is already irritated or sensitive, exposure to UV
            rays and possible sunburn could cause you more discomfort. It’s
            a good idea to cover up if you can, or to minimize your time in
            direct sunlight.
          </p>
          <p className="allergy-section-paragraph">
            In addition, some types of skin rash can be caused by the sun.
            Photoallergic contact dermatitis occurs when your skin has a
            reaction to an irritant or allergen after exposure to the sun.
            Cosmetics, sunscreen, shaving lotion, and perfume can trigger
            this kind of reaction.
          </p>
          <p className="allergy-section-paragraph">
            Consult with your allergist to determine the cause of your skin
            reaction and the best course of treatment.
          </p>
          <h4 className="allergy-section-mid-title">
            Could my skin reaction be caused by a food allergy?
          </h4>
          <p className="allergy-section-paragraph">
            Yes! A reaction to a food allergen can cause you to have a skin
            reaction like hives.
          </p>
          <p className="allergy-section-paragraph">
            There are many possible causes for hives and rashes, so consult
            with your allergist to determine the cause of your symptoms and
            the best course of treatment.
          </p>
        </div>
    );

    return (
        <div className={this.state.mainClassName}>
          <h1 className="page-header">
            Skin allergy
          </h1>
          <div className="allergy-create-group-button">
            <Button type='primary'
                    size="large"
                    onClick={() => {
                      this.props.onConfirmSelectionOneAllergy(
                          selectedArray);
                      this.props.onSelect(this.props.skinAllergy._id);
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
                  <ScrollLink to="Eczema"
                              offset={mediaQuery.matches ? -120 : -50}
                              spy={true}
                              smooth={true}
                              duration={500}
                              isDynamic={true}>
                    Eczema
                  </ScrollLink>
                </div>
                <div className="ant-anchor-link">
                  <ScrollLink to="Hives"
                              offset={mediaQuery.matches ? -120 : -50}
                              spy={true}
                              smooth={true}
                              duration={500}
                              isDynamic={true}>
                    Hives
                  </ScrollLink>
                </div>
                <div className="ant-anchor-link">
                  <ScrollLink to="Contact dermatitis"
                              offset={mediaQuery.matches ? -120 : -50}
                              spy={true}
                              smooth={true}
                              duration={500}
                              isDynamic={true}>
                    Contact dermatitis
                  </ScrollLink>
                </div>
                <div className="ant-anchor-link">
                  <ScrollLink to="FAQs"
                              offset={mediaQuery.matches ? -120 : -50}
                              spy={true}
                              smooth={true}
                              duration={500}
                              isDynamic={true}>
                    FAQs
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
                Bumps, itching, redness and other skin conditions are very
                common, and their cause may not be easily identifiable. Rashes
                can be caused by many things, including plants (poison ivy, for
                example), allergic reactions to a medication or a food, or an
                illness (measles or chickenpox, for example). Eczema and hives,
                both of which are related to allergies, are two of the most
                common skin rashes.
              </p>
              {symptoms}
              {faq}
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
              {hash === 'faq' ?
                  faq
                  :
                  null
              }
            </Card>
          </Modal>
        </div>
    );
  }
}

export default SkinAllergy;

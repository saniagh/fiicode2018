import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as Scroll from 'react-scroll';
import { Anchor, Button } from 'antd';
const ScrollLink = Scroll.Link;
const Element = Scroll.Element;
const Events = Scroll.Events;
const scrollSpy = Scroll.scrollSpy;

class PetAllergies extends Component {
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
    const iframeQuery = window.matchMedia('(max-width: 620px)');

    let selectedArray = [];
    selectedArray.push(this.props.petAllergies._id);

    return (
        <div className={this.state.mainClassName}>
          <h1 className="page-header">
            Pet allergies
          </h1>
          <div className="allergy-create-group-button">
            <Button type='primary'
                    size="large"
                    onClick={() => {
                      this.props.onConfirmSelectionOneAllergy(
                          selectedArray);
                      this.props.onSelect(this.props.petAllergies._id);
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
                  <ScrollLink to="Cat Allergies"
                              offset={mediaQuery.matches ? -120 : -50}
                              spy={true}
                              smooth={true}
                              duration={500}
                              isDynamic={true}>
                    Cat Allergies
                  </ScrollLink>
                </div>
                <div className="ant-anchor-link">
                  <ScrollLink to="Cat Allergy Symptoms"
                              offset={mediaQuery.matches ? -120 : -50}
                              spy={true}
                              smooth={true}
                              duration={500}
                              isDynamic={true}>
                    Cat Allergy Symptoms
                  </ScrollLink>
                </div>
                <div className="ant-anchor-link">
                  <ScrollLink to="Diagnosing Cat Allergies"
                              offset={mediaQuery.matches ? -120 : -50}
                              spy={true}
                              smooth={true}
                              duration={500}
                              isDynamic={true}>
                    Diagnosing Cat Allergies
                  </ScrollLink>
                </div>
                <div className="ant-anchor-link">
                  <ScrollLink to="Cat Allergy Management and Treatment"
                              offset={mediaQuery.matches ? -120 : -50}
                              spy={true}
                              smooth={true}
                              duration={500}
                              isDynamic={true}>
                    Cat Allergy Management and Treatment
                  </ScrollLink>
                </div>
                <div className="ant-anchor-link">
                  <ScrollLink to="Dog Allergy"
                              offset={mediaQuery.matches ? -120 : -50}
                              spy={true}
                              smooth={true}
                              duration={500}
                              isDynamic={true}>
                    Dog Allergy
                  </ScrollLink>
                </div>
                <div className="ant-anchor-link">
                  <ScrollLink to="Dog Allergy Symptoms"
                              offset={mediaQuery.matches ? -120 : -50}
                              spy={true}
                              smooth={true}
                              duration={500}
                              isDynamic={true}>
                    Dog Allergy Symptoms
                  </ScrollLink>
                </div>
                <div className="ant-anchor-link">
                  <ScrollLink to="Diagnosing Dog Allergies"
                              offset={mediaQuery.matches ? -120 : -50}
                              spy={true}
                              smooth={true}
                              duration={500}
                              isDynamic={true}>
                    Diagnosing Dog Allergies
                  </ScrollLink>
                </div>
                <div className="ant-anchor-link">
                  <ScrollLink to="Dog Allergy Management and Treatment"
                              offset={mediaQuery.matches ? -120 : -50}
                              spy={true}
                              smooth={true}
                              duration={500}
                              isDynamic={true}>
                    Dog Allergy Management and Treatment
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
              <h4 className="allergy-section-mid-title">
                Pet Allergy Symptoms
              </h4>
              <ul className="allergy-section-list">
                <li>
                  Sneezing
                </li>
                <li>
                  Runny or stuffy nose
                </li>
                <li>
                  Facial pain (from nasal congestion)
                </li>
                <li>
                  Coughing, chest tightness, shortness of breath and wheezing
                </li>
                <li>
                  Watery, red or itchy eyes
                </li>
                <li>
                  Skin rash or hives
                </li>
              </ul>
              <h4 className="allergy-section-mid-title">
                Pet Allergy Management and Treatment
              </h4>
              <ul className="allergy-section-list">
                <li>
                  Avoid being around dogs and cats; if you have a pet at home,
                  take specific steps to limit exposure.
                </li>
                <li>
                  Nasal sprays, antihistamines and bronchodilators can help
                  relieve symptoms.
                </li>
                <li>
                  Consider allergy shots (immunotherapy).
                </li>
              </ul>
              <p className="allergy-section-paragraph">
                For more information on cat allergies,
                <ScrollLink to="Cat Allergies"
                            offset={mediaQuery.matches ? -120 : -50}
                            spy={true}
                            smooth={true}
                            duration={500}
                            isDynamic={true}>
                  &nbsp;click here
                </ScrollLink>
                .
              </p>
              <p className="allergy-section-paragraph">
                For more information on dog allergies,
                <ScrollLink to="Dog Allergy"
                            offset={mediaQuery.matches ? -120 : -50}
                            spy={true}
                            smooth={true}
                            duration={500}
                            isDynamic={true}>
                  &nbsp;click here
                </ScrollLink>
                .
              </p>
              <Element name="Cat Allergies">
                <h3 className="allergy-section-title">
                  Cat Allergies
                </h3>
              </Element>
              <p className="allergy-section-paragraph">
                If your nose runs and your eyes water or you start sneezing and
                wheezing after petting or playing with a cat, you likely have a
                cat allergy. A cat allergy can contribute to constant allergy
                symptoms, as exposure can occur at work, school, day care or in
                other indoor environments, even if a cat is not present.
              </p>
              <p className="allergy-section-paragraph">
                Cats produce multiple allergens (proteins that can cause
                allergy). These allergens are found on the fur and skin and in
                saliva. All cats produce allergens; studies have not shown that
                cats can be hypoallergenic (meaning that they don’t cause
                allergy). Homes with more than one cat have higher levels of cat
                allergens. Characteristics such as the length of a cat’s hair,
                its sex and the amount of time a cat spends indoors are not
                associated with cat allergen levels.
              </p>
              <p className="allergy-section-paragraph">
                Dust and pollen in a cat’s coat can also cause allergy symptoms.
                In those cases, the allergy is to the dust or pollen, not to the
                cat.
              </p>
              <iframe width={iframeQuery.matches ? '100%' : 560} height="315"
                      src="https://www.youtube.com/embed/7OWAO5nnR9A"
                      frameBorder="0" allow="autoplay; encrypted-media"
                      allowFullScreen></iframe>
              <Element name="Cat Allergy Symptoms">
                <h3 className="allergy-section-title">
                  Cat Allergy Symptoms
                </h3>
              </Element>
              <p className="allergy-section-paragraph">
                Cat allergy symptoms range from mild to severe, depending on an
                individual’s sensitivity and the level of exposure to allergens.
                Those variables may also influence how quickly symptoms develop
                after exposure. Highly sensitive people can develop symptoms,
                including breathing problems or a rash, within minutes of
                touching a cat or entering a house with a cat.
              </p>
              <p className="allergy-section-paragraph">
                Cat allergy symptoms may include:
              </p>
              <ul className="allergy-section-list">
                <li>
                  Sneezing or a runny or stuffy nose
                </li>
                <li>
                  Facial pain (from nasal congestion)
                </li>
                <li>
                  Coughing, chest tightness, shortness of breath and wheezing
                </li>
                <li>
                  Watery, red or itchy eyes
                </li>
                <li>
                  Skin rash or hives
                </li>
              </ul>
              <p className="allergy-section-paragraph">
                Some people may also develop a rash or hives after being
                scratched by a cat.
              </p>
              <Element name="Diagnosing Cat Allergies">
                <h3 className="allergy-section-title">
                  Diagnosing Cat Allergies
                </h3>
              </Element>
              <p className="allergy-section-paragraph">
                If you suspect that you are allergic to cats, see an allergist
                for proper diagnosis and treatment.
              </p>
              <p className="allergy-section-paragraph">
                A skin-prick test is the most common way of diagnosing a cat
                allergy. For this test, a small amount of an extract of cat
                allergen is placed on your skin. Your skin is then pricked with
                a small, sterile probe, allowing the liquid to seep under the
                skin’s surface. You’ll then be monitored for swelling and
                redness or other signs of a reaction, signaling an allergy.
                Results typically become evident within 15 to 20 minutes.
              </p>
              <p className="allergy-section-paragraph">
                Even if you’re sure your symptoms are caused by a cat, it’s a
                good idea to be tested, since the symptoms may actually be
                caused by other environmental exposures.
              </p>
              <Element name="Cat Allergy Management and Treatment">
                <h3 className="allergy-section-title">
                  Cat Allergy Management and Treatment
                </h3>
              </Element>
              <p className="allergy-section-paragraph">
                Avoidance is the best way to manage a cat allergy. If you have a
                cat and are allergic to cats, consider removing the cat from the
                home.
              </p>
              <p className="allergy-section-paragraph">
                If you have a cat but don’t want to find it a new home, or if
                your family wants a cat even though someone in the household is
                allergic, here are some strategies that may help keep symptoms
                at bay:
              </p>
              <ul className="allergy-section-list">
                <li>
                  Keep the cat out of your bedroom and restrict it to only a few
                  rooms. Be advised that keeping the cat in only one room will
                  not limit the allergens to that room.
                </li>
                <li>
                  Don’t pet, hug or kiss the cat; if you do, wash your hands
                  with soap and water.
                </li>
                <li>
                  High-efficiency particulate air (HEPA) cleaners run
                  continuously in a bedroom or living room can reduce allergen
                  levels over time.
                </li>
                <li>
                  Regular use of a high-efficiency vacuum cleaner or a central
                  vacuum can reduce allergen levels.
                </li>
                <li>
                  Giving your cat a bath at least once a week can reduce
                  airborne cat allergen.
                </li>
              </ul>
              <p className="allergy-section-paragraph">
                Treatments for cat allergy vary, depending on the symptoms.
              </p>
              <p className="allergy-section-paragraph">
                Your allergist can help determine what treatment would be best
                to treat your cat allergy. Nasal symptoms often are treated with
                steroid nasal sprays, oral antihistamines or other oral
                medications. Eye symptoms are often treated with antihistamine
                eyedrops. Respiratory or asthma symptoms can be treated with
                inhaled corticosteroids or bronchodilators to either prevent or
                relieve respiratory symptoms.
              </p>
              <p className="allergy-section-paragraph">
                Allergy shots (immunotherapy) are an effective treatment of
                allergies by building tolerance over time through gradually
                injecting increasing doses of an allergen.
              </p>
              <h4 className="allergy-section-mid-title">
                Is there an allergy-free cat?
              </h4>
              <p className="allergy-section-paragraph">
                Cats produce multiple allergens (proteins that can cause
                allergy). These allergens are found on the fur and skin and in
                saliva. All cats produce allergens; studies have not shown that
                cats can be hypoallergenic. Homes with more than one cat have
                higher levels of cat allergens. Characteristics such as the
                length of a cat’s hair, its sex and the amount of time a cat
                spends indoors are not associated with cat allergen levels.
              </p>
              <Element name="Dog Allergy">
                <h3 className="allergy-section-title">
                  Dog Allergy
                </h3>
              </Element>
              <p className="allergy-section-paragraph">
                If your nose runs or you start sneezing and wheezing after
                petting or playing with a dog, you may be allergic to dogs.
              </p>
              <p className="allergy-section-paragraph">
                Dogs produce multiple allergens, or proteins that can cause
                allergy. These allergens are found in dog hair, dander, saliva
                and urine. All dogs produce allergens; studies have not shown
                that dogs can be hypoallergenic (not cause allergy). Dog
                allergen levels increase if the dog lives indoors and are higher
                in the rooms where a dog is allowed.
              </p>
              <p className="allergy-section-paragraph">
                Dust and pollen in a dog’s coat can also cause allergy symptoms.
                In those cases, the allergy is to dust or pollen, not to the
                dog.
              </p>
              <iframe width={iframeQuery.matches ? '100%' : 560} height="315"
                      src="https://www.youtube.com/embed/qqGq_KHHbTc"
                      frameBorder="0" allow="autoplay; encrypted-media"
                      allowFullScreen></iframe>
              <Element name="Dog Allergy Symptoms">
                <h3 className="allergy-section-title">
                  Dog Allergy Symptoms
                </h3>
              </Element>
              <p className="allergy-section-paragraph">
                Dog allergy symptoms range from mild to severe, depending on an
                individual’s sensitivity and the level of exposure to allergens.
                Those variables also may influence how quickly symptoms develop
                after exposure. Highly sensitive people can develop symptoms,
                including breathing problems or a rash, within minutes of
                touching a dog or entering a house with a dog.
              </p>
              <p className="allergy-section-paragraph">
                Symptoms may include:
              </p>
              <ul className="allergy-section-list">
                <li>
                  Sneezing or a runny or stuffy nose
                </li>
                <li>
                  Facial pain (from nasal congestion)
                </li>
                <li>
                  Coughing, chest tightness, shortness of breath, and wheezing
                </li>
                <li>
                  Watery, red or itchy eyes
                </li>
                <li>
                  Skin rash or hives
                </li>
              </ul>
              <p className="allergy-section-paragraph">
                Some people may also develop a rash or hives after being
                scratched or licked by a dog.
              </p>
              <Element name="Diagnosing Dog Allergies">
                <h3 className="allergy-section-title">
                  Diagnosing Dog Allergies
                </h3>
              </Element>
              <p className="allergy-section-paragraph">
                If you suspect that you are allergic to dogs, see an allergist
                for proper diagnosis and treatment.
              </p>
              <p className="allergy-section-paragraph">
                A skin-prick test is the most common way of diagnosing a dog
                allergy. For this test, a small amount of an extract of dog
                allergen is placed on your skin. Your skin is then pricked with
                a small, sterile probe, allowing the liquid to seep under the
                skin’s surface. You’ll then be monitored for swelling and
                redness or other signs of a reaction, signaling an allergy.
                Results typically become evident within 15 to 20 minutes.
              </p>
              <p className="allergy-section-paragraph">
                Even if you’re sure your symptoms are caused by a dog, it’s a
                good idea to be tested, since the symptoms may actually be
                caused by other environmental exposures.
              </p>
              <Element name="Dog Allergy Management and Treatment">
                <h3 className="allergy-section-title">
                  Dog Allergy Management and Treatment
                </h3>
              </Element>
              <p className="allergy-section-paragraph">
                Avoidance is the best way to manage a dog allergy. If you have a
                dog and are allergic to dogs, consider removing the dog from the
                home.
              </p>
              <p className="allergy-section-paragraph">
                If you have a dog but don’t want to find it a new home, or if
                your family wants a dog even though someone in the household is
                allergic, here are some strategies that may help keep symptoms
                at bay:
              </p>
              <ul className="allergy-section-list">
                <li>
                  Keep the dog out of your bedroom and restrict it to only a few
                  rooms. Be advised that keeping the dog in only one room will
                  not limit the allergens to that room.
                </li>
                <li>
                  Don’t pet, hug or kiss the dog; if you do, wash your hands
                  with soap and water.
                </li>
                <li>
                  High-efficiency particulate air (HEPA) cleaners run
                  continuously in a bedroom or living room can reduce allergen
                  levels over time.
                </li>
                <li>
                  Regular use of a high-efficiency vacuum cleaner or a central
                  vacuum can reduce allergen levels.
                </li>
                <li>
                  Giving your dog a bath at least once a week can reduce
                  airborne dog allergen.
                </li>
              </ul>
              <p className="allergy-section-paragraph">
                Treatments for dog allergy vary, depending on the symptoms.
              </p>
              <p className="allergy-section-paragraph">
                Your allergist can help determine what treatment would be best
                to treat your dog allergy. Nasal symptoms are often treated with
                steroid nasal sprays, oral antihistamines or other oral
                medications. Eye symptoms are often treated with antihistamine
                eyedrops. Respiratory or asthma symptoms can be treated with
                inhaled corticosteroids or bronchodilators to either prevent or
                relieve respiratory symptoms.
              </p>
              <p className="allergy-section-paragraph">
                Allergy shots (immunotherapy) are an effective treatment of
                allergies by building tolerance over time through gradually
                injecting increasing doses of an allergen.
              </p>
              <h4 className="allergy-section-mid-title">
                Is there an allergy-free dog?
              </h4>
              <p className="allergy-section-paragraph">
                While poodles, Portuguese water dogs and a number of other
                breeds (including several types of terriers) have a reputation
                for being hypoallergenic, a truly allergy-free breed does not
                exist. A 2011 study compared dust samples from homes with dog
                breeds reported to be hypoallergenic and those of homes with
                other dogs. The levels of dog allergen in homes with
                “hypoallergenic” dogs did not differ from the levels in homes
                with other breeds.
              </p>
            </div>
          </div>
        </div>
    );
  }
}

export default PetAllergies;

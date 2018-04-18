import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as Scroll from 'react-scroll';
import { Anchor, Button } from 'antd';
const ScrollLink = Scroll.Link;
const Element = Scroll.Element;
const Events = Scroll.Events;
const scrollSpy = Scroll.scrollSpy;

class DustAllergy extends Component {
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
    selectedArray.push(this.props.dustAllergy._id);

    return (
        <div className={this.state.mainClassName}>
          <h1 className="page-header">
            Dust allergy
          </h1>
          <div className="allergy-create-group-button">
            <Button type='primary'
                    size="large"
                    onClick={() => {
                      this.props.onConfirmSelectionOneAllergy(
                          selectedArray);
                      this.props.onSelect(this.props.dustAllergy._id);
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
                              hashSpy={true}
                              duration={500}
                              isDynamic={true}>
                    Overview
                  </ScrollLink>
                </div>
                <div className="ant-anchor-link">
                  <ScrollLink to="Triggers"
                              offset={mediaQuery.matches ? -120 : -50}
                              spy={true}
                              smooth={true}
                              hashSpy={true}
                              duration={500}
                              isDynamic={true}>
                    Triggers
                  </ScrollLink>
                </div>
                <div className="ant-anchor-link">
                  <ScrollLink to="Treatment"
                              offset={mediaQuery.matches ? -120 : -50}
                              spy={true}
                              smooth={true}
                              hashSpy={true}
                              duration={500}
                              isDynamic={true}>
                    Treatment
                  </ScrollLink>
                </div>
                <div className="ant-anchor-link">
                  <ScrollLink to="Management"
                              offset={mediaQuery.matches ? -120 : -50}
                              spy={true}
                              smooth={true}
                              hashSpy={true}
                              duration={500}
                              isDynamic={true}>
                    Management
                  </ScrollLink>
                </div>
                <div className="ant-anchor-link">
                  <ScrollLink to="Medications"
                              offset={mediaQuery.matches ? -120 : -50}
                              spy={true}
                              smooth={true}
                              hashSpy={true}
                              duration={500}
                              isDynamic={true}>
                    Medications
                  </ScrollLink>
                </div>
                <div className="ant-anchor-link">
                  <ScrollLink to="FAQs"
                              offset={mediaQuery.matches ? -120 : -50}
                              spy={true}
                              smooth={true}
                              hashSpy={true}
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
                Dust mites are microscopic organisms that feed off of house dust
                and the moisture in the air. They are one of the most common
                indoor allergens, and symptoms can be present year round. In
                addition to allergic rhinitis, dust mite allergy can also
                trigger asthma and flares of eczema. People with dust mite
                allergies often suffer the most inside their own homes or in
                other people’s homes. Oddly enough, their symptoms often worsen
                during or immediately after vacuuming, sweeping and dusting. The
                process of cleaning can stir up dust particles, making them
                easier to inhale.
              </p>
              <p className="allergy-section-paragraph">
                People with dust mite allergies often suffer the most inside
                their own homes or in other people’s homes. Oddly enough, their
                symptoms often worsen during or immediately after vacuuming,
                sweeping and dusting. The process of cleaning can stir up dust
                particles, making them easier to inhale.
              </p>
              <h4 className="allergy-section-mid-title">
                Dust Allergy Symptoms
              </h4>
              <ul className="allergy-section-list">
                <li>
                  Sneezing
                </li>
                <li>
                  Runny or stuffy nose
                </li>
                <li>
                  Red, itchy or teary eyes
                </li>
                <li>
                  Wheezing, coughing, tightness in the chest and shortness of
                  breath
                </li>
                <li>
                  Itching
                </li>
              </ul>
              <h4 className="allergy-section-mid-title">
                Dust Allergy Triggers
              </h4>
              <ul className="allergy-section-list">
                <li>
                  Dust mites
                </li>
                <li>
                  Cockroaches
                </li>
                <li>
                  Mold
                </li>
                <li>
                  Pollen
                </li>
                <li>
                  Pet hair, fur or feathers
                </li>
              </ul>
              <p className="allergy-section-paragraph">
                For more information on dust allergy triggers
                <ScrollLink to="Triggers"
                            offset={mediaQuery.matches ? -120 : -50}
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            duration={500}
                            isDynamic={true}>
                  &nbsp;click here
                </ScrollLink>
                .
              </p>
              <h4 className="allergy-section-mid-title">
                Dust Mite Allergy Management and Treatment
              </h4>
              <p className="allergy-section-paragraph">
                Make changes to your home and to your behavior.
              </p>
              <ul className="allergy-section-list">
                <li>
                  Remove wall-to-wall carpets, curtains, and drapes particularly
                  in the bedroom.
                </li>
                <li>
                  Keep pets out of the bedroom, and preferably out of the house.
                </li>
                <li>
                  Minimize household humidity.
                </li>
                <li>
                  Use “mite-proof” cases on mattresses and pillows; wash bed
                  linens frequently in hot water.
                </li>
                <li>
                  Wear a mask when cleaning
                </li>
                <li>
                  Keep the relative humidity in your home less than 50%
                </li>
              </ul>
              <p className="allergy-section-paragraph">
                For more information on dust allergy management
                <ScrollLink to="Management"
                            offset={mediaQuery.matches ? -120 : -50}
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            duration={500}
                            isDynamic={true}>
                  &nbsp;click here
                </ScrollLink>
                .
              </p>
              <p className="allergy-section-paragraph">
                Find an allergist who can help diagnose your symptoms, identify
                their cause and suggest appropriate medications or therapies.
              </p>
              <Element name="Triggers">
                <h3 className="allergy-section-title">
                  Triggers
                </h3>
              </Element>
              <p className="allergy-section-paragraph">
                Dust mites. Dust mites – sometimes called bed mites – are the
                most common cause of allergy from house dust. Dust mites live
                and multiply easily in warm, humid places. They prefer
                temperatures at or above 70 degrees Fahrenheit with humidity of
                75 to 80 percent. They die when the humidity falls below 50
                percent. They are not usually found in dry climates.
              </p>
              <p className="allergy-section-paragraph">
                Dust mite particles are often found in pillows, mattresses,
                carpeting and upholstered furniture. They float into the air
                when anyone vacuums, walks on a carpet or disturbs bedding and
                they settle once the disturbance is over.
              </p>
              <p className="allergy-section-paragraph">
                Dust mites are a common cause of asthma in children.
              </p>
              <p className="allergy-section-paragraph">
                A house does not need to be visibly dirty to trigger a dust mite
                allergy reaction. The particles are too tiny to be seen and
                often cannot be removed using normal cleaning procedures. In
                fact, a vigorous cleaning can make an allergic person’s symptoms
                worse.
              </p>
              <p className="allergy-section-paragraph">
                Cockroaches. Cockroaches live in all types of buildings and
                neighborhoods. Some people develop allergy symptoms when they
                are around cockroaches. Tiny particles from the cockroach are a
                common component of household dust and may be the true cause of
                a dust allergy.
              </p>
              <p className="allergy-section-paragraph">
                Mold. Mold is a fungus that makes spores that float in the air.
                When people with a mold allergy inhale the spores, they get
                allergy symptoms. There are many different kinds of mold—some
                kinds you can see, others you can’t.
              </p>
              <p className="allergy-section-paragraph">
                Molds live everywhere—on logs and on fallen leaves, and in moist
                places like bathrooms and kitchens. Tiny mold particles and
                spores are a common component of household dust and may be the
                true cause of a dust allergy.
              </p>
              <p className="allergy-section-paragraph">
                Pollen. Pollen comes from trees, grasses, flowers and weeds.
                People can be allergic to different types of pollen. For
                instance, some people are allergic to pollen from only beech
                trees; others are allergic to pollen from only certain kinds of
                grasses. Pollen is a common component of household dust and may
                be the true cause of a dust allergy.
              </p>
              <p className="allergy-section-paragraph">
                Animal hair, fur and feathers. Pets can cause problems for
                allergic patients in several ways. Their dander (skin flakes),
                saliva and urine can cause an allergic reaction, especially when
                combined with household dust. In households with birds, feathers
                and bird droppings can also become embedded in household dust
                and cause problems for people who are allergic to them.
              </p>
              <Element name="Treatment">
                <h3 className="allergy-section-title">
                  Treatment
                </h3>
              </Element>
              <p className="allergy-section-paragraph">
                If you think you may have an allergy to any of the components of
                house dust, see an allergist. To pinpoint the cause of your
                symptoms, the allergist will ask detailed questions about your
                work and home environments, family medical history, frequency
                and severity of symptoms and exposure to pets and other possible
                triggers.
              </p>
              <p className="allergy-section-paragraph">
                Sometimes the medical interview will reveal a likely culprit—for
                instance, a girl who gets a stuffy nose every time she plays
                with a friend’s cat might have an allergy to cats or to the dust
                infused with cat hair in her friend’s house.
              </p>
              <p className="allergy-section-paragraph">
                Often an allergist will need to conduct a skin test to determine
                exactly what is triggering an allergic reaction.
              </p>
              <p className="allergy-section-paragraph">
                Skin tests involve using a small, sterile probe to prick the
                skin with extracts from common allergens, such as tree pollen
                and pet dander, and observing the reaction. A positive reaction
                (a raised welt with redness around it) may indicate that you are
                allergic to that substance. Occasionally, your allergist may
                order a blood test and a skin test to confirm an allergy.
              </p>
              <p className="allergy-section-paragraph">
                After a dust allergy is identified, your allergist will
                recommend one or more of the following treatments:
              </p>
              <ul className="allergy-section-list">
                <li>
                  Medications
                </li>
                <li>
                  Allergy shots (subcutaneous immunotherapy)
                </li>
                <li>
                  Tablets (oral immunotherapy)
                </li>
                <li>
                  Changes to your household routine
                </li>
              </ul>
              <Element name="Management">
                <h3 className="allergy-section-title">
                  Management
                </h3>
              </Element>
              <p className="allergy-section-paragraph">
                To manage a dust allergy, it’s best to avoid the things most
                likely to cause an allergic reaction. Here are some simple steps
                to reduce exposure to indoor dust:
              </p>
              <ul className="allergy-section-list">
                <li>
                  Opt for wood flooring over wall-to-wall carpets when possible,
                  especially in bedrooms.
                </li>
                <li>
                  Clean your house regularly, using a central vacuum or a vacuum
                  with a HEPA filter. If you are allergic, wear an N95 filter
                  mask while dusting, sweeping or vacuuming. (It can take more
                  than two hours for the dust to settle after a thorough
                  cleaning—so, if possible, clean when the allergic patient is
                  away, and avoid cleaning the bedroom of an allergic person at
                  night.)
                </li>
                <li>
                  Use “mite-proof” cases on your mattresses and pillows. Wash
                  all bed linens regularly, using hot water.
                </li>
                <li>
                  Keep a HEPA air cleaner running in the allergic person’s
                  bedroom.
                </li>
                <li>
                  Keep pets out of the allergic person’s bedroom at all times.
                </li>
                <li>
                  Keep all unrefrigerated food covered; dispose of food waste in
                  a tightly sealed garbage can.
                </li>
                <li>
                  If cockroaches are a known problem, use roach traps and
                  schedule regular visits by a professional pest control
                  service.
                </li>
                <li>
                  Install a high-efficiency media filter with a MERV rating of
                  11 or 12 in the furnace and the air conditioning unit. Leave
                  the fan on to create a “whole house” air filter that removes
                  particulates. Change the filter at least every three months
                  (with the change of the seasons) to keep the air clean
                  year-round. Have your heating and air conditioning units
                  inspected and serviced every six months.
                </li>
                <li>
                  Get in the habit of using a hygrometer to measure the humidity
                  in your home; keep the humidity level below 55 percent. If you
                  live in a humid or sticky climate, you may find it helpful to
                  use a dehumidifier. You may use a vent fan for removing
                  moisture in bathrooms and the kitchen. Repairing all water
                  leaks will also help keep moisture away.
                </li>
              </ul>
              <Element name="Medications">
                <h3 className="allergy-section-title">
                  Medications
                </h3>
              </Element>
              <ul className="allergy-section-list">
                <li>
                  If your efforts to reduce exposure to indoor dust don’t
                  provide adequate relief, your allergist may recommend a
                  prescription or over-the-counter medication. Decongestants and
                  antihistamines are the most common allergy medications. They
                  help to reduce a stuffy nose, runny nose, sneezing and
                  itching. Other medications work by preventing the release of
                  the chemicals that cause allergic reactions. Corticosteroid
                  sprays are effective in treating inflammation in your nose.
                  Allergy shots (immunotherapy) work by gradually increasing a
                  person’s tolerance to allergy triggers. Oral immunotherapy –
                  tablets dissolved under the tongue – is also an option. The
                  first dose is given in a supervised fashion in an allergist’s
                  office, and can then be taken at home daily. Duration of
                  treatment is typically one year.
                </li>
              </ul>
              <p className="allergy-section-paragraph">
                An allergist will work with you to determine which medications
                are best for you and how often and how much of them you should
                take.
              </p>
              <Element name="FAQs">
                <h3 className="allergy-section-title">
                  FAQs
                </h3>
              </Element>
              <h4 className="allergy-section-mid-title">
                What else gets into dust that might cause allergies?
              </h4>
              <p className="allergy-section-paragraph">
                The dust in your home may contain pet hair and dander, mold or
                pollen spores, and dust mite or cockroach body parts and
                droppings, all of which are common allergens. These allergens
                can cause an allergic reaction when you inhale or come into
                contact with them.
              </p>
              <h4 className="allergy-section-mid-title">
                What are dust mites?
              </h4>
              <p className="allergy-section-paragraph">
                Dust mites are tiny creatures that frequently make their home in
                places like furniture, carpets, and bedding. They are too small
                to be seen without a microscope or magnifying glass. They have
                eight legs and are not true insects, but relatives of spiders.
              </p>
              <p className="allergy-section-paragraph">
                Dust mites feed on the flakes of skin shed by humans (and
                animals) every day. They prefer environments with 70 to 80%
                humidity, and temperatures of 68 to 77°F.
              </p>
              <h4 className="allergy-section-mid-title">
                What are the symptoms of dust mite allergy?
              </h4>
              <p className="allergy-section-paragraph">
                Some common dust mite allergy symptoms include sneezing, runny
                nose, irritated eyes, scratchy throat, coughing, wheezing, and
                shortness of breath.
              </p>
              <p className="allergy-section-paragraph">
                These same symptoms can be caused by a variety of other
                allergens as well, so consult your allergist for testing.
              </p>
              <h4 className="allergy-section-mid-title">
                How can I get rid of dust mites?
              </h4>
              <p className="allergy-section-paragraph">
                In most parts of the world, it’s impossible to completely
                eliminate dust mites from your home. However, you can take steps
                to minimize your exposure to dust mite allergens by keeping your
                home as dust-free as possible.
              </p>
              <p className="allergy-section-paragraph">
                Vacuuming and dusting are not enough to remove dust mites,
                because these creatures can live deep inside your upholstery,
                mattresses, carpets, etc. You can cover mattresses, pillows, and
                upholstered furniture with zippered dust-proof covers – the
                material of these covers is designed with pores that are too
                small for dust mites to pass through. Wash sheets, blankets and
                other bedding every week in hot water (no more than 120°F) to
                kill dust mites. Replace carpeting with hard flooring and avoid
                plush rugs, fabric draperies, and anything else that cannot
                easily be washed regularly.
              </p>
              <p className="allergy-section-paragraph">
                Use a dehumidifier to reduce the humidity in your home below
                50%, making it a less suitable environment for dust mites.
              </p>
              <p className="allergy-section-paragraph">
                Clean hard surfaces with a wet mop or cloth to avoid stirring
                dry allergens up into the air.
              </p>
              <p className="allergy-section-paragraph">
                Use HEPA filters to trap dust mites and other allergens. Change
                the filters every three months to ensure they remain effective.
              </p>
            </div>
          </div>
        </div>
    );
  }
}

export default DustAllergy;

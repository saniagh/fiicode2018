import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as Scroll from 'react-scroll';
import { Anchor, Button, Card } from 'antd';
const ScrollLink = Scroll.Link;
const Element = Scroll.Element;
const Events = Scroll.Events;
const scrollSpy = Scroll.scrollSpy;

import Modal from 'react-responsive-modal';

class DrugAllergies extends Component {
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

      let availableCommands = ['symptoms', 'diagnosis', 'management', 'faq'];

      let hash = this.props.router.route.location.hash.replace(
          '#', '');

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
    selectedArray.push(this.props.drugAllergies._id);

    let symptoms = (
        <div>
          <Element name="Symptoms">
            <h3 className="allergy-section-title">
              Symptoms
            </h3>
          </Element>
          <p className="allergy-section-paragraph">
            While you may not experience allergic symptoms the first time
            you take a drug, your body could be producing antibodies to it.
            As a result, the next time you take the drug, your immune system
            may see it as an invader, and you’ll develop symptoms as your
            body releases chemicals to defend against it.
          </p>
          <p className="allergy-section-paragraph">
            These symptoms may include:
          </p>
          <ul className="allergy-section-list">
            <li>
              Skin rash or hives
            </li>
            <li>
              Itching
            </li>
            <li>
              Wheezing or other breathing problems
            </li>
            <li>
              Swelling
            </li>
            <li>
              Vomiting
            </li>
            <li>
              Feeling dizzy or light-headed
            </li>
            <li>
              Anaphylaxis, a potentially life-threatening reaction that can
              impair breathing and send the body into shock; reactions may
              simultaneously affect two or more organ systems (for example,
              when there is both a rash and difficulty breathing)
            </li>
          </ul>
          <p className="allergy-section-paragraph">
            Penicillin causes most allergic drug symptoms. Just because you
            show allergic symptoms after taking penicillin doesn’t mean that
            you will react to related drugs, such as amoxicillin, but it’s
            more likely. Also, just because you had a reaction to penicillin
            (or any other drug) at one time doesn’t mean you will have the
            same reaction in the future.
          </p>
          <p className="allergy-section-paragraph">
            Antibiotics that contain sulfa drugs, such as Septra and Bactrim
            (sulfamethoxazole-trimethoprim) and Pediazole
            (erythromycin-sulfisoxazole), occasionally cause allergic
            reactions. Nonantibiotic drugs containing sulfa are very
            low-risk.
          </p>
        </div>
    );

    let diagnosis = (
        <div>
          <Element name="Diagnosing">
            <h3 className="allergy-section-title">
              Diagnosing
            </h3>
          </Element>
          <p className="allergy-section-paragraph">
            Drug allergies can be hard to diagnose. An allergy to
            penicillin-type drugs is the only one that can be definitively
            diagnosed through a skin test. Some allergic reactions to drugs
            - particularly rashes, hives and asthma - can resemble certain
            diseases.
          </p>
          <p className="allergy-section-paragraph">
            Your allergist will want to know the answers to these questions:
          </p>
          <ul className="allergy-section-list">
            <li>
              What drug do you suspect caused your reaction?
            </li>
            <li>
              When did you start taking it, and have you stopped taking it?
            </li>
            <li>
              How long after you took the drug did you notice symptoms, and
              what did you experience?
            </li>
            <li>
              How long did your symptoms last, and what did you do to
              relieve them?
            </li>
            <li>
              What other medications, both prescription and
              over-the-counter, do you take?
            </li>
            <li>
              Do you consume herbal medications or take vitamin or mineral
              supplements? If so, which ones?
            </li>
          </ul>
          <p className="allergy-section-paragraph">
            Your allergist will also want to know whether you have had a
            reaction to any other drug. If you can, bring the suspected drug
            with you. This will help the allergist recommend alternatives as
            needed.
          </p>
          <p className="allergy-section-paragraph">
            During a physical examination, your allergist will look for
            problems that are part of the drug reaction, along with
            nonallergic reasons for the reaction
          </p>
          <p className="allergy-section-paragraph">
            Depending on the drug suspected of causing the reaction, your
            allergist may suggest a skin test or, in limited instances, a
            blood test. A blood test may be helpful in diagnosing a severe
            delayed reaction, particularly if your physician is concerned
            that multiple organ systems may be involved. This rare reaction
            is known as “drug rash with eosinophilia and systemic symptoms”
            or, more commonly, “DRESS syndrome.”
          </p>
          <p className="allergy-section-paragraph">
            If a drug allergy is suspected, your allergist may also
            recommend an oral drug challenge, in which you will be
            supervised by medical staff as you take the drug suspected of
            triggering a reaction. (If your reaction was severe, a drug
            challenge may be considered too dangerous.)
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
            If you have a drug allergy:
          </p>
          <ul className="allergy-section-list">
            <li>
              Make sure all of your doctors are aware of your allergy and
              the symptoms you experienced.
            </li>
            <li>
              Ask about related drugs that you should avoid.
            </li>
            <li>
              Ask about alternatives to the drug that caused your allergic
              reaction.
            </li>
            <li>
              Wear an emergency medical alert bracelet or necklace that
              identifies your allergy.
            </li>
          </ul>
          <h4 className="allergy-section-mid-title">
            Anaphylaxis
          </h4>
          <p className="allergy-section-paragraph">
            Anaphylaxis is a severe, potentially life-threatening reaction
            that can simultaneously affect two or more organ systems (for
            instance, when there is both swelling and difficulty breathing,
            or vomiting and hives). If this occurs, call 911 and seek
            emergency medical care immediately.
          </p>
          <p className="allergy-section-paragraph">
            If you are caring for someone who appears to be having a severe
            reaction to a drug, tell the emergency care team what drug was
            taken, when it was taken and what the dosage was.
          </p>
          <p className="allergy-section-paragraph">
            If your allergic reaction to a drug is not life-threatening,
            your allergist may give you:
          </p>
          <ul className="allergy-section-list">
            <li>
              An antihistamine to counteract the allergic reaction
            </li>
            <li>
              A nonsteroidal anti-inflammatory drug, such as ibuprofen or
              aspirin, or a corticosteroid to reduce inflammation
            </li>
          </ul>
          <h4 className="allergy-section-mid-title">
            Drug desensitization
          </h4>
          <p className="allergy-section-paragraph">
            If there is no suitable alternative to the antibiotic that you
            are allergic to, you will need to undergo drug desensitization.
            This involves taking the drug in increasing amounts until you
            can tolerate the needed dose with minimal side effects. This
            will most likely be done in a hospital so immediate medical care
            is available if problems develop.
          </p>
          <p className="allergy-section-paragraph">
            Desensitization can help only if you are taking the drug every
            day. Once you stop it – for example, when a chemotherapy cycle
            ends – you will need to go through desensitization a second time
            if you need the drug again.
          </p>
          <h4 className="allergy-section-mid-title">
            Penicillin Allergy
          </h4>
          <p className="allergy-section-paragraph">
            Nearly everyone knows someone who says they are allergic to
            penicillin. Up to 10 percent of people report being allergic to
            this widely used class of antibiotic, making it the most
            commonly reported drug allergy. Over time, however, the vast
            majority of people who once had a severe allergic reaction to
            penicillin lose sensitivity and can be treated safely with the
            drug (although 10 percent of individuals will remain allergic).
          </p>
          <p className="allergy-section-paragraph">
            Penicillin, famously discovered by Alexander Fleming in 1928, is
            prescribed today to treat a variety of conditions, such as strep
            throat. Despite its efficacy, some people steer clear of
            penicillin for fear of experiencing an allergic reaction to the
            medication.
          </p>
          <p className="allergy-section-paragraph">
            Understanding penicillin allergies is important for a variety of
            reasons. For certain conditions, penicillin is the best (or only
            proven) therapy. Some patients need penicillin because they are
            allergic to other types of antibiotics. Allergists, experts in
            the treatment and diagnosis of allergies and asthma, may want to
            know if childhood allergic reactions persist in their adult
            patients, to establish more complete medical histories and
            treatment options.
          </p>
          <h4 className="allergy-section-mid-title">
            Penicillin Allergy Symptoms
          </h4>
          <p className="allergy-section-paragraph">
            Mild to moderate allergic reactions to penicillin are common,
            and symptoms may include any of the following:
          </p>
          <ul className="allergy-section-list">
            <li>
              Hives (raised, extremely itchy spots that come and go over a
              period of hours)
            </li>
            <li>
              Tissue swelling under the skin, typically around the face
              (also known as angioedema)
            </li>
            <li>
              Throat tightness
            </li>
            <li>
              Wheezing
            </li>
            <li>
              Coughing
            </li>
            <li>
              Trouble breathing
            </li>
          </ul>
          <p className="allergy-section-paragraph">
            A less common but more serious, sudden-onset allergic reaction
            to penicillin is anaphylaxis, which occurs in highly sensitive
            patients. Anaphylaxis occurs suddenly, can worsen quickly and
            can be deadly. Symptoms of anaphylaxis might include not only
            skin symptoms, but also any of the following:
          </p>
          <ul className="allergy-section-list">
            <li>
              Tightness in the chest and difficulty breathing
            </li>
            <li>
              Swelling of the tongue, throat, nose and lips
            </li>
            <li>
              Dizziness and fainting or loss of consciousness, which can
              lead to shock and heart failure
            </li>
          </ul>
          <p className="allergy-section-paragraph">
            These symptoms require immediate attention at the nearest
            Emergency Room. Epinephrine, the therapy of choice, will be
            given in this urgent care setting, but should also be
            self-administered via autoinjector as soon as possible by
            patients who have already been prescribed and are wisely
            carrying this device.
          </p>
          <h4 className="allergy-section-mid-title">
            Penicillin Allergy Testing and Diagnosis
          </h4>
          <p className="allergy-section-paragraph">
            An allergist can help you evaluate the safety of taking
            penicillin.
          </p>
          <p className="allergy-section-paragraph">
            In addition to assessing your detailed history about a prior
            allergic reaction to penicillin, allergists administer skin
            tests to determine if a person is or remains allergic to the
            medication. These tests, which are conducted in an office or a
            hospital setting, typically take about two to three hours,
            including the time needed after testing to watch for reactions.
          </p>
          <p className="allergy-section-paragraph">
            When safely and properly administered, skin tests involve
            pricking the skin, injecting a weakened form of the drug, and
            observing the patients reaction. People who pass penicillin skin
            tests by reacting negatively to the injection are seen as at low
            risk for an immediate acute reaction to the medication. The
            allergist might then give these individuals a single,
            full-strength oral dose to confirm the absence of a penicillin
            allergy.
          </p>
          <p className="allergy-section-paragraph">
            Those with positive allergy skin tests should avoid penicillin
            and be treated with a different antibiotic. If penicillin is
            recommended, people in some cases can undergo penicillin
            desensitization to enable them to receive the medication in a
            controlled manner under the care of an allergist.
          </p>
          <h4 className="allergy-section-mid-title">
            Penicillin Allergy Treatment
          </h4>
          <p className="allergy-section-paragraph">
            Those who have severe reactions to penicillin should seek
            emergency care, which may include an epinephrine injection and
            treatment to maintain blood pressure and normal breathing.
          </p>
          <p className="allergy-section-paragraph">
            Individuals who have milder reactions and suspect that an
            allergy to penicillin is the cause may be treated with
            antihistamines or, in some cases, oral or injected
            corticosteroids, depending on the reaction. Visit an allergist
            to determine the right course of treatment.
          </p>
          <p className="allergy-section-paragraph">
            For more medical information, contact an allergist in your area.
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
            How long does it take to have an allergic reaction to a drug?
          </h4>
          <p className="allergy-section-paragraph">
            The time varies from person to person. Some people may react
            right away, while others might take the drug several times
            before they have an allergic reaction. Most of the time symptoms
            will appear between 1-2 hours after taking the drug unless you
            have a more rare, delayed type reaction. Symptoms of these less
            common drug allergies include fever, blistering of the skin, and
            occasionally joint pain.
          </p>
          <h4 className="allergy-section-mid-title">
            Are drug allergy symptoms different than other allergy symptoms?
          </h4>
          <p className="allergy-section-paragraph">
            Symptoms from a drug allergy can be like other allergic
            reactions and can include hives or skin rash, itching, wheezing,
            light headedness or dizziness, vomiting and even anaphylaxis. A
            combination of these symptoms makes it much more likely that it
            is an allergy than nausea and vomiting on their own, which are
            common side effects of medications.
          </p>
          <h4 className="allergy-section-mid-title">
            What is the treatment for drug allergies?
          </h4>
          <p className="allergy-section-paragraph">
            Like most other allergies, the primary drug allergy treatment is
            avoidance. Once you find out you are allergic to a certain drug,
            your allergist will advise you to stay away from that drug. You
            will need to tell all your health care providers so you aren’t
            prescribed the drug in any situation. It’s wise to wear a
            medical alert bracelet or necklace so medical personnel will
            know you are allergic. If you have a reaction to a drug, you
            need immediate treatment. The treatment will depend on how
            severe the reaction is. If a severe life-threatening reaction,
            called anaphylaxis, occurs, use your epinephrine auto injector
            and call 112.
          </p>
          <h4 className="allergy-section-mid-title">
            What are the symptoms of a penicillin allergy?
          </h4>
          <p className="allergy-section-paragraph">
            Penicillin allergy symptoms vary, and can range from mild to
            severe. Symptoms may include hives, swelling – typically around
            the face, throat tightness, wheezing, coughing and trouble
            breathing.
          </p>
          <p className="allergy-section-paragraph">
            Anaphylaxis is a less common, more serious life-threatening
            reaction. It can come on suddenly, worsen quickly and can be
            fatal. Symptoms can include the ones listed above and any of the
            following:
          </p>
          <ul className="allergy-section-list">
            <li>
              Itching, hives, red skin rash, flushing in combination with
              other symptoms such as:
            </li>
            <li>
              Difficulty breathing and tightness in the chest
            </li>
            <li>
              Swelling of the lips, throat, tongue and face
            </li>
            <li>
              Dizziness and loss of consciousness or fainting, which could
              lead to shock
            </li>
          </ul>
          <p className="allergy-section-paragraph">
            If you experience any of these more severe symptoms, immediately
            use your epinephrine auto-injector and call 112.
          </p>
          <h4 className="allergy-section-mid-title">
            If I have a penicillin allergy, what alternative medications can
            I take?
          </h4>
          <p className="allergy-section-paragraph">
            Although penicillin is a highly effective antibiotic, there are
            many others available if you have a penicillin allergy. Your
            doctor will decide which antibiotic to prescribe based on
            several factors including the type of bacteria, how severe the
            infection is, what your previous reaction was to penicillin and
            whether you’ve been tested for penicillin allergy.
          </p>
          <h4 className="allergy-section-mid-title">
            What are the most common drug allergies?
          </h4>
          <p className="allergy-section-paragraph">
            Penicillin is the most common drug allergy. If you experience an
            allergic reaction after taking penicillin, you won’t necessarily
            have a similar reaction to related drugs such as amoxicillin.
            But it is more likely to happen. Anticonvulsant, aspirin,
            ibuprofen and chemotherapy drug allergies are also common. It’s
            possible to have a reaction to a drug at some point in your life
            and not suffer a similar reaction in the future.
          </p>
          <h4 className="allergy-section-mid-title">
            I had a penicillin allergy as a child. Will I have it for life?
          </h4>
          <p className="allergy-section-paragraph">
            Not necessarily. In fact, up to 80% of people will lose their
            penicillin allergy if they avoid the drug for 10 years. It is
            important to be tested by an allergist to determine if you still
            truly allergic.
          </p>
          <h4 className="allergy-section-mid-title">
            Is desensitization the same as no longer being allergic to a
            drug?
          </h4>
          <p className="allergy-section-paragraph">
            No, but for daily medications, desensitization only needs to be
            performed once by your allergist. If the medication is taken
            daily, your body remains desensitized. If more than 2 days pass
            between doses, your body may not “remember” the desensitized
            state, and desensitization may need to be performed again.
          </p>
        </div>
    );

    return (
        <div className={this.state.mainClassName}>
          <h1 className="page-header">
            Drug allergies
          </h1>
          <div className="allergy-create-group-button">
            <Button type='primary'
                    size="large"
                    onClick={() => {
                      this.props.onConfirmSelectionOneAllergy(
                          selectedArray);
                      this.props.onSelect(this.props.drugAllergies._id);
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
                  <ScrollLink to="Diagnosing"
                              offset={mediaQuery.matches ? -120 : -50}
                              spy={true}
                              smooth={true}
                              duration={500}
                              isDynamic={true}>
                    Diagnosing
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
                People with drug allergies may experience symptoms regardless of
                whether their medicine comes in liquid, pill or injectable form.
              </p>
              <h4 className="allergy-section-mid-title">
                Drug Allergy Symptoms
              </h4>
              <ul className="allergy-section-list">
                <li>
                  Skin rash or hives
                </li>
                <li>
                  Itching
                </li>
                <li>
                  Wheezing or other breathing problems
                </li>
                <li>
                  Swelling
                </li>
                <li>
                  Anaphylaxis, a potentially life-threatening reaction that can
                  simultaneously affect two or more organ systems (for example,
                  when there is both a rash and difficulty breathing)
                </li>
              </ul>
              <p className="allergy-section-paragraph">
                Reactions can occur in any part of your body.
              </p>
              <p className="allergy-section-paragraph">
                For more information on drug allergy symptoms
                <ScrollLink to="Symptoms"
                            offset={mediaQuery.matches ? -120 : -50}
                            spy={true}
                            smooth={true}
                            duration={500}
                            isDynamic={true}>
                  click here
                </ScrollLink>
                .
              </p>
              <h4 className="allergy-section-mid-title">
                Common Triggers of Drug Allergies
              </h4>
              <ul className="allergy-section-list">
                <li>
                  Penicillin and related antibiotics
                </li>
                <li>
                  Antibiotics containing sulfonamides (sulfa drugs)
                </li>
                <li>
                  Anticonvulsants
                </li>
                <li>
                  Aspirin, ibuprofen and other nonsteroidal anti-inflammatory
                  drugs (NSAIDs)
                </li>
                <li>
                  Chemotherapy drugs
                </li>
              </ul>
              <h4 className="allergy-section-mid-title">
                Diagnosing Drug Allergies
              </h4>
              <ul className="allergy-section-list">
                <li>
                  Skin test (accurate only for penicillin)
                </li>
                <li>
                  Drug challenge
                </li>
              </ul>
              <h4 className="allergy-section-mid-title">
                Drug Allergy Management and Treatment
              </h4>
              <ul className="allergy-section-list">
                <li>
                  Avoid triggers.
                </li>
                <li>
                  Seek immediate medical care if symptoms worsen or multiple
                  symptoms occur together (anaphylaxis).
                </li>
                <li>
                  Make sure that all of your health care providers, including
                  your pharmacist, are aware of your allergy. If you have a
                  history of anaphylaxis, wear a medical alert bracelet that
                  lists your trigger.
                </li>
              </ul>
              <p className="allergy-section-paragraph">
                For more information on drug allergy management and treatment
                <ScrollLink to="Management and Treatment"
                            offset={mediaQuery.matches ? -120 : -50}
                            spy={true}
                            smooth={true}
                            duration={500}
                            isDynamic={true}>
                  click here.
                </ScrollLink>
                .
              </p>
              {symptoms}
              {diagnosis}
              {management}
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
              {hash === 'diagnosis' ?
                  diagnosis
                  :
                  null
              }
              {hash === 'management' ?
                  management
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

export default DrugAllergies;

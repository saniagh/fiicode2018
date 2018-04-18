import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as Scroll from 'react-scroll';
import { Anchor, Button } from 'antd';
const ScrollLink = Scroll.Link;
const Element = Scroll.Element;
const Events = Scroll.Events;
const scrollSpy = Scroll.scrollSpy;

class InsectStingAllergy extends Component {
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
    selectedArray.push(this.props.insectStingAllergy._id);

    return (
        <div className={this.state.mainClassName}>
          <h1 className="page-header">
            Insect sting allergy
          </h1>
          <div className="allergy-create-group-button">
            <Button type='primary'
                    size="large"
                    onClick={() => {
                      this.props.onConfirmSelectionOneAllergy(
                          selectedArray);
                      this.props.onSelect(this.props.insectStingAllergy._id);
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
                  <ScrollLink to="Symptoms"
                              offset={mediaQuery.matches ? -120 : -50}
                              spy={true}
                              smooth={true}
                              hashSpy={true}
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
                              hashSpy={true}
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
                              hashSpy={true}
                              duration={500}
                              isDynamic={true}>
                    Management and Treatment
                  </ScrollLink>
                </div>
                <div className="ant-anchor-link">
                  <ScrollLink to="Fire Ant Sting"
                              offset={mediaQuery.matches ? -120 : -50}
                              spy={true}
                              smooth={true}
                              hashSpy={true}
                              duration={500}
                              isDynamic={true}>
                    Fire Ant Sting
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
                Most people are not allergic to insect stings. Recognizing the
                difference between an allergic reaction and a normal reaction
                will reduce anxiety and prevent unnecessary medical expense.
              </p>
              <p className="allergy-section-paragraph">
                Thousands of people enter hospital emergency rooms or urgent
                care clinics every year suffering from insect stings. It has
                been estimated that potentially life-threatening allergic
                reactions occur in 0.4% – 0.8% of children and 3% of adults. At
                least 90 – 100 deaths per year result from insect sting
                anaphylaxis.
              </p>
              <p className="allergy-section-paragraph">
                The majority of insect stings in the United States come from
                wasps, yellow jackets, hornets and honeybees. The red or black
                imported fire ant now infests more than 260 million acres in the
                southern United States, where it has become a significant health
                hazard and may be the number one agent of insect stings.
              </p>
              <h4 className="allergy-section-mid-title">
                Insect Sting Allergy Symptoms
              </h4>
              <ul className="allergy-section-list">
                <li>
                  Pain
                </li>
                <li>
                  Redness
                </li>
                <li>
                  Swelling (in area of sting and sometimes beyond)
                </li>
                <li>
                  Flushing
                </li>
                <li>
                  Hives
                </li>
                <li>
                  Itching
                </li>
                <li>
                  Anaphylaxis (less common), a potentially life-threatening
                  reaction that may impair breathing and can cause the body to
                  go into shock
                </li>
              </ul>
              <p className="allergy-section-paragraph">
                For more information on insect sting allergy symptoms
                <ScrollLink to="Symptoms"
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
                Insect Sting Allergy Management and Treatment
              </h4>
              <ul className="allergy-section-list">
                <li>
                  Avoid insects.
                </li>
                <li>
                  Immediately inject epinephrine (adrenaline) if symptoms of
                  anaphylaxis develop.
                </li>
                <li>
                  Consider allergy shots (immunotherapy).
                </li>
              </ul>
              <p className="allergy-section-paragraph">
                For more information on insect sting allergy management and
                treatment
                <ScrollLink to="Management and Treatment"
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
              <Element name="Symptoms">
                <h3 className="allergy-section-title">
                  Symptoms
                </h3>
              </Element>
              <p className="allergy-section-paragraph">
                The severity of an insect sting reaction varies from person to
                person. A normal reaction will result in pain, swelling and
                redness confined to the sting site. You can disinfect the area
                (washing with soap and water will do) and apply ice to reduce
                the swelling.
              </p>
              <p className="allergy-section-paragraph">
                A large local reaction will result in swelling that extends
                beyond the sting site. For example, a sting on the forearm could
                result in the entire arm swelling. Although alarming in
                appearance, this condition is often treated the same as a normal
                reaction. An unusually painful or very large local reaction may
                need medical attention. Because this condition may persist for
                two to three days, antihistamines and corticosteroids are
                sometimes prescribed to lessen the discomfort.
              </p>
              <p className="allergy-section-paragraph">
                Fire ants, yellow jackets, hornets and wasps can sting
                repeatedly. Honeybees have barbed stingers that are left behind
                in their victim’s skin. These stingers are best removed by a
                scraping action, rather than a pulling motion, to avoid
                squeezing more venom into the skin.
              </p>
              <p className="allergy-section-paragraph">
                Almost everyone stung by fire ants develops an itchy, localized
                hive or lump at the sting site, which usually goes down within
                30 to 60 minutes. This is followed by a small blister within
                four hours. This usually appears to become filled with pus-like
                material by eight to 24 hours. However, what is seen is really
                dead tissue, and the blister has little chance of being infected
                unless it is opened. When healed, these lesions may leave scars.
              </p>
              <p className="allergy-section-paragraph">
                Treatment for fire ant stings is aimed at preventing secondary
                bacterial infection, which may occur if the pustule is scratched
                or broken. Clean the blisters with soap and water to prevent
                secondary infection. Do not break the blister. Topical
                corticosteroid ointments and oral antihistamines may relieve the
                itching associated with these reactions
              </p>
              <p className="allergy-section-paragraph">
                The most serious reaction to an insect sting is an allergic one.
                This condition requires immediate medical attention. Symptoms of
                an allergic reaction may include one or more of the following:
              </p>
              <ul className="allergy-section-list">
                <li>
                  Hives, itching and swelling in areas other than the sting site
                </li>
                <li>
                  Abdominal cramping, vomiting, intense nausea or diarrhea
                </li>
                <li>
                  Tightness in the chest and difficulty in breathing
                </li>
                <li>
                  Hoarse voice or swelling of the tongue or throat, or
                  difficulty swallowing
                </li>
              </ul>
              <p className="allergy-section-paragraph">
                An even more severe allergic reaction, or anaphylaxis, can occur
                within minutes after the sting and may be life-threatening. A
                dose of epinephrine (adrenaline), typically administered in an
                auto-injector, and immediate medical attention are required.
                Symptoms may include:
              </p>
              <ul className="allergy-section-list">
                <li>
                  Dizziness or a sharp drop in blood pressure
                </li>
                <li>
                  Loss of consciousness or cardiac arrest
                </li>
              </ul>
              <p className="allergy-section-paragraph">
                People who have experienced an allergic reaction to an insect
                sting have a 60% chance of a similar or worse reaction if stung
                again.
              </p>
              <Element name="Diagnosing">
                <h3 className="allergy-section-title">
                  Diagnosing
                </h3>
              </Element>
              <p className="allergy-section-paragraph">
                If you are concerned that you may have an allergy to insect
                venom, see an allergist.
              </p>
              <p className="allergy-section-paragraph">
                Your allergist should take a detailed medical history, including
                questions about previous stings (how many there have been and
                where you were stung), your reaction to those stings (what you
                experienced, how long the reaction lasted and what you did to
                get relief) and any additional symptoms.
              </p>
              <p className="allergy-section-paragraph">
                Your allergist may perform one or more tests to diagnose allergy
                to insect venom, such as a skin-prick test, an intradermal skin
                test or a blood test.
              </p>
              <p className="allergy-section-paragraph">
                In the skin-prick test, a small amount of a liquid containing
                insect venom is placed on the back or forearm, which is then
                pricked with a small, sterile probe to allow the liquid to seep
                into the skin. If a raised, reddish spot forms within 15 to 20
                minutes, that can indicate an allergy. In the blood test, a
                blood sample is sent to a laboratory to test for the presence of
                immunoglobulin E (IgE) antibodies to insect venom.
              </p>
              <p className="allergy-section-paragraph">
                If the skin prick test is negative or inconclusive your
                allergist will likely recommend an intradermal skin test, in
                which a small amount of venom extract is injected just under the
                skin. The site is examined after about 15 minutes for signs of
                an allergic reaction. This test is considered more accurate than
                the skin-prick or blood tests in determining the presence of IgE
                antibodies. If both skin prick and intradermal skin tests are
                negative then your allergist may recommend a blood test.
              </p>
              <p className="allergy-section-paragraph">
                The strength of a reaction to a skin or blood test does not
                indicate how severe your allergic reaction will be the next time
                you are stung.
              </p>
              <Element name="Management and Treatment">
                <h3 className="allergy-section-title">
                  Management and Treatment
                </h3>
              </Element>
              <p className="allergy-section-paragraph">
                Insect sting allergy is treated in a two-step approach:
              </p>
              <ul className="allergy-section-list">
                <li>
                  The first step is the emergency treatment of the symptoms of a
                  serious reaction when they occur.
                </li>
                <li>
                  The second step is preventive treatment of the underlying
                  allergy with venom immunotherapy.
                </li>
              </ul>
              <p className="allergy-section-paragraph">
                Life-threatening allergic reactions can progress very rapidly
                and require immediate medical attention. Emergency treatment
                usually includes administration of certain drugs, such as
                epinephrine, antihistamines, and in some cases, corticosteroids,
                intravenous fluids, oxygen and other treatments. Once
                stabilized, these patients sometimes require close observation
                in the hospital overnight.
              </p>
              <p className="allergy-section-paragraph">
                Injectable epinephrine for self-administration is often
                prescribed as emergency rescue medication for treating an
                allergic reaction. People who have had previous allergic
                reactions and rely on epinephrine must remember to carry it with
                them at all times. Also, because one dose may not be enough to
                reverse the reaction, recent guidelines recommend keeping two
                doses of injectable epinephrine available and to activate
                emergency medical services if used. Even if symptoms improve
                after a single dose of epinephrine, immediate medical attention
                following an insect sting is recommended.
              </p>
              <h4 className="allergy-section-mid-title">
                Venom Immunotherapy
              </h4>
              <p className="allergy-section-paragraph">
                The long-term treatment of insect sting allergy is called venom
                immunotherapy, a highly effective program administered by an
                allergist, which can prevent future allergic reactions to insect
                stings.
              </p>
              <p className="allergy-section-paragraph">
                Venom immunotherapy involves administering gradually increasing
                doses of venom to decrease a patient’s sensitivity to the venom.
                This can reduce the risk of a future allergic reaction to that
                of the general population. In a matter of weeks to months,
                people who previously lived under the constant threat of severe
                reactions to insect stings can return to leading normal lives.
              </p>
              <p className="allergy-section-paragraph">
                If you think you might be allergic to insect stings, talk to
                your allergist. Based on your past history and certain tests,
                the allergist will determine if you are a candidate for skin
                testing and immunotherapy.
              </p>
              <h4 className="allergy-section-mid-title">
                Avoiding Insect Stings
              </h4>
              <p className="allergy-section-paragraph">
                Knowing how to avoid stings from fire ants, honeybees, wasps,
                hornets and yellow jackets leads to a more enjoyable summer for
                everyone. Stinging insects are most active during the late
                spring, summer, and early fall. Insect repellents do not work
                against stinging insects.
              </p>
              <p className="allergy-section-paragraph">
                Yellow jackets will nest in the ground and in walls. Hornets and
                wasps will nest in bushes, trees and on buildings. Use extreme
                caution when working or playing in these areas. Avoid open
                garbage cans and exposed food at picnics, which attract yellow
                jackets. Also, try to reduce the amount of exposed skin when
                outdoors.
              </p>
              <p className="allergy-section-paragraph">
                Effective methods for insecticide treatment of fire ant mounds
                use attractant baits. These baits often contain soybean oil and
                corn grits combined with chemical agents. The bait is picked up
                by the worker ants and taken deeper into the mound to the queen.
                It can take weeks for these insecticides to work.
              </p>
              <p className="allergy-section-paragraph">
                Allergists recommend the following additional precautions to
                avoid insect stings:
              </p>
              <ul className="allergy-section-list">
                <li>
                  Avoid wearing sandals or walking barefoot in the grass.
                  Honeybees and bumblebees forage on white clover, a weed that
                  grows in lawns throughout the country.
                </li>
                <li>
                  Never swat at a flying insect. If need be, gently brush it
                  aside or patiently wait for it to leave.
                </li>
                <li>
                  Do not drink from open beverage cans. Stinging insects will
                  crawl inside a can attracted by the sweet beverage.
                </li>
                <li>
                  When eating outdoors, try to keep food covered at all times.
                </li>
                <li>
                  Garbage cans stored outside should be covered with
                  tight-fitting lids.
                </li>
                <li>
                  Avoid sweet-smelling perfumes, hair sprays, colognes and
                  deodorants.
                </li>
                <li>
                  Avoid wearing bright-colored clothing.
                </li>
                <li>
                  Yard work and gardening should be done with caution. Wearing
                  shoes and socks and using work gloves will prevent stings on
                  hands and feet and provide time to get away from an unexpected
                  mound.
                </li>
                <li>
                  Keep window and door screens in good repair. Drive with car
                  windows closed.
                </li>
                <li>
                  Keep prescribed medications handy at all times and follow the
                  instructions if you are stung. These medications are for
                  immediate emergency use while en route to a hospital emergency
                  room for observation and further treatment.
                </li>
              </ul>
              <p className="allergy-section-paragraph">
                If you have had an allergic reaction to an insect sting, it’s
                important that you see an allergist.
              </p>
              <Element name="Fire Ant Sting">
                <h3 className="allergy-section-title">
                  Fire Ant Sting
                </h3>
              </Element>
              <h4 className="allergy-section-mid-title">
                Fire ant sting allergy treatment
              </h4>
              <p className="allergy-section-paragraph">
                Fire ant sting allergy is treated in a two-step approach:
              </p>
              <ul className="allergy-section-list">
                <li>
                  The first step is the emergency treatment of the symptoms of a
                  serious reaction when they occur.
                </li>
                <li>
                  The second step is preventive treatment of the underlying
                  allergy with whole body extract immunotherapy.
                </li>
              </ul>
              <p className="allergy-section-paragraph">
                Life-threatening allergic reactions can progress very rapidly
                and require immediate medical attention. Emergency treatment
                usually includes administration of certain drugs, such as
                epinephrine, antihistamines, and in some cases, corticosteroids,
                intravenous fluids, oxygen and other treatments. Once
                stabilized, these patients sometimes require close observation
                in the hospital overnight.
              </p>
              <p className="allergy-section-paragraph">
                Injectable epinephrine is often prescribed as emergency rescue
                medication for treating an allergic reaction. People who have
                had previous allergic reactions and rely on epinephrine must
                remember to carry it with them at all times.
              </p>
              <p className="allergy-section-paragraph">
                Also, because one dose may not be enough to reverse the
                reaction, recent guidelines recommend keeping two doses of
                injectable epinephrine available and to activate emergency
                medical services if used. Even if symptoms improve after a
                single dose of epinephrine, immediate medical attention
                following an insect sting is recommended.
              </p>
              <h4 className="allergy-section-mid-title">
                What is a normal reaction to a fire ant sting, and how is it
                treated?
              </h4>
              <p className="allergy-section-paragraph">
                The severity of a fire ant sting reaction varies from person to
                person. One of the main differences between fire ants and other
                insects is that a usual sting event consists of multiple fire
                ants stinging. This is because when a fire ant mound is
                disturbed hundreds to thousands of fire ants respond. In
                addition, each ant can sting repeatedly. Each ant will bite and
                hold on with its mandibles (jaw) and sting several times. If not
                removed, this results in a little semi-circular pattern of
                stings. Since fire ants hold on with their mandibles, they often
                have to be pulled off individually and are not easily brushed
                off when they are stinging.
              </p>
              <p className="allergy-section-paragraph">
                Almost all people stung by fire ants develop an itchy, localized
                hive or lump at the sting site, which usually subsides within 30
                to 60 minutes. This is followed by a small blister within four
                hours. This usually appears to become filled with pus-like
                material by eight to 24 hours. However, what is seen is really
                dead tissue, and the blister has little chance of being infected
                unless it is opened. When healed, these lesions may leave scars.
              </p>
              <p className="allergy-section-paragraph">
                Fire ant sting treatment is aimed at preventing secondary
                bacterial infection, which may occur if the pustule is scratched
                or broken. Clean the blisters with soap and water to prevent
                secondary infection. Do not break the blister. If a blister is
                accidentally opened, careful attention to keeping the area clean
                with soap and water should still prevent infection. Topical
                corticosteroid ointments and oral antihistamines may relieve the
                itching associated with these reactions.
              </p>
              <h4 className="allergy-section-mid-title">
                What is whole body extract immunotherapy?
              </h4>
              <p className="allergy-section-paragraph">
                The long-term treatment of fire ant sting allergy is called
                whole body extract immunotherapy, which contains the entire body
                of the ant, not just the venom, as is the case with other
                stinging insects. It is a highly effective program administered
                by an allergist-immunologist, which can prevent future allergic
                reactions to fire ant stings. At this time, we are not able to
                isolate venom from fire ants.
              </p>
              <p className="allergy-section-paragraph">
                Whole body extract immunotherapy involves administering
                gradually increasing doses of extract to decrease a patient’s
                sensitivity to the fire ant sting. This can reduce the risk of a
                future allergic reaction to that of the general population. In a
                matter of weeks to months, people who previously lived under the
                constant threat of severe reactions to fire ant stings can
                return to leading normal lives.
              </p>
              <p className="allergy-section-paragraph">
                If you think you might be allergic to fire ant stings, see an
                allergist. Based on your past history and certain tests, the
                allergist will determine if you are a candidate for skin testing
                and immunotherapy.
              </p>
              <Element name="FAQs">
                <h3 className="allergy-section-title">
                  FAQs
                </h3>
              </Element>
              <h4 className="allergy-section-mid-title">
                What should I do if a bee stings me, and when should I see an
                allergist?
              </h4>
              <p className="allergy-section-paragraph">
                What you do about a bee or any insect sting depends on your
                body’s reaction. A normal (non-allergic) reaction involves pain
                or discomfort, as well as swelling or redness in the area where
                you were stung. If the stinger is still in your skin, remove it
                by scraping the area with a straight edge such as a credit card.
                Don’t pinch the stinger or use tweezers because that could
                release more venom. Ice the area to control swelling, and
                elevate the arm or leg, if that’s where you were stung.
                Acetaminophen or ibuprofen may help ease pain. (Do not give
                aspirin to anyone under age 19.) For itchiness, you can take an
                antihistamine, ice the area, or apply calamine lotion. Though
                “normal” reactions are not considered life-threatening, avoiding
                a future sting is usually a good idea.
              </p>
              <p className="allergy-section-paragraph">
                The second type of response is like the first type of
                non-allergic reaction. However, it is a larger local reaction
                that causes swelling, generally more than 3 inches, around the
                sting. For example, a sting on the front of your arm could cause
                your whole arm to swell. Remove the stinger and treat the
                swelling, pain, and itch with a combination of ice, elevation
                and antihistamines. The swelling usually peaks two to three days
                after the sting and can last a week or more. Like the first
                reaction, this is not life-threatening. However, you may have
                considerable pain and swelling that lasts for days in the area
                you were stung.
              </p>
              <p className="allergy-section-paragraph">
                The last, and most dangerous response is a severe allergic or
                anaphylactic, life-threatening reaction. It is the most serious
                and needs immediate medical attention. Symptoms range from mild
                hives or itching, to severe reactions, including shock or airway
                constriction, which can be life-threatening. If you know you
                have a severe allergy to an insect sting, you should always
                carry your epinephrine auto injector (EAI) and be evaluated by
                an allergist skilled in the management of insect allergy. If you
                are stung, use your EAI, call 911 and get to the nearest
                emergency facility at the first sign of anaphylaxis, even if you
                have already administered epinephrine.
              </p>
              <h4 className="allergy-section-mid-title">
                How do I know if I’ve had an allergic reaction to an insect
                sting?
              </h4>
              <p className="allergy-section-paragraph">
                Symptoms of an allergic reaction can range from mild to severe.
                They may include the following (either alone or in combination):
              </p>
              <ul className="allergy-section-list">
                <li>
                  Hives
                </li>
                <li>
                  Itchiness
                </li>
                <li>
                  Flushing
                </li>
                <li>
                  Swelling in areas away from the sting
                </li>
                <li>
                  Dizziness or a sharp drop in blood pressure
                </li>
                <li>
                  A hoarse voice, coughing, swelling of the tongue or difficulty
                  swallowing
                </li>
                <li>
                  Hives, itching and swelling in areas other than the sting site
                </li>
                <li>
                  Abdominal cramping, vomiting, intense nausea or diarrhea
                </li>
                <li>
                  Unconsciousness or cardiac arrest
                </li>
                <li>
                  Anaphylaxis is a severe life-threatening allergic reaction
                  that impairs breathing, causes a sudden drop in blood pressure
                  and can send the body into shock. It can occur within minutes
                  of a sting. A dose of epinephrine (adrenaline), typically
                  administered in an auto-injector, and immediate medical
                  attention are required.
                </li>
              </ul>
              <h4 className="allergy-section-mid-title">
                Who is affected by allergies to insect stings?
              </h4>
              <p className="allergy-section-paragraph">
                Allergic reactions to stings can occur even after many normal
                reactions to stings, and at any age. Estimates show that
                potentially life-threatening allergic reactions to insect venom
                occur in 0.4 percent to 0.8 percent of children and 3 percent of
                adults.
              </p>
              <h4 className="allergy-section-mid-title">
                Can I get rid of my insect sting allergy?
              </h4>
              <p className="allergy-section-paragraph">
                Yes. For long-term protection, an allergist can treat you with
                allergy shots (immunotherapy), which builds tolerance over time
                and provides up to 98% protection if you get stung again. In
                addition to reducing the risk of systemic reaction to future
                stings, venom immunotherapy significantly improves quality of
                life. This is especially true for active individuals where jobs
                or recreational activities take them outdoors. The length of
                venom immunotherapy is usually three to five years, but it can
                be continued indefinitely depending on how severe past reactions
                have been, and the risk of future stings.
              </p>
              <h4 className="allergy-section-mid-title">
                Do I need to have an epinephrine auto-injector?
              </h4>
              <p className="allergy-section-paragraph">
                It depends on your risk factors including your history of
                reaction to an insect sting. Your allergist will determine if
                you are at high risk of a severe allergic reaction and prescribe
                an epinephrine auto-injector if needed.
              </p>
            </div>
          </div>
        </div>
    );
  }
}

export default InsectStingAllergy;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as Scroll from 'react-scroll';
import { Anchor, Button } from 'antd';
const ScrollLink = Scroll.Link;
const Element = Scroll.Element;
const Events = Scroll.Events;
const scrollSpy = Scroll.scrollSpy;

class AllergicRhinitis extends Component {
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
    selectedArray.push(this.props.allergicRhinitis._id);

    return (
        <div className={this.state.mainClassName}>
          <h1 className="page-header">
            Allergic Rhinitis
          </h1>
          <div className="allergy-create-group-button">
            <Button type='primary'
                    size="large"
                    onClick={() => {
                      this.props.onConfirmSelectionOneAllergy(
                          selectedArray);
                      this.props.onSelect(this.props.allergicRhinitis._id);
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
                  <ScrollLink to="Occupational Rhinitis"
                              offset={mediaQuery.matches ? -120 : -50}
                              spy={true}
                              smooth={true}
                              duration={500}
                              isDynamic={true}>
                    Occupational Rhinitis
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
                If you sneeze a lot, if your nose is often runny or stuffy, or
                if your eyes, mouth or nose often feel itchy, you may have
                allergic rhinitis, a condition that affects 40 million to 60
                million Americans.
              </p>
              <p className="allergy-section-paragraph">
                Allergic rhinitis develops when the body’s immune system becomes
                sensitized and overreacts to something in the environment that
                typically causes no problem in most people.
              </p>
              <p className="allergy-section-paragraph">
                Allergic rhinitis is commonly known as hay fever. But you don’t
                have to be exposed to hay to have symptoms. And contrary to what
                the name suggests, you don’t have to have a fever to have hay
                fever.
              </p>
              <p className="allergy-section-paragraph">
                Allergic rhinitis takes two different forms:
              </p>
              <ul className="allergy-section-list">
                <li>
                  Seasonal: Symptoms of seasonal allergic rhinitis can occur in
                  spring, summer and early fall. They are usually caused by
                  allergic sensitivity to airborne mold spores or to pollens
                  from grass, trees and weeds.
                </li>
                <li>
                  Perennial: People with perennial allergic rhinitis experience
                  symptoms year-round. It is generally caused by dust mites, pet
                  hair or dander, cockroaches or mold. Underlying or hidden food
                  allergies rarely cause perennial nasal symptoms.
                </li>
              </ul>
              <p className="allergy-section-paragraph">
                Some people may experience both types of rhinitis, with
                perennial symptoms getting worse during specific pollen seasons.
                There are also nonallergic causes for rhinitis including
                irritants such as cigarette or other smoke, perfumes, cleaning
                products and other strong odors.
              </p>
              <h4 className="allergy-section-mid-title">
                Hay Fever Symptoms
              </h4>
              <ul className="allergy-section-list">
                <li>
                  Runny nose
                </li>
                <li>
                  Itchy eyes, mouth or skin
                </li>
                <li>
                  Sneezing
                </li>
                <li>
                  Stuffy nose due to blockage or congestion
                </li>
                <li>
                  Fatigue (often reported due to poor quality sleep as a result
                  of nasal obstruction)
                </li>
              </ul>
              <p className="allergy-section-paragraph">
                For more information on hay fever symptoms
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
                Hay Fever Triggers
              </h4>
              <ul className="allergy-section-list">
                <li>
                  Outdoor allergens, such as pollens from grass, trees and weeds
                </li>
                <li>
                  Indoor allergens, such as pet hair or dander, dust mites and
                  mold
                </li>
                <li>
                  Irritants, such as cigarette smoke, perfume and diesel exhaust
                </li>
              </ul>
              <h4 className="allergy-section-mid-title">
                Hay Fever Management and Treatment
              </h4>
              <p className="allergy-section-paragraph">
                Avoid triggers by making changes to your home and to your
                behavior.
              </p>
              <ul className="allergy-section-list">
                <li>
                  Keep windows closed during high pollen periods; use air
                  conditioning in your home and car.
                </li>
                <li>
                  Wear glasses or sunglasses when outdoors to keep pollen out of
                  your eyes.
                </li>
                <li>
                  Use “mite-proof” bedding covers to limit exposure to dust
                  mites and a dehumidifier to control mold. (If you smell
                  mildew, you likely have mold).
                </li>
                <li>
                  Wash your hands after petting any animal and have a
                  nonallergic person help with pet grooming, preferably in a
                  well-ventilated area or outside.
                </li>
              </ul>
              <iframe width={iframeQuery.matches ? '100%' : 560} height="315"
                      src="https://www.youtube.com/embed/jzQMys_cUos"
                      frameBorder="0" allow="autoplay; encrypted-media"
                      allowFullScreen></iframe>
              <p className="allergy-section-paragraph">
                Control some symptoms with over-the-counter medication.
              </p>
              <ul className="allergy-section-list">
                <li>
                  Decongestants
                </li>
                <li>
                  Antihistamines (eyedrops and oral medication)
                </li>
                <li>
                  Steroid nasal spray (Flonase, Rhinocort, Nasacort)
                </li>
              </ul>
              <p className="allergy-section-paragraph">
                See an allergist to help confirm your triggers and for
                prescription medications, which may be more effective.
              </p>
              <ul className="allergy-section-list">
                <li>
                  Antihistamines (eyedrops, nasal spray and oral medication)
                </li>
                <li>
                  Allergy shots (immunotherapy)
                </li>
              </ul>
              <p className="allergy-section-paragraph">
                For more information on hay fever management and treatment
                <ScrollLink to="Management and Treatment"
                            offset={mediaQuery.matches ? -120 : -50}
                            spy={true}
                            smooth={true}
                            duration={500}
                            isDynamic={true}>
                  click here
                </ScrollLink>
                .
              </p>
              <Element name="Symptoms">
                <h3 className="allergy-section-title">
                  Symptoms
                </h3>
              </Element>
              <p className="allergy-section-paragraph">
                Allergic rhinitis – commonly known as hay fever – is a group of
                symptoms affecting the nose. But don’t be misled by the name –
                you don’t have to be exposed to hay to have symptoms. And
                despite the name, it’s not usually accompanied by fever.
              </p>
              <p className="allergy-section-paragraph">
                People with allergic rhinitis generally experience symptoms
                after breathing in an allergy-causing substance such as pollen
                or dust. In the fall, a common allergen is ragweed or other weed
                pollens or outdoor mold. In the spring, the most common triggers
                are grass and tree pollen.
              </p>
              <p className="allergy-section-paragraph">
                When a sensitive person inhales an allergen, the body’s immune
                system may react with the following symptoms (listed in order of
                frequency):
              </p>
              <ul className="allergy-section-list">
                <li>
                  Stuffy nose due to blockage or congestion
                </li>
                <li>
                  Itching, usually in the nose, mouth, eyes, or throat
                </li>
                <li>
                  Puffy, swollen eyelids
                </li>
                <li>
                  Sneezing
                </li>
                <li>
                  Cough
                </li>
              </ul>
              <p className="allergy-section-paragraph">
                Symptoms also may be triggered by common irritants such as:
              </p>
              <ul className="allergy-section-list">
                <li>
                  Cigarette smoke
                </li>
                <li>
                  Strong odors, such as perfume, or hair spray and fumes
                </li>
                <li>
                  Cosmetics
                </li>
                <li>
                  Laundry detergents
                </li>
                <li>
                  Cleaning solutions, pool chlorine, car exhaust and other air
                  pollutants (i.e., ozone)
                </li>
              </ul>
              <p className="allergy-section-paragraph">
                There are two types of allergic rhinitis:
              </p>
              <ul className="allergy-section-list">
                <li>
                  Seasonal: Symptoms can occur in spring, summer and early fall.
                  They are usually caused by sensitivity to airborne mold spores
                  or to pollens from trees, grasses or weeds.
                </li>
                <li>
                  Perennial: Symptoms occur year-round and are generally caused
                  by sensitivity to dust mites, pet hair or dander, cockroaches
                  or mold.
                </li>
              </ul>
              <p className="allergy-section-paragraph">
                Allergic rhinitis can be associated with:
              </p>
              <ul className="allergy-section-list">
                <li>
                  Decreased concentration and focus
                </li>
                <li>
                  Limited activities
                </li>
                <li>
                  Decreased decision-making capacity
                </li>
                <li>
                  Impaired hand-eye coordination
                </li>
                <li>
                  Problems remembering things
                </li>
                <li>
                  Irritability
                </li>
                <li>
                  Sleep disorders
                </li>
                <li>
                  Fatigue
                </li>
                <li>
                  Missed days of work or school
                </li>
                <li>
                  More motor vehicle accidents
                </li>
                <li>
                  More school or work injuries
                </li>
              </ul>
              <p className="allergy-section-paragraph">
                Many parents of children with allergic rhinitis have said that
                their children are more moody and irritable during allergy
                season. Since children cannot always express their symptoms
                verbally, they may express their discomfort by acting up at
                school and at home. In addition, some children feel that having
                an allergy is a stigma that separates them from others.
              </p>
              <p className="allergy-section-paragraph">
                It is important that the irritability or other symptoms caused
                by ear, nose or throat trouble are not mistaken for attention
                deficit disorder. With proper treatment, symptoms can be kept
                under control and disruptions in learning and behavior can be
                avoided.
              </p>
              <p className="allergy-section-paragraph">
                Symptoms of allergic rhinitis have other causes as well, the
                most customary being the common cold — an example of infectious
                rhinitis. Most infections are relatively short-lived, with
                symptoms improving in three to seven days.
              </p>
              <p className="allergy-section-paragraph">
                Many people have recurrent or chronic nasal congestion, excess
                mucus production, itching and other nasal symptoms similar to
                those of allergic rhinitis. In those cases, an allergy may not
                be not the cause.
              </p>
              <Element name="Diagnosing">
                <h3 className="allergy-section-title">
                  Diagnosing
                </h3>
              </Element>
              <p className="allergy-section-paragraph">
                To find the most effective way to treat allergic rhinitis
                symptoms, see an allergist
              </p>
              <p className="allergy-section-paragraph">
                Your allergist may start by taking a detailed history, looking
                for clues in your lifestyle that will help pinpoint the cause of
                your symptoms. You’ll be asked, among other things, about your
                work and home environments (including whether you have a pet)
                your family’s medical history and the frequency and severity of
                your symptoms.
              </p>
              <p className="allergy-section-paragraph">
                Sometimes allergic rhinitis can be complicated by several
                medical conditions, such as a deviated septum (curvature of the
                bone and cartilage that separate the nostrils) or nasal polyps
                (abnormal growths inside the nose and sinuses). Any of these
                conditions will be made worse by catching a cold. Nasal symptoms
                caused by more than one problem can be difficult to treat, often
                requiring the cooperation of an allergist and another
                specialist, such as an otolaryngologist (ear, nose and throat
                specialist).
              </p>
              <p className="allergy-section-paragraph">
                Your allergist may recommend a skin test, in which small amounts
                of suspected allergens are introduced into your skin. Skin
                testing is the easiest, most sensitive and generally least
                expensive way of identifying allergens.
              </p>
              <h4 className="allergy-section-mid-title">
                Types of skin tests
              </h4>
              <ul className="allergy-section-list">
                <li>
                  Prick or scratch test: In this test, a tiny drop of a possible
                  allergen is pricked or scratched into the skin. Also known as
                  a percutaneous test, this is the most common type of skin
                  test. The results are known within 10 to 20 minutes.
                </li>
                <li>
                  Intradermal test: A small amount of a possible allergen is
                  injected under the skin using a thin needle. The site is
                  checked for a reaction after about 20 minutes. This test is
                  typically more sensitive than the prick or scratch test.
                </li>
              </ul>
              <Element name="Management and Treatment">
                <h3 className="allergy-section-title">
                  Management and Treatment
                </h3>
              </Element>
              <h4 className="allergy-section-mid-title">
                Avoidance
              </h4>
              <p className="allergy-section-paragraph">
                The first approach in managing seasonal or perennial forms of
                hay fever should be to avoid the allergens that trigger
                symptoms.
              </p>
              <p className="allergy-section-paragraph">
                Outdoor exposure
              </p>
              <ul className="allergy-section-list">
                <li>
                  Stay indoors as much as possible when pollen counts are at
                  their peak, usually during the midmorning and early evening
                  (this may vary according to plant pollen), and when wind is
                  blowing pollens around.
                </li>
                <li>
                  Avoid using window fans that can draw pollens and molds into
                  the house.
                </li>
                <li>
                  Wear glasses or sunglasses when outdoors to minimize the
                  amount of pollen getting into your eyes.
                </li>
                <li>
                  Wear a pollen mask (such as a NIOSH-rated 95 filter mask) when
                  mowing the lawn, raking leaves or gardening, and take
                  appropriate medication beforehand.
                </li>
                <li>
                  Don’t hang clothing outdoors to dry; pollen may cling to
                  towels and sheets.
                </li>
                <li>
                  Try not to rub your eyes; doing so will irritate them and
                  could make your symptoms worse.
                </li>
              </ul>
              <p className="allergy-section-paragraph">
                Indoor exposure
              </p>
              <ul className="allergy-section-list">
                <li>
                  Keep windows closed, and use air conditioning in your car and
                  home. Make sure to keep your air conditioning unit clean.
                </li>
                <li>
                  Reduce exposure to dust mites, especially in the bedroom. Use
                  “mite-proof” covers for pillows, comforters and duvets, and
                  mattresses and box springs. Wash your bedding frequently,
                  using hot water (at least 130 degrees Fahrenheit).
                </li>
                <li>
                  To limit exposure to mold, keep the humidity in your home low
                  (between 30 and 50 percent) and clean your bathrooms, kitchen
                  and basement regularly. Use a dehumidifier, especially in the
                  basement and in other damp, humid places, and empty and clean
                  it often. If mold is visible, clean it with mild detergent and
                  a 5 percent bleach solution as directed by an allergist.
                </li>
                <li>
                  Clean floors with a damp rag or mop, rather than dry-dusting
                  or sweeping.
                </li>
              </ul>
              <p className="allergy-section-paragraph">
                Exposure to pets
              </p>
              <ul className="allergy-section-list">
                <li>
                  Wash your hands immediately after petting any animals; wash
                  your clothes after visiting friends with pets.
                </li>
                <li>
                  If you are allergic to a household pet, keep the animal out of
                  your home as much as possible. If the pet must be inside, keep
                  it out of the bedroom so you are not exposed to animal
                  allergens while you sleep.
                </li>
                <li>
                  Close the air ducts to your bedroom if you have forced-air or
                  central heating or cooling. Replace carpeting with hardwood,
                  tile or linoleum, all of which are easier to keep dander-free.
                </li>
              </ul>
              <h4 className="allergy-section-mid-title">
                Medications
              </h4>
              <p className="allergy-section-paragraph">
                Many allergens that trigger allergic rhinitis are airborne, so
                you can’t always avoid them. If your symptoms can’t be
                well-controlled by simply avoiding triggers, your allergist may
                recommend medications that reduce nasal congestion, runny nose,
                sneezing and itching. They are available in many forms — oral
                tablets, liquid medication, nasal sprays and eyedrops. Some
                medications may have side effects, so discuss these treatments
                with your allergist.
              </p>
              <h4 className="allergy-section-mid-title">
                Intranasal corticosteroids
              </h4>
              <p className="allergy-section-paragraph">
                Intranasal corticosteroids are the single most effective drug
                class for treating allergic rhinitis. They can significantly
                reduce nasal congestion as well as sneezing, itching and a runny
                nose.
              </p>
              <p className="allergy-section-paragraph">
                Talk with your allergist about whether these medications are
                appropriate and safe for you. These sprays are designed to avoid
                the side effects that may occur from steroids that are taken by
                mouth or injection. Take care not to spray the medication
                against the center portion of the nose (the nasal septum). The
                most common side effects are local irritation and nasal
                bleeding. Some older preparations have been shown to have some
                effect on children’s growth; data about some newer steroids
                don’t indicate an effect on growth.
              </p>
              <h4 className="allergy-section-mid-title">
                Antihistamines
              </h4>
              <p className="allergy-section-paragraph">
                Antihistamines are commonly used to treat allergic rhinitis.
                These medications counter the effects of histamine, the
                irritating chemical released within your body when an allergic
                reaction takes place. Although other chemicals are involved,
                histamine is primarily responsible for causing the symptoms.
                Antihistamines are found in eyedrops, nasal sprays and, most
                commonly, oral tablets and syrup.
              </p>
              <p className="allergy-section-paragraph">
                Antihistamines help to relieve nasal allergy symptoms such as:
              </p>
              <ul className="allergy-section-list">
                <li>
                  Sneezing and an itchy, runny nose
                </li>
                <li>
                  Eye itching, burning, tearing and redness
                </li>
                <li>
                  Itchy skin, hives and eczema
                </li>
              </ul>
              <p className="allergy-section-paragraph">
                There are dozens of antihistamines; some are available over the
                counter, while others require a prescription. Patients respond
                to them in a wide variety of ways.
              </p>
              <p className="allergy-section-paragraph">
                Generally, the newer (second-generation) products work well and
                produce only minor side effects. Some people find that an
                antihistamine becomes less effective as the allergy season
                worsens or as their allergies change over time. If you find that
                an antihistamine is becoming less effective, tell your
                allergist, who may recommend a different type or strength of
                antihistamine. If you have excessive nasal dryness or thick
                nasal mucus, consult an allergist before taking antihistamines.
                Contact your allergist for advice if an antihistamine causes
                drowsiness or other side effects.
              </p>
              <p className="allergy-section-paragraph">
                Proper use: Short-acting antihistamines can be taken every four
                to six hours, while timed-release antihistamines are taken every
                12 to 24 hours. The short-acting antihistamines are often most
                helpful if taken 30 minutes before an anticipated exposure to an
                allergen (such as at a picnic during ragweed season).
                Timed-release antihistamines are better suited to long-term use
                for those who need daily medications. Proper use of these drugs
                is just as important as their selection. The most effective way
                to use them is before symptoms develop. A dose taken early can
                eliminate the need for many later doses to reduce established
                symptoms. Many times a patient will say that he or she “took
                one, and it didn’t work.” If the patient had taken the
                antihistamine regularly for three to four days to build up blood
                levels of the medication, it might have been effective.
              </p>
              <p className="allergy-section-paragraph">
                Side effects: Older (first-generation) antihistamines may cause
                drowsiness or performance impairment, which can lead to
                accidents and personal injury. Even when these medications are
                taken only at bedtime, they can still cause considerable
                impairment the following day, even in people who do not feel
                drowsy. For this reason, it is important that you do not drive a
                car or work with dangerous machinery when you take a potentially
                sedating antihistamine. Some of the newer antihistamines do not
                cause drowsiness.
              </p>
              <p className="allergy-section-paragraph">
                A frequent side effect is excessive dryness of the mouth, nose
                and eyes. Less common side effects include restlessness,
                nervousness, overexcitability, insomnia, dizziness, headaches,
                euphoria, fainting, visual disturbances, decreased appetite,
                nausea, vomiting, abdominal distress, constipation, diarrhea,
                increased or decreased urination, urinary retention, high or low
                blood pressure, nightmares (especially in children), sore
                throat, unusual bleeding or bruising, chest tightness or
                palpitations. Men with prostate enlargement may encounter
                urinary problems while on antihistamines. Consult your allergist
                if these reactions occur.
              </p>
              <p className="allergy-section-paragraph">
                <b>Important precautions:</b>
              </p>
              <ul className="allergy-section-list">
                <li>
                  Follow your allergist’s instructions.
                </li>
                <li>
                  Alcohol and tranquilizers increase the sedation side effects
                  of antihistamines.
                </li>
                <li>
                  Do not use more than one antihistamine at a time, unless
                  prescribed.
                </li>
                <li>
                  Keep these medications out of the reach of children.
                </li>
                <li>
                  Know how the medication affects you before working with heavy
                  machinery, driving or doing other performance-intensive tasks;
                  some products can slow your reaction time.
                </li>
                <li>
                  Some antihistamines appear to be safe to take during
                  pregnancy, but there have not been enough studies to determine
                  the absolute safety of antihistamines in pregnancy. Again,
                  consult your allergist or your obstetrician if you must take
                  antihistamines.
                </li>
                <li>
                  While antihistamines have been taken safely by millions of
                  people in the last 50 years, don’t take antihistamines before
                  telling your allergist if you are allergic to, or intolerant
                  of, any medicine; are pregnant or intend to become pregnant
                  while using this medication; are breast-feeding; have glaucoma
                  or an enlarged prostate; or are ill.
                </li>
                <li>
                  Never take anyone else’s medication.
                </li>
              </ul>
              <h4 className="allergy-section-mid-title">
                Decongestants
              </h4>
              <p className="allergy-section-paragraph">
                Decongestants help relieve the stuffiness and pressure caused by
                swollen nasal tissue. They do not contain antihistamines, so
                they do not cause antihistaminic side effects. They do not
                relieve other symptoms of allergic rhinitis. Oral decongestants
                are available as prescription and nonprescription medications
                and are often found in combination with antihistamines or other
                medications. It is not uncommon for patients using decongestants
                to experience insomnia if they take the medication in the
                afternoon or evening. If this occurs, a dose reduction may be
                needed. At times, men with prostate enlargement may encounter
                urinary problems while on decongestants. Patients using
                medications to manage emotional or behavioral problems should
                discuss this with their allergist before using decongestants.
                Patients with high blood pressure or heart disease should check
                with their allergist before using. Pregnant patients should also
                check with their allergist before starting decongestants.
              </p>
              <p className="allergy-section-paragraph">
                Nonprescription decongestant nasal sprays work within minutes
                and last for hours, but you should not use them for more than a
                few days at a time unless instructed by your allergist.
                Prolonged use can cause rhinitis medicamentosa, or rebound
                swelling of the nasal tissue. Stopping the use of the
                decongestant nasal spray will cure that swelling, provided that
                there is no underlying disorder.
              </p>
              <p className="allergy-section-paragraph">
                Oral decongestants are found in many over-the-counter (OTC) and
                prescription medications, and may be the treatment of choice for
                nasal congestion. They don’t cause rhinitis medicamentosa but
                need to be avoided by some patients with high blood pressure. If
                you have high blood pressure or heart problems, check with your
                allergist before using them.
              </p>
              <h4 className="allergy-section-mid-title">
                Nasal sprays
              </h4>
              <p className="allergy-section-paragraph">
                Nonprescription saline nasal sprays will help counteract
                symptoms such as dry nasal passages or thick nasal mucus. Unlike
                decongestant nasal sprays, a saline nasal spray can be used as
                often as it is needed. Sometimes an allergist may recommend
                washing (douching) the nasal passage. There are many OTC
                delivery systems for saline rinses, including neti pots and
                saline rinse bottles.
              </p>
              <p className="allergy-section-paragraph">
                Nasal cromolyn blocks the body’s release of allergy-causing
                substances. It does not work in all patients. The full dose is
                four times daily, and improvement of symptoms may take several
                weeks. Nasal cromolyn can help prevent allergic nasal reactions
                if taken prior to an allergen exposure.
              </p>
              <p className="allergy-section-paragraph">
                Nasal ipratropium bromide spray can help reduce nasal drainage
                from allergic rhinitis or some forms of nonallergic rhinitis.
              </p>
              <h4 className="allergy-section-mid-title">
                Leukatriene pathway inhibitors
              </h4>
              <p className="allergy-section-paragraph">
                Leukotriene pathway inhibitors (montelukast, zafirlukast and
                zileuton) block the action of leukotriene, a substance in the
                body that can cause symptoms of allergic rhinitis. These drugs
                are also used to treat asthma.
              </p>
              <h4 className="allergy-section-mid-title">
                Immunotherapy
              </h4>
              <p className="allergy-section-paragraph">
                Immunotherapy may be recommended for people who don’t respond
                well to treatment with medications or who experience side
                effects from medications, who have allergen exposure that is
                unavoidable or who desire a more permanent solution to their
                allergies. Immunotherapy can be very effective in controlling
                allergic symptoms, but it doesn’t help the symptoms produced by
                nonallergic rhinitis.
              </p>
              <p className="allergy-section-paragraph">
                Two types of immunotherapy are available: allergy shots and
                sublingual (under-the-tongue) tablets.
              </p>
              <ul className="allergy-section-list">
                <li>
                  Allergy shots: A treatment program, which can take three to
                  five years, consists of injections of a diluted allergy
                  extract, administered frequently in increasing doses until a
                  maintenance dose is reached. Then the injection schedule is
                  changed so that the same dose is given with longer intervals
                  between injections. Immunotherapy helps the body build
                  resistance to the effects of the allergen, reduces the
                  intensity of symptoms caused by allergen exposure and
                  sometimes can actually make skin test reactions disappear. As
                  resistance develops over several months, symptoms should
                  improve.
                </li>
                <li>
                  Sublingual tablets: This type of immunotherapy was approved by
                  the Food and Drug Administration in 2014. Starting several
                  months before allergy season begins, patients dissolve a
                  tablet under the tongue daily. Treatment can continue for as
                  long as three years. Only a few allergens (certain grass and
                  ragweed pollens and house dust mite) can be treated now with
                  this method, but it is a promising therapy for the future.
                </li>
              </ul>
              <h4 className="allergy-section-mid-title">
                Eye allergy preparations and eyedrops
              </h4>
              <p className="allergy-section-paragraph">
                Eye allergy preparations may be helpful when the eyes are
                affected by the same allergens that trigger rhinitis, causing
                redness, swelling, watery eyes and itching. OTC eyedrops and
                oral medications are commonly used for short-term relief of some
                eye allergy symptoms. They may not relieve all symptoms, though,
                and prolonged use of some of these drops may actually cause your
                condition to worsen.
              </p>
              <p className="allergy-section-paragraph">
                Prescription eyedrops and oral medications also are used to
                treat eye allergies. Prescription eyedrops provide both short-
                and long-term targeted relief of eye allergy symptoms, and can
                be used to manage them.
              </p>
              <p className="allergy-section-paragraph">
                Check with your allergist or pharmacist if you are unsure about
                a specific drug or formula.
              </p>
              <h4 className="allergy-section-mid-title">
                Treatments that are not recommended for allergic rhinitis
              </h4>
              <p className="allergy-section-paragraph">
                Antibiotics: Effective for the treatment of bacterial
                infections, antibiotics do not affect the course of
                uncomplicated common colds (a viral infection) and are of no
                benefit for noninfectious rhinitis, including allergic rhinitis.
              </p>
              <p className="allergy-section-paragraph">
                Nasal surgery: Surgery is not a treatment for allergic rhinitis,
                but it may help if patients have nasal polyps or chronic
                sinusitis that is not responsive to antibiotics or nasal steroid
                sprays.
              </p>
              <Element name="Occupational Rhinitis">
                <h3 className="allergy-section-title">
                  Occupational Rhinitis
                </h3>
              </Element>
              <p className="allergy-section-paragraph">
                If you develop symptoms that resemble those of hay fever and
                that appear or become more serious at work, you may be suffering
                from occupational rhinitis.
              </p>
              <p className="allergy-section-paragraph">
                Occupational rhinitis, or work-related rhinitis, is a condition
                in which symptoms are triggered or further aggravated by
                allergens in the workplace. These symptoms can include sneezing,
                a runny nose and watering eyes. Common triggers include cleaning
                products, chemical fumes, certain types of dust, and corrosive
                gases.
              </p>
              <p className="allergy-section-paragraph">
                If your allergy symptoms appear at work, or seem to get worse
                there, call your allergist, who can help you identify potential
                triggers and develop a treatment plan.
              </p>
              <Element name="FAQs">
                <h3 className="allergy-section-title">
                  FAQs
                </h3>
              </Element>
              <h4 className="allergy-section-mid-title">
                What is allergic rhinitis?
              </h4>
              <p className="allergy-section-paragraph">
                Allergic rhinitis is an allergic reaction to airborne allergens,
                like seasonal grass or ragweed pollen or year-round allergens
                like dust and animal dander. Allergic rhinitis is sometimes
                called “hay fever,” especially when caused by seasonal
                allergens. Hay fever shares many of the same symptoms as a
                common cold, but is not caused by a virus or bacteria. Instead,
                it is caused by your immune system reacting to allergens you
                breath into your body.
              </p>
              <h4 className="allergy-section-mid-title">
                What is hay fever?
              </h4>
              <p className="allergy-section-paragraph">
                Hey fever is another name for allergic rhinitis, most commonly
                used to describe a seasonal allergic reaction to pollen such as
                ragweed. However, the term is often used to refer to nasal
                allergies caused by any inhaled allergen. Despite the name, hay
                fever is not necessarily a reaction to hay, and it does not
                cause a fever.
              </p>
              <h4 className="allergy-section-mid-title">
                Is allergic rhinitis contagious?
              </h4>
              <p className="allergy-section-paragraph">
                No. Allergic rhinitis (or hay fever) is caused by your immune
                system’s response to allergens breathed into your body. It is
                not caused by a virus or bacteria and is not contagious.
              </p>
              <h4 className="allergy-section-mid-title">
                What are hay fever symptoms?
              </h4>
              <p className="allergy-section-paragraph">
                Hay fever, or allergic rhinitis, symptoms are similar to the
                symptoms of a common cold. Some common symptoms include
                sneezing, congestion, coughing, sinus pressure, itchy watery
                eyes, and itchy nose, mouth, and throat, and fatigue. It can be
                difficult to tell the difference between a cold and hay fever.
                If you have hay fever, your runny nose will likely have a thin,
                watery discharge, and, despite the name, you will not have a
                fever. If you have a cold, you may have a thicker or yellowish
                discharge from your nose, and may have a low-grade fever. Hay
                fever symptoms can begin immediately after you are exposed to
                allergens like pollen or animal dander, and will continue as
                long as your exposure continues. A cold will most likely begin a
                day or two after exposure to the virus, and can last a few days
                to a week.
              </p>
            </div>
          </div>
        </div>
    );
  }
}

export default AllergicRhinitis;

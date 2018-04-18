import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as Scroll from 'react-scroll';
import { Anchor, Button } from 'antd';
const ScrollLink = Scroll.Link;
const Element = Scroll.Element;
const Events = Scroll.Events;
const scrollSpy = Scroll.scrollSpy;

class EyeAllergies extends Component {
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
    selectedArray.push(this.props.eyeAllergies._id);

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
                      this.props.onSelect(this.props.eyeAllergies._id);
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
                  <ScrollLink to="Eye Allergy Diagnosis"
                              offset={mediaQuery.matches ? -120 : -50}
                              spy={true}
                              smooth={true}
                              hashSpy={true}
                              duration={500}
                              isDynamic={true}>
                    Eye Allergy Diagnosis
                  </ScrollLink>
                </div>
                <div className="ant-anchor-link">
                  <ScrollLink to="Eye Allergy Symptoms"
                              offset={mediaQuery.matches ? -120 : -50}
                              spy={true}
                              smooth={true}
                              hashSpy={true}
                              duration={500}
                              isDynamic={true}>
                    Eye Allergy Symptoms
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
                The symptoms can occur alone but usually accompany the sneezing,
                sniffling or stuffy nose found with nasal allergies.
              </p>
              <h4 className="allergy-section-mid-title">
                Eye Allergy Symptoms
              </h4>
              <ul className="allergy-section-list">
                <li>
                  Itching
                </li>
                <li>
                  Redness
                </li>
                <li>
                  Burning
                </li>
                <li>
                  Clear, watery discharge
                </li>
              </ul>
              <p className="allergy-section-paragraph">
                For more information on eye allergy symptoms
                <ScrollLink to="Eye Allergy Symptoms"
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
                Eye Allergy Triggers
              </h4>
              <ul className="allergy-section-list">
                <li>
                  Outdoor allergens, such as pollens from grass, trees and weeds
                </li>
                <li>
                  Indoor allergens, such as pet dander, dust mites and mold
                </li>
                <li>
                  Irritants, such as cigarette smoke, perfume and diesel exhaust
                </li>
              </ul>
              <h4 className="allergy-section-mid-title">
                Eye Allergy Management and Treatment
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
                  mites, and a dehumidifier to control mold.
                </li>
                <li>
                  Wash your hands after petting any animal.
                </li>
              </ul>
              <p className="allergy-section-paragraph">
                Control some symptoms with nonprescription medications, sold
                over the counter:
              </p>
              <ul className="allergy-section-list">
                <li>
                  Artificial tears
                </li>
                <li>
                  Decongestant eyedrops (don’t use eyedrops for “red eye” longer
                  than a week, or they can make things worse)
                </li>
                <li>
                  Oral antihistamines (note that they may dry your eyes and make
                  your symptoms worse)
                </li>
              </ul>
              <p className="allergy-section-paragraph">
                See an allergist for prescription medications, which may be more
                effective:
              </p>
              <ul className="allergy-section-list">
                <li>
                  Eyedrops (decongestant, antihistamine, mast cell stabilizer,
                  corticosteroid, NSAID)
                </li>
                <li>
                  Allergy shots (immunotherapy)
                </li>
                <li>
                  Nonsedating oral antihistamines (note that they may dry your
                  eyes and make your symptoms worse)
                </li>
              </ul>
              <p className="allergy-section-paragraph">
                For more information on eye allergy management and treatment
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
              <Element name="Eye Allergy Diagnosis">
                <h3 className="allergy-section-title">
                  Eye Allergy Diagnosis
                </h3>
              </Element>
              <p className="allergy-section-paragraph">
                Eye allergies develop when the body’s immune system becomes
                sensitized and overreacts to something in the environment that
                typically causes no problem in most people. An allergic reaction
                can occur when that “something” (called an allergen) comes in
                contact with antibodies attached to the mast cells in your eyes;
                the cells respond by releasing histamine and other substances or
                chemicals that cause tiny blood vessels to leak and the eyes to
                become itchy, red and watery.
              </p>
              <p className="allergy-section-paragraph">
                Eye allergies share symptoms with some diseases of the eye,
                making accurate diagnosis imperative. The symptoms of eye
                allergy can range from mildly annoying redness to inflammation
                severe enough to impair vision. If symptoms persist or
                over-the-counter remedies do not bring relief, see an allergist,
                who will review your medical history and symptoms and conduct
                tests that can reveal an eye allergy.
              </p>
              <p className="allergy-section-paragraph">
                Those tests may include an examination with a microscope, which
                will show swollen blood vessels on the surface of the eye. In
                addition, your doctor may test for a certain type of white blood
                cell that shows up on areas of the eye affected by allergies.
                This involves gently scraping the conjunctiva (the inner lining
                of the eyelid) and seeing if those cells are found.
              </p>
              <iframe width={iframeQuery.matches ? '100%' : 560} height="315"
                      src="https://www.youtube.com/embed/_DavUFJRgZo"
                      frameBorder="0" allow="autoplay; encrypted-media"
                      allowFullScreen></iframe>
              <Element name="Eye Allergy Symptoms">
                <h3 className="allergy-section-title">
                  Eye Allergy Symptoms
                </h3>
              </Element>
              <p className="allergy-section-paragraph">
                The primary types of eye allergy are seasonal or perennial
                allergic conjunctivitis, vernal keratoconjunctivitis, atopic
                keratoconjunctivitis, contact allergic conjunctivitis and giant
                papillary conjunctivitis.
              </p>
              <h4 className="allergy-section-mid-title">
                Seasonal and perennial allergic conjunctivitis
              </h4>
              <p className="allergy-section-paragraph">
                Seasonal allergic conjunctivitis (SAC) is by far the most common
                type of eye allergy. Patients experience symptoms in spring,
                summer or fall, depending on the type of plant pollens in the
                air. Typical symptoms include:
              </p>
              <ul className="allergy-section-list">
                <li>
                  Itching
                </li>
                <li>
                  Redness
                </li>
                <li>
                  Burning
                </li>
                <li>
                  Clear, watery discharge
                </li>
              </ul>
              <p className="allergy-section-paragraph">
                People with SAC may have chronic dark circles (known as allergic
                shiners) under their eyes. The eyelids may be puffy, and bright
                lights may be bothersome. SAC symptoms often accompany the runny
                nose, sneezing and nasal congestion associated with hay fever
                and other seasonal allergies. The itching may be so bothersome
                that patients rub their eyes frequently, making symptoms worse
                and potentially causing infection.
              </p>
              <p className="allergy-section-paragraph">
                Perennial allergic conjunctivitis (PAC), as its name implies,
                occurs year-round. Symptoms are the same as with SAC, but tend
                to be milder. They are caused by reactions to dust mites, mold,
                pet dander or other household allergens, rather than pollen.
              </p>
              <h4 className="allergy-section-mid-title">
                Vernal keratoconjunctivitis
              </h4>
              <p className="allergy-section-paragraph">
                Vernal keratoconjunctivitis is a more serious eye allergy than
                SAC or PAC. While it can occur year-round, symptoms may worsen
                seasonally. It primarily occurs in boys and young men; about 75
                percent of patients also have eczema or asthma. Symptoms
                include:
              </p>
              <ul className="allergy-section-list">
                <li>
                  Itching
                </li>
                <li>
                  Significant tearing and production of thick mucus
                </li>
                <li>
                  The feeling of having something in the eye (foreign body
                  sensation)
                </li>
                <li>
                  Aversion to light (photophobia)
                </li>
              </ul>
              <p className="allergy-section-paragraph">
                If left untreated, vernal keratoconjunctivitis can impair
                vision.
              </p>
              <h4 className="allergy-section-mid-title">
                Atopic keratoconjunctivitis
              </h4>
              <p className="allergy-section-paragraph">
                This type of allergy primarily affects older patients - mostly
                men with a history of allergic dermatitis. Symptoms of atopic
                keratoconjunctivitis can occur year-round and are similar to
                those of vernal keratoconjunctivitis:
              </p>
              <ul className="allergy-section-list">
                <li>
                  Severe itching
                </li>
                <li>
                  Burning
                </li>
                <li>
                  Redness
                </li>
                <li>
                  Significant production of thick mucus that, after sleep, may
                  cause the eyelids to stick together
                </li>
              </ul>
              <p className="allergy-section-paragraph">
                If left untreated, atopic keratoconjunctivitis can result in
                scarring of the cornea and its delicate membrane.
              </p>
              <h4 className="allergy-section-mid-title">
                Contact allergic conjunctivitis
              </h4>
              <p className="allergy-section-paragraph">
                This can result from irritation by contact lenses or by the
                proteins from tears that bind to the surface of the lens.
                Symptoms include:
              </p>
              <ul className="allergy-section-list">
                <li>
                  Redness
                </li>
                <li>
                  Itching
                </li>
                <li>
                  Mucous discharge
                </li>
                <li>
                  Lens discomfort
                </li>
              </ul>
              <h4 className="allergy-section-mid-title">
                Giant papillary conjunctivitis
              </h4>
              <p className="allergy-section-paragraph">
                Associated with wearing contact lenses, giant papillary
                conjunctivitis is a severe form of contact allergic
                conjunctivitis in which individual fluid sacs, or papules, form
                in the upper lining of the inner eyelid. Symptoms include:
              </p>
              <ul className="allergy-section-list">
                <li>
                  Itching
                </li>
                <li>
                  Puffiness
                </li>
                <li>
                  Tearing
                </li>
                <li>
                  Mucous discharge
                </li>
                <li>
                  Blurred vision
                </li>
                <li>
                  Poor tolerance for wearing contact lenses
                </li>
                <li>
                  Foreign body sensation
                </li>
              </ul>
              <Element name="Management and Treatment">
                <h3 className="allergy-section-title">
                  Management and Treatment
                </h3>
              </Element>
              <p className="allergy-section-paragraph">
                The first approach in managing seasonal or perennial forms of
                eye allergy should be to avoid the allergens that trigger your
                symptoms.
              </p>
              <p className="allergy-section-paragraph">
                Outdoor exposure:
              </p>
              <ul className="allergy-section-list">
                <li>
                  Stay indoors as much as possible when pollen counts are at
                  their peak, usually during the midmorning and early evening,
                  and when wind is blowing pollens around.
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
                  Try not to rub your eyes, which will irritate them and could
                  make your condition worse.
                </li>
              </ul>
              <p className="allergy-section-paragraph">
                Indoor exposure:
              </p>
              <ul className="allergy-section-list">
                <li>
                  Keep windows closed, and use air conditioning in your car and
                  home. Air conditioning units should be kept clean.
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
                  it often. If mold is visible, clean it with detergent and a 5
                  percent bleach solution.
                </li>
                <li>
                  Clean floors with a damp rag or mop, rather than dry-dusting
                  or sweeping.
                </li>
              </ul>
              <p className="allergy-section-paragraph">
                Exposure to pets:
              </p>
              <ul className="allergy-section-list">
                <li>
                  Wash your hands immediately after petting any animals. Wash
                  your clothes after visiting friends with pets.
                </li>
                <li>
                  If you are allergic to a household pet, keep it out of your
                  home as much as possible. If the pet must be inside, keep it
                  out of the bedroom so you are not exposed to animal allergens
                  while you sleep.
                </li>
                <li>
                  Close the air ducts to your bedroom if you have forced-air or
                  central heating or cooling. Replace carpeting with hardwood,
                  tile or linoleum, all of which are easier to keep dander-free.
                </li>
              </ul>
              <p className="allergy-section-paragraph">
                Many allergens that trigger eye allergies are airborne, so you
                can’t always avoid them. Discuss your symptoms with your
                allergist to determine which treatment options are right for
                you.
              </p>
              <p className="allergy-section-paragraph">
                Nonprescription (over-the-counter, or OTC) eyedrops and oral
                medications are commonly used for short-term relief of some
                symptoms. They may not relieve all symptoms, and prolonged use
                of some OTC eyedrops may actually cause your condition to
                worsen.
              </p>
              <p className="allergy-section-paragraph">
                Prescription eyedrops and oral medications also are used to
                treat eye allergies. The prescription drops provide both short-
                and long-term targeted relief of eye allergy symptoms. Your
                allergist can help determine which treatments are best for you.
              </p>
              <p className="allergy-section-paragraph">
                Children can be treated with both OTC and prescription eyedrops
                and medications. Artificial tears are safe and can be used at
                any age. Some eyedrops, such as antihistamines and mast cell
                stabilizers, can be used in children 3 and older. Any treatment
                should be discussed with your child’s physician.
              </p>
              <p className="allergy-section-paragraph">
                OTC eyedrops and medications
              </p>
              <ul className="allergy-section-list">
                <li>
                  Tear substitutes: Artificial tears can temporarily wash
                  allergens from the eye and also moisten the eyes, which often
                  become dry when red and irritated. These drops, which can be
                  refrigerated to provide additional soothing and comfort, are
                  safe and can be used as often as needed.
                </li>
                <li>
                  Decongestants: OTC decongestant eyedrops reduce the redness
                  associated with eye allergies by narrowing the blood vessels
                  in the eye. (Note: These should not be used by anyone with
                  glaucoma.) They are available with a decongestant only or with
                  a decongestant and an OTC antihistamine, which provides
                  additional relief from itching. Because the drops are weak,
                  they must be used frequently (four to six times a day).
                </li>
                <li>
                  Do not use these OTC decongestant eyedrops for more than two
                  to three days. Prolonged use can create a “rebound effect” -
                  increased swelling and redness that may last even after
                  discontinuing the drops. You may be familiar with this if you
                  have used decongestant nasal sprays for more than three days
                  and your nose has become even more congested than it was
                  before.
                </li>
                <li>
                  Oral antihistamines: While oral antihistamines can be mildly
                  effective in relieving the itching associated with eye
                  allergies, they may cause dry eyes and potentially worsen eye
                  allergy symptoms. Also, some OTC versions of these medications
                  can cause side effects such as sedation, excitability,
                  dizziness or disturbed coordination.
                </li>
              </ul>
              <p className="allergy-section-paragraph">
                Prescription eyedrops and medications
              </p>
              <ul className="allergy-section-list">
                <li>
                  Antihistamine eyedrops: These can reduce the itching, redness
                  and swelling associated with eye allergies. Although these
                  drops provide quick relief, the effect may last only a few
                  hours, and some must be used four times a day.
                </li>
                <li>
                  Mast cell stabilizer eyedrops: These prevent the release of
                  histamine and other substances that cause allergy symptoms. To
                  prevent itching, the drops must be used before you’re exposed
                  to an allergen.
                </li>
                <li>
                  Antihistamine and mast cell stabilizer eyedrops: Some of the
                  newest eyedrops have both an antihistamine and a mast cell
                  stabilizer to treat and prevent eye allergies. They are used
                  twice a day and provide quick, long-lasting relief of itching,
                  redness, tearing and burning.
                </li>
                <li>
                  NSAID eyedrops: Nonsteroidal anti-inflammatory drugs (NSAIDs)
                  are available in eyedrops to relieve itching. These drops may
                  cause stinging or burning when applied and may need to be used
                  four times a day.
                </li>
                <li>
                  Corticosteroid eyedrops: These can help treat chronic, severe
                  eye allergy symptoms such as itching, redness and swelling.
                  Long-term treatment with steroids (more than two weeks) should
                  be done only under the supervision of an ophthalmologist; side
                  effects of continued use include a risk of infection, glaucoma
                  and cataracts.
                </li>
                <li>
                  Nonsedating oral antihistamines: Prescription antihistamines
                  can be mildly effective in relieving the itching associated
                  with eye allergies. While they do not have the same sedating
                  side effects as OTC antihistamines, these medications can
                  cause dry eyes and worsen symptoms.
                </li>
                <li>
                  Allergy shots (immunotherapy): Allergy shots work by improving
                  an individual’s tolerance to the substance that causes an
                  allergic reaction. Tiny amounts of the allergen are injected
                  with gradually increasing doses over time. The treatment takes
                  several months to achieve maximum results, and you may still
                  be required to use medications to alleviate symptoms.
                </li>
              </ul>
            </div>
          </div>
        </div>
    );
  }
}

export default EyeAllergies;

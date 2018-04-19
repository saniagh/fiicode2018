import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as Scroll from 'react-scroll';
import { Anchor, Button } from 'antd';
const ScrollLink = Scroll.Link;
const Element = Scroll.Element;
const Events = Scroll.Events;
const scrollSpy = Scroll.scrollSpy;

class SinusInfection extends Component {
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
    selectedArray.push(this.props.sinusInfection._id);

    return (
        <div className={this.state.mainClassName}>
          <h1 className="page-header">
            Sinus Infection
          </h1>
          <div className="allergy-create-group-button">
            <Button type='primary'
                    size="large"
                    onClick={() => {
                      this.props.onConfirmSelectionOneAllergy(
                          selectedArray);
                      this.props.onSelect(this.props.sinusInfection._id);
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
                  <ScrollLink to="Treatment"
                              offset={mediaQuery.matches ? -120 : -50}
                              spy={true}
                              smooth={true}
                              duration={500}
                              isDynamic={true}>
                    Treatment
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
                Sinus infection (known as sinusitis) is a major health problem.
                It afflicts 31 million people in the United States. Americans
                spend more than $1 billion each year on over-the-counter
                medications to treat it. Sinus infections are responsible for 16
                million doctor visits and $150 million spent on prescription
                medications. People who have allergies, asthma, structural
                blockages in the nose or sinuses, or people with weak immune
                systems are at greater risk.
              </p>
              <h4 className="allergy-section-mid-title">
                Sinus infection symptoms
              </h4>
              <p className="allergy-section-paragraph">
                A bad cold is often mistaken for a sinus infection. Many
                symptoms are the same, including headache or facial pain, runny
                nose and nasal congestion. Unlike a cold, a sinus infection
                symptoms may be caused by bacterial infections. It often
                requires treatment with antibiotics (drugs that kill the germs
                causing the infection).
              </p>
              <h4 className="allergy-section-mid-title">
                Sinus infection diagnosis
              </h4>
              <p className="allergy-section-paragraph">
                If you think you have a sinus infection, see your allergist for
                proper diagnosis. In most cases, sinus infection treatment is
                easy. By stopping a sinus infection early, you avoid later
                symptoms and complications.
              </p>
              <h4 className="allergy-section-mid-title">
                What is sinusitis?
              </h4>
              <p className="allergy-section-paragraph">
                Sinusitis is an inflammation of the sinuses. It is often caused
                by bacterial (germ) infection. Sometimes, viruses and fungi
                (molds) cause it. People with weak immune systems are more
                likely to develop bacterial or fungal sinus infection. Some
                people with allergies can have "allergic fungal sinus
                infection." Acute sinus infection lasts three to eight weeks. A
                sinus infection lasting longer than eight weeks is considered
                chronic.
              </p>
              <p className="allergy-section-paragraph">
                The sinuses are air-filled cavities. They are located:
              </p>
              <ul className="allergy-section-list">
                <li>
                  Within the bony structure of the cheeks
                </li>
                <li>
                  Behind the forehead and eyebrows
                </li>
                <li>
                  On either side of the bridge of the nose
                </li>
                <li>
                  Behind the nose directly in front of the brain
                </li>
              </ul>
              <p className="allergy-section-paragraph">
                An infection of the sinus cavity close to the brain can be life
                threatening, if not treated. In rare cases, it can spread to the
                brain.
              </p>
              <p className="allergy-section-paragraph">
                Normal sinuses are lined with a thin layer of mucus that traps
                dust, germs and other particles in the air. Tiny hair-like
                projections in the sinuses sweep the mucus (and whatever is
                trapped in it) towards openings that lead to the back of the
                throat. From there, it slides down to the stomach. This
                continual process is a normal body function.
              </p>
              <p className="allergy-section-paragraph">
                A sinus infection stops the normal flow of mucus from the
                sinuses to the back of the throat. The tiny hair-like "sweepers"
                become blocked when infections or allergies cause tiny nasal
                tissues to swell. The swelling traps mucus in the sinuses.
              </p>
              <p className="allergy-section-paragraph">
                Some people have bodily defects that contribute to sinus
                infection. The most common of these defects are:
              </p>
              <ul className="allergy-section-list">
                <li>
                  Deformity of the bony partition between the two nasal passages
                </li>
                <li>
                  Nasal polyps (benign nasal growths that contain mucus)
                </li>
                <li>
                  A narrowing of the sinus openings
                </li>
              </ul>
              <p className="allergy-section-paragraph">
                People with these defects often suffer from chronic sinus
                infections.
              </p>
              <p className="allergy-section-paragraph">
                Related resources:
              </p>
              <ul className="allergy-section-list">
                <li>
                  <Link to={`/allergies/allergic-rhinitis`}>Rhinitis</Link>
                </li>
              </ul>
              <Element name="Symptoms">
                <h3 className="allergy-section-title">
                  Symptoms
                </h3>
              </Element>
              <p className="allergy-section-paragraph">
                Common symptoms of sinus infection include:
              </p>
              <ul className="allergy-section-list">
                <li>
                  Postnasal drip
                </li>
                <li>
                  Discolored nasal discharge (greenish in color)
                </li>
                <li>
                  Nasal stuffiness or congestion
                </li>
                <li>
                  Tenderness of the face (particularly under the eyes or at the
                  bridge of the nose)
                </li>
                <li>
                  Frontal headaches
                </li>
                <li>
                  Pain in the teeth
                </li>
                <li>
                  Coughing
                </li>
                <li>
                  Fever
                </li>
                <li>
                  Fatigue
                </li>
                <li>
                  Bad breath
                </li>
              </ul>
              <p className="allergy-section-paragraph">
                Sinus infection (sinusitis) is often confused with rhinitis, a
                medical term used to describe the symptoms that accompany nasal
                inflammation and irritation. Rhinitis only involves the nasal
                passages. It could be caused by a cold or allergies.
              </p>
              <p className="allergy-section-paragraph">
                Allergies can play an important role in chronic (long-lasting)
                or seasonal rhinitis episodes. Nasal and sinus passages become
                swollen, congested, and inflamed in an attempt to flush out
                offending inhaled particles that trigger allergies. Pollen are
                seasonal allergens. Molds, dust mites and pet dander can cause
                symptoms year-round.
              </p>
              <p className="allergy-section-paragraph">
                Asthma also has been linked to chronic sinus infections. Some
                people with a chronic nasal inflammation and irritation and/or
                asthma can develop a type of chronic sinusitis that is not
                caused by infection. Appropriate treatment of sinus infection
                often improves asthma symptoms.
              </p>
              <h4 className="allergy-section-mid-title">
                How is sinus infection diagnosed?
              </h4>
              <p className="allergy-section-paragraph">
                Diagnosis depends on symptoms and requires an examination of the
                throat, nose and sinuses. Your allergist will look for:
              </p>
              <ul className="allergy-section-list">
                <li>
                  Redness
                </li>
                <li>
                  Swelling of the nasal tissues
                </li>
                <li>
                  Tenderness of the face
                </li>
                <li>
                  Discolored (greenish) nasal discharge
                </li>
                <li>
                  Bad Breath
                </li>
              </ul>
              <p className="allergy-section-paragraph">
                If your sinus infection lasts longer than eight weeks, or if
                standard antibiotic treatment is not working, a sinus CT scan
                may help your allergist diagnose the problem. Your allergist may
                examine your nose or sinus openings. The exam uses a long, thin,
                flexible tube with a tiny camera and a light at one end that is
                inserted through the nose. It is not painful. Your allergist may
                give you a light anesthetic nasal spray to make you more
                comfortable.
              </p>
              <p className="allergy-section-paragraph">
                Mucus cultures: If your sinus infection is chronic or has not
                improved after several rounds of antibiotics, a mucus culture
                may help to determine what is causing the infection. Most mucus
                samples are taken from the nose. However, it is sometimes
                necessary to get mucus (or pus) directly from the sinuses.
              </p>
              <p className="allergy-section-paragraph">
                Knowing what kind of bacteria is causing the infection can lead
                to more effective antibiotic therapy. A fungus could also cause
                your sinus infection. Confirming the presence of fungus is
                important. Fungal sinus infection needs to be treated with
                antifungal agents, rather than antibiotics. In addition, some
                forms of fungal sinus infection – allergic fungal sinus
                infection, for example – do not respond to antifungal agents and
                often require the use of oral steroids.
              </p>
              <p className="allergy-section-paragraph">
                Your allergist may consider ordering a sinus CT. This test can
                help to define the extent of the infection. Your allergist may
                also send you to a specialist in allergy and immunology. The
                specialist will check for underlying factors such as allergies,
                asthma, structural defects, or a weakness of the immune system.
              </p>
              <p className="allergy-section-paragraph">
                Biopsies: A danger of more serious types of fungal sinus
                infection is that the fungus could penetrate into nearby bone.
                Only a bone biopsy can determine if this has happened. Biopsies
                involving sinus tissue are taken with flexible instruments
                inserted through the nose.
              </p>
              <p className="allergy-section-paragraph">
                Biopsies of the sinus tissue are also used to test for immotile
                cilia syndrome, a rare disorder that can cause people to suffer
                from recurrent infections, including chronic sinus infection,
                bronchitis and pneumonia.
              </p>
              <Element name="Treatment">
                <h3 className="allergy-section-title">
                  Treatment
                </h3>
              </Element>
              <h4 className="allergy-section-mid-title">
                Antibiotics
              </h4>
              <p className="allergy-section-paragraph">
                Antibiotics are standard treatments for bacterial sinus
                infections. Antibiotics are usually taken from 3 to 28 days,
                depending on the type of antibiotic. Because the sinuses are
                deep-seated in the bones, and blood supply is limited, longer
                treatments may be prescribed for people with longer lasting or
                severe cases.
              </p>
              <p className="allergy-section-paragraph">
                Overuse and abuse of antibiotics have been causing a major
                increase in antibiotic resistance. Therefore, patients with
                sinus symptoms should consider taking an antibiotic only if
                symptoms (including discolored nasal discharge) persist beyond
                7-10 days.
              </p>
              <p className="allergy-section-paragraph">
                Antibiotics help eliminate a sinus infection by attacking the
                bacteria that cause it, but until the drugs take effect, they do
                not do much to alleviate symptoms. Some over-the-counter
                medications can help provide relief.
              </p>
              <h4 className="allergy-section-mid-title">
                Nasal decongestant sprays
              </h4>
              <p className="allergy-section-paragraph">
                Topical nasal decongestants can be helpful if used for no more
                than three to four days. These medications shrink swollen nasal
                passages, facilitating the flow of drainage from the sinuses.
                Overuse of topical nasal decongestants can result in a dependent
                condition in which the nasal passages swell shut, called rebound
                phenomenon.
              </p>
              <h4 className="allergy-section-mid-title">
                Antihistamines
              </h4>
              <p className="allergy-section-paragraph">
                Antihistamines block inflammation caused by an allergic reaction
                so they can help to fight symptoms of allergies that can lead to
                swollen nasal and sinus passages.
              </p>
              <h4 className="allergy-section-mid-title">
                Nasal decongestants and antihistamines
              </h4>
              <p className="allergy-section-paragraph">
                Over-the-counter combination drugs should be used with caution.
                Some of these drugs contain drying agents that can thicken
                mucus. Only use them when prescribed by your allergist.
              </p>
              <h4 className="allergy-section-mid-title">
                Topical nasal corticosteroids
              </h4>
              <p className="allergy-section-paragraph">
                These prescription nasal sprays prevent and reverse inflammation
                and swelling in the nasal passages and sinus openings,
                addressing the biggest problem associated with sinus infection.
                Topical nasal corticosteroid sprays are also effective in
                shrinking and preventing the return of nasal polyps. These
                sprays at the normal dose are not absorbed into the blood stream
                and could be used over long periods of time without developing
                "addiction."
              </p>
              <h4 className="allergy-section-mid-title">
                Nasal saline washes
              </h4>
              <p className="allergy-section-paragraph">
                Nasal rinses can help clear thickened secretions from the nasal
                passages.
              </p>
              <h4 className="allergy-section-mid-title">
                Surgery
              </h4>
              <p className="allergy-section-paragraph">
                If drug therapies have failed, surgery may be recommended as a
                last resort. It is usually performed by an otolaryngologist.
                Anatomical defects are the most common target of surgery.
              </p>
              <p className="allergy-section-paragraph">
                Your surgeon can fix defects in the bone separating the nasal
                passages, remove nasal polyps, and open up closed passages.
                Sinus surgery is performed under either local or general
                anesthesia, and patients often can go home on the same day.
              </p>
              <Element name="FAQs">
                <h3 className="allergy-section-title">
                  FAQs
                </h3>
              </Element>
              <h4 className="allergy-section-mid-title">
                Is the definition of sinusitis the same as sinus infection?
              </h4>
              <p className="allergy-section-paragraph">
                Essentially yes, the definition of sinusitis is the same as
                sinus infection. “Itis” means inflammation or swelling often due
                to infection, and “sinus” is the location of the swelling on
                your face. Sinuses are normally air-filled pockets in the bone
                of the face. They are found in your forehead, at the bridge of
                your nose, way behind your eyes and at the apples of your
                cheeks. If these air pockets become blocked with fluid, germ
                like viruses or bacteria (and sometimes fungus) can multiply in
                these dark hard-to-reach spaces — and then you have an
                infection.
              </p>
              <h4 className="allergy-section-mid-title">
                How long do sinus infections last?
              </h4>
              <p className="allergy-section-paragraph">
                There are two major forms of sinus infections (also called
                sinusitis): acute and chronic. An “acute” sinus infection lasts
                anywhere from ten days up to eight weeks. A “chronic” infection
                lasts even longer. It is ongoing — it may seem like it’s
                improving, and then it comes right back as bad as it was at
                first. Chronic sinus infections may drag on for months at a
                time. Both acute and chronic sinus infections can be viral or
                bacterial. Some long-standing infections are fungal.
              </p>
              <h4 className="allergy-section-mid-title">
                How do you get rid of a sinus infection?
              </h4>
              <p className="allergy-section-paragraph">
                First you need to know the cause of the sinus infection. Is it
                viral or bacterial? If it’s viral, it should probably last less
                than two weeks. To get relief from sinus infection symptoms you
                can use nasal decongestant sprays, oral and topical
                antihistamines, nasal steroids and nasal saline washes. For a
                bacterial infection, antibiotics are usually prescribed. But be
                careful here. Don’t jump to antibiotics too quickly. Due to the
                overprescribing of antibiotics in recent years, and the
                development of antibiotic resistance, allergists recommend only
                taking an antibiotic if the symptoms last more than seven to 10
                days. If drug therapies don’t work for you, surgery might be
                recommended to repair defects in the bone separating the nasal
                passages, remove nasal polyps or open closed passages.
              </p>
              <h4 className="allergy-section-mid-title">
                What causes sinus infections?
              </h4>
              <p className="allergy-section-paragraph">
                Sinus infections happen when you “catch a bug” and a virus,
                bacteria or mold settles in the sinuses and causes inflammation
                of the area lining your sinuses. The sinus cavity, which is like
                a dark cave, fills up with fluid and becomes blocked. This is
                the perfect place for germs to grow. People who have nasal
                allergies already have this sinus irritation. If you have a weak
                immune system, you are more likely to develop sinus infection
                from bacteria or mold. Other things that can cause sinus
                infections are colds, seasonal allergies, nasal polyps or a
                deviated septum. With a deviated septum one side of the nose is
                shifted over, and it makes it hard to drain mucous, so the
                sinuses get backed up.
              </p>
              <h4 className="allergy-section-mid-title">
                What are the symptoms of a sinus infection?
              </h4>
              <p className="allergy-section-paragraph">
                Many of the symptoms of a sinus infection are the same you’d
                experience with a bad cold. They include: postnasal drip (that
                thick mucus in the back of your throat), discolored nasal
                discharge (green mucous coming out of your nose), stuffy nose or
                nasal congestion and tenderness or pain in the face – usually
                under the eyes or around the nose. You can also have headaches,
                tooth pain, coughing from the post nasal drip, fever, fatigue, a
                bad smell in your nose or a bad taste in your mouth and bad
                breath. Symptoms such as a fever that won’t go away, a change in
                your eyesight, severe headaches and neck stiffness need
                immediate medical attention.
              </p>
            </div>
          </div>
        </div>
    );
  }
}

export default SinusInfection;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as Scroll from 'react-scroll';
import { Anchor, Button, Card } from 'antd';
const ScrollLink = Scroll.Link;
const Element = Scroll.Element;
const Events = Scroll.Events;
const scrollSpy = Scroll.scrollSpy;

import Modal from 'react-responsive-modal';

class FoodAllergy extends Component {
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
    selectedArray.push(this.props.foodAllergy._id);

    let symptoms = (

        <div>
          <Element name="Symptoms">
            <h3 className="allergy-section-title">
              Symptoms
            </h3>
          </Element>
          <span className="allergy-section-paragraph">
            The body’s immune system keeps you healthy by fighting off
            infections and other dangers to good health. A food allergy
            reaction occurs when your immune system overreacts to a food or
            a substance in a food, identifying it as a danger and triggering
            a protective response.
          </span>
          <span className="allergy-section-paragraph">
            While allergies tend to run in families, it is impossible to
            predict whether a child will inherit a parent’s food allergy or
            whether siblings will have a similar condition. Some research
            does suggest that the younger siblings of a child with a peanut
            allergy will also be allergic to peanuts.
          </span>
          <span className="allergy-section-paragraph">
            Symptoms of a food allergy can range from mild to severe. Just
            because an initial reaction causes few problems doesn’t mean
            that all reactions will be similar; a food that triggered only
            mild symptoms on one occasion may cause more severe symptoms at
            another time.
          </span>
          <span className="allergy-section-paragraph">
            The most severe allergic reaction is anaphylaxis — a
            life-threatening whole-body allergic reaction that can impair
            your breathing, cause a dramatic drop in your blood pressure and
            affect your heart rate. Anaphylaxis can come on within minutes
            of exposure to the trigger food. It can be fatal and must be
            treated promptly with an injection of epinephrine (adrenaline).
          </span>
          <span className="allergy-section-paragraph">
            While any food can cause an adverse reaction, eight types of
            food account for about 90 percent of all reactions:
          </span>
          <ul className="allergy-section-list">
            <li>
              Eggs
            </li>
            <li>
              Milk
            </li>
            <li>
              Peanuts
            </li>
            <li>
              Tree nuts
            </li>
            <li>
              Fish
            </li>
            <li>
              Shellfish
            </li>
            <li>
              Wheat
            </li>
            <li>
              Soy
            </li>
          </ul>
          <span className="allergy-section-paragraph">
            Certain seeds, including sesame and mustard seeds (the main
            ingredient in the condiment mustard), also are common food
            allergy triggers and considered a major allergen in some
            countries.
          </span>
          <span className="allergy-section-paragraph">
            Symptoms of an allergic reaction may involve the skin, the
            gastrointestinal tract, the cardiovascular system and the
            respiratory tract. They can surface in one or more of the
            following ways:
          </span>

          <ul className="allergy-section-list">
            <li>
              Vomiting and/or stomach cramps
            </li>
            <li>
              Hives
            </li>
            <li>
              Shortness of breath
            </li>
            <li>
              Wheezing
            </li>
            <li>
              Repetitive cough
            </li>
            <li>
              Shock or circulatory collapse
            </li>
            <li>
              Tight, hoarse throat; trouble swallowing
            </li>
            <li>
              Swelling of the tongue, affecting the ability to talk or
              breathe
            </li>
            <li>
              Weak pulse
            </li>
            <li>
              Pale or blue coloring of skin
            </li>
            <li>
              Dizziness or feeling faint
            </li>
            <li>
              Anaphylaxis, a potentially life-threatening reaction that can
              impair breathing and send the body into shock; reactions may
              simultaneously affect different parts of the body (for
              example, a stomachache accompanied by a rash)
            </li>
          </ul>

          <span className="allergy-section-paragraph">
            Most food-related symptoms occur within two hours of ingestion;
            often they start within minutes. In some very rare cases, the
            reaction may be delayed by four to six hours or even longer.
            Delayed reactions are most typically seen in children who
            develop eczema as a symptom of food allergy and in people with a
            rare allergy to red meat caused by the bite of a lone star tick.
          </span>
          <span className="allergy-section-paragraph">
            Another type of delayed food allergy reaction stems from food
            protein-induced enterocolitis syndrome (FPIES), a severe
            gastrointestinal reaction that generally occurs two to six hours
            after consuming milk, soy, certain grains and some other solid
            foods. It mostly occurs in young infants who are being exposed
            to these foods for the first time or who are being weaned. FPIES
            often involves repetitive vomiting and can lead to dehydration.
            In some instances, babies will develop bloody diarrhea. Because
            the symptoms resemble those of a viral illness or bacterial
            infection, diagnosis of FPIES may be delayed. FPIES is a medical
            emergency that should be treated with IV rehydration.
          </span>
          <span className="allergy-section-paragraph">
            Not everyone who experiences symptoms after eating certain foods
            has a food allergy or needs to avoid that food entirely; for
            instance, some people experience an itchy mouth and throat after
            eating a raw or uncooked fruit or vegetable. This may indicate
            oral allergy syndrome - a reaction to pollen, not to the food
            itself. The immune system recognizes the pollen and similar
            proteins in the food and directs an allergic response to it. The
            allergen is destroyed by heating the food, which can then be
            consumed with no problem.
          </span>
        </div>
    );

    let triggers = (
        <div>
          <Element name="Triggers">
            <h3 className="allergy-section-title"
                id="foodtriggers">
              Triggers
            </h3>
          </Element>
          <span className="allergy-section-paragraph">
            Once a food allergy is diagnosed, the most effective treatment
            is to avoid the food. The foods most associated with food
            allergy in children are:
          </span>

          <ul className="allergy-section-list">
            <li>
              Milk
            </li>
            <li>
              Eggs
            </li>
            <li>
              Peanuts
            </li>
          </ul>

          <span className="allergy-section-paragraph">
            Children may outgrow their allergic reactions to milk and to
            eggs. Peanut and tree nut allergies are likely to persist.
          </span>
          <span className="allergy-section-paragraph">
            The most common food allergens in adults are:
          </span>

          <ul className="allergy-section-list">
            <li>
              Fruit and vegetable pollen (oral allergy syndrome)
            </li>
            <li>
              Peanuts and tree nuts
            </li>
            <li>
              Fish and shellfish
            </li>
          </ul>

          <span className="allergy-section-paragraph">
            People allergic to a specific food may also potentially have a
            reaction to related foods. A person allergic to one tree nut may
            be cross-reactive to others. Those allergic to shrimp may react
            to crab and lobster. Someone allergic to peanuts - which
            actually are legumes (beans), not nuts - may have problems with
            tree nuts, such as pecans, walnuts, almonds and cashews; in very
            rare circumstances they may have problems with other legumes
            (excluding soy).
          </span>
          <span className="allergy-section-paragraph">
            Learning about patterns of cross-reactivity and what must be
            avoided is one of the reasons why people with food allergies
            should receive care from a board-certified allergist.
            Determining if you are cross-reactive is not straightforward.
            Allergy testing to many items in the same “family” may not be
            specific enough - many times, these tests are positive, given
            how similar two food items in a “family” may look to the test.
            If you have tolerated it well in the past, a food that is
            theoretically cross-reactive may not have to be avoided at all.
          </span>
          <span className="allergy-section-paragraph">
            Negative tests may be very useful in ruling out an allergy. In
            the case of positive tests to foods that you have never eaten
            but that are related to items to which you’ve had an allergic
            reaction, an oral food challenge is the best way to determine
            whether the food poses a danger.
          </span>
        </div>
    );

    let diagnosis = (
        <div>
          <Element name="Diagnosing Food Allergies">
            <h3 className="allergy-section-title">
              Diagnosing Food Allergies
            </h3>
          </Element>
          <span className="allergy-section-paragraph">
            A food allergy will usually cause some sort of reaction every
            time the trigger food is eaten. Symptoms can vary from person to
            person, and you may not always experience the same symptoms
            during every reaction. Allergic reactions to food can affect the
            skin, respiratory tract, gastrointestinal tract and
            cardiovascular system. It is impossible to predict how severe
            the next reaction might be, and all patients with food allergies
            should be carefully counseled about the risk of anaphylaxis, a
            potentially fatal reaction that is treated with epinephrine
            (adrenaline).
          </span>
          <span className="allergy-section-paragraph">
            While food allergies may develop at any age, most appear in
            early childhood. If you suspect a food allergy, see an
            allergist, who will take your family and medical history, decide
            which tests to perform (if any) and use this information to
            determine if a food allergy exists.
          </span>
          <span className="allergy-section-paragraph">
            To make a diagnosis, allergists ask detailed questions about
            your medical history and your symptoms. Be prepared to answer
            questions about:
          </span>

          <ul className="allergy-section-list">
            <li>
              What and how much you ate
            </li>
            <li>
              How long it took for symptoms to develop
            </li>
            <li>
              What symptoms you experienced and how long they lasted.
            </li>
          </ul>

          <span className="allergy-section-paragraph">
            After taking your history, your allergist may order skin tests
            and/or blood tests, which indicate whether food-specific
            immunoglobulin E (IgE) antibodies are present in your body:
          </span>

          <ul className="allergy-section-list">
            <li>
              Skin-prick tests provide results in about 20 minutes. A liquid
              containing a tiny amount of the food allergen is placed on the
              skin of your arm or back. Your skin is pricked with a small,
              sterile probe, allowing the liquid to seep under the skin. The
              test, which isn’t painful but can be uncomfortable, is
              considered positive if a wheal (resembling the bump from a
              mosquito bite) develops at the site where the suspected
              allergen
              was placed. As a control, you’ll also get a skin prick with a
              liquid that doesn’t contain the allergen; this should not
              provoke a reaction, allowing comparison between the two test
              sites.
            </li>
            <li>
              Blood tests, which are a bit less exact than skin tests,
              measure
              the amount of IgE antibody to the specific food(s) being
              tested.
              Results are typically available in about a week and are
              reported
              as a numerical value.
            </li>
          </ul>

          <span className="allergy-section-paragraph">
            Your allergist will use the results of these tests in making a
            diagnosis. A positive result does not necessarily indicate that
            there is an allergy, though a negative result is useful in
            ruling one out.
          </span>
          <span className="allergy-section-paragraph">
            In some cases, an allergist may wish to conduct an oral food
            challenge, which is considered the most accurate way to make a
            food allergy diagnosis. During an oral food challenge, which is
            conducted under strict medical supervision, the patient is fed
            tiny amounts of the suspected trigger food in increasing doses
            over a period of time, followed by a few hours of observation to
            see if a reaction occurs. This test is helpful when the patient
            history is unclear or if the skin or blood tests are
            inconclusive. It also can be used to determine if an allergy has
            been outgrown.
          </span>
          <span className="allergy-section-paragraph">
            Because of the possibility of a severe reaction, an oral food
            challenge should be conducted only by experienced allergists in
            a doctor’s office or at a food challenge center, with emergency
            medication and equipment on hand.
          </span>
        </div>
    );

    let management = (
        <div>
          <Element name="Management and Treatment">
            <h3 className="allergy-section-title">
              Management and Treatment
            </h3>
          </Element>
          <span className="allergy-section-paragraph">
            The primary way to manage a food allergy is to avoid consuming
            the food that causes you problems. Carefully check ingredient
            labels of food products, and learn whether what you need to
            avoid is known by other names.
          </span>
          <span className="allergy-section-paragraph">
            The Food Allergy Labeling and Consumer Protection Act of 2004
            (FALCPA) mandates that manufacturers of packaged foods produced
            in the United States identify, in simple, clear language, the
            presence of any of the eight most common food allergens - milk,
            egg, wheat, soy, peanut, tree nut, fish and crustacean shellfish
            - in their products. The presence of the allergen must be stated
            even if it is only an incidental ingredient, as in an additive
            or flavoring.
          </span>
          <span className="allergy-section-paragraph">
            Some goods also may be labeled with precautionary statements,
            such as “may contain,” “might contain,” “made on shared
            equipment,” “made in a shared facility” or some other indication
            of potential allergen contamination. There are no laws or
            regulations requiring those advisory warnings and no standards
            that define what they mean. If you have questions about what
            foods are safe for you to eat, talk with your allergist.
          </span>
          <span className="allergy-section-paragraph">
            Be advised that the FALCPA labeling requirements do not apply to
            items regulated by the U.S. Department of Agriculture (meat,
            poultry and certain egg products) and those regulated by the
            Alcohol and Tobacco Tax and Trade Bureau (distilled spirits,
            wine and beer). The law also does not apply to cosmetics,
            shampoos and other health and beauty aids, some of which may
            contain tree nut extracts or wheat proteins.
          </span>
          <span className="allergy-section-paragraph">
            Avoiding an allergen is easier said than done. While labeling
            has helped make this process a bit easier, some foods are so
            common that avoiding them is daunting. A dietitian or a
            nutritionist may be able to help. These food experts will offer
            tips for avoiding the foods that trigger your allergies and will
            ensure that even if you exclude certain foods from your diet,
            you still will be getting all the nutrients you need. Special
            cookbooks and support groups, either in person or online, for
            patients with specific allergies can also provide useful
            information.
          </span>
          <span className="allergy-section-paragraph">
            Many people with food allergies wonder whether their condition
            is permanent. There is no definitive answer. Allergies to milk,
            eggs, wheat and soy may disappear over time, while allergies to
            peanuts, tree nuts, fish and shellfish tend to be lifelong.
          </span>

          <h4 className="allergy-section-mid-title">
            Eating out
          </h4>

          <span className="allergy-section-paragraph">
            Be extra careful when eating in restaurants. Waiters (and
            sometimes the kitchen staff) may not always know the ingredients
            of every dish on the menu. Depending on your sensitivity, even
            just walking into a kitchen or a restaurant can cause an
            allergic reaction.
          </span>
          <span className="allergy-section-paragraph">
            Consider using a “chef card” - available through many websites -
            that identifies your allergy and what you cannot eat. Always
            tell your servers about your allergies and ask to speak to the
            chef, if possible. Stress the need for preparation surfaces,
            pans, pots and utensils that haven’t been contaminated by your
            allergen, and clarify with the restaurant staff what dishes on
            the menu are safe for you.
          </span>

          <h4 className="allergy-section-mid-title">
            Anaphylaxis
          </h4>

          <span className="allergy-section-paragraph">
            Symptoms caused by a food allergy can range from mild to
            life-threatening; the severity of each reaction is
            unpredictable. People who have previously experienced only mild
            symptoms may suddenly experience a life-threatening reaction
            called anaphylaxis, which can, among other things, impair
            breathing and cause a sudden drop in blood pressure. This is why
            allergists do not like to classify someone as “mildly” or
            “severely” food allergic - there is just no way to tell what may
            happen with the next reaction. In the U.S., food allergy is the
            leading cause of anaphylaxis outside the hospital setting.
          </span>
          <span className="allergy-section-paragraph">
            Epinephrine (adrenaline) is the first-line treatment for
            anaphylaxis, which results when exposure to an allergen triggers
            a flood of chemicals that can send your body into shock.
            Anaphylaxis can occur within seconds or minutes of exposure to
            the allergen, can worsen quickly and can be fatal.
          </span>
          <span className="allergy-section-paragraph">
            Once you’ve been diagnosed with a food allergy, your allergist
            should prescribe an epinephrine auto-injector and teach you how
            to use it. You should also be given a written treatment plan
            describing what medications you’ve been prescribed and when they
            should be used. Check the expiration date of your auto-injector,
            note the expiration date on your calendar and ask your pharmacy
            about reminder services for prescription renewals.
          </span>
          <span className="allergy-section-paragraph">
            Anyone with a food allergy should always have his or her
            auto-injector close at hand. Be sure to have two doses
            available, as the severe reaction can recur in about 20 percent
            of individuals. There are no data to help predict who may need a
            second dose of epinephrine, so this recommendation applies to
            all patients with a food allergy.
          </span>
          <span className="allergy-section-paragraph">
            Use epinephrine immediately if you experience severe symptoms
            such as shortness of breath, repetitive coughing, weak pulse,
            hives, tightness in your throat, trouble breathing or
            swallowing, or a combination of symptoms from different body
            areas, such as hives, rashes or swelling on the skin coupled
            with vomiting, diarrhea or abdominal pain. Repeated doses may be
            necessary. You should call for an ambulance (or have someone
            nearby do so) and inform the dispatcher that epinephrine was
            administered and more may be needed. You should be taken to the
            emergency room; policies for monitoring patients who have been
            given epinephrine vary by hospital.
          </span>
          <span className="allergy-section-paragraph">
            If you are uncertain whether a reaction warrants epinephrine,
            use it right away; the benefits of epinephrine far outweigh the
            risk that a dose may not have been necessary.
          </span>
          <span className="allergy-section-paragraph">
            Common side effects of epinephrine may include anxiety,
            restlessness, dizziness and shakiness. In very rare instances,
            the medication can lead to abnormal heart rate or rhythm, heart
            attack, a sharp increase in blood pressure and fluid buildup in
            the lungs. If you have certain pre-existing conditions, such as
            heart disease or diabetes, you may be at a higher risk for
            adverse effects from epinephrine. Still, epinephrine is
            considered very safe and is the most effective medicine to treat
            severe allergic reactions.
          </span>
          <span className="allergy-section-paragraph">
            Other medications may be prescribed to treat symptoms of a food
            allergy, but it is important to note that there is no substitute
            for epinephrine: It is the only medication that can reverse the
            life-threatening symptoms of anaphylaxis.
          </span>

          <h4 className="allergy-section-mid-title">
            Managing food allergies in children
          </h4>

          <span className="allergy-section-paragraph">
            Because fatal and near-fatal food allergy reactions can occur at
            school or other places outside the home, parents of a child with
            food allergies need to make sure that their child’s school has a
            written emergency action plan. The plan should provide
            instructions on preventing, recognizing and managing food
            allergies and should be available in the school and during
            activities such as sporting events and field trips. If your
            child has been prescribed an auto-injector, be sure that you and
            those responsible for supervising your child understand how to
            use it.
          </span>
          <span className="allergy-section-paragraph">
            In November 2013, President Barack Obama signed into law the
            School Access to Emergency Epinephrine Act (PL 113-48), which
            encourages states to adopt laws requiring schools to have
            epinephrine auto-injectors on hand. As of late 2014, dozens of
            states had passed laws that either require schools to have a
            supply of epinephrine auto-injectors for general use or allow
            school districts the option of providing a supply of
            epinephrine. Many of these laws are new, and it is uncertain how
            well they are being implemented. As a result, ACAAI still
            recommends that providers caring for food-allergic children in
            states with such laws maintain at least two units of epinephrine
            per allergic child attending the school.
          </span>

          <h4 className="allergy-section-mid-title">
            Can food allergies be prevented?
          </h4>

          <span className="allergy-section-paragraph">
            In 2013, the American Academy of Pediatrics published a study
            which supported research suggesting that feeding solid foods to
            very young babies could promote allergies. It recommends against
            introducing solid foods to babies younger than 17 weeks. It also
            suggests exclusively breast-feeding “for as long as possible,”
            but stops short of endorsing earlier research supporting six
            months of exclusive breast-feeding.
          </span>
          <span className="allergy-section-paragraph">
            Research on the benefits of feeding hypoallergenic formulas to
            high-risk children – those born into families with a strong
            history of allergic diseases – is mixed.
          </span>
          <span className="allergy-section-paragraph">
            In the case of peanut allergy, the National Institute for
            Allergy and Infectious Disease (NIAID) issued new updated
            guidelines in 2017 in order to define high, moderate and
            low-risk infants for developing peanut allergy. The guidelines
            also address how to proceed with introduction based on risk.
          </span>
          <span className="allergy-section-paragraph">
            The updated guidelines are a breakthrough for the prevention of
            peanut allergy. Peanut allergy has become much more prevalent in
            recent years, and there is now a roadmap to prevent many new
            cases.
          </span>
          <span className="allergy-section-paragraph">
            According to the new guidelines, an infant at high risk of
            developing peanut allergy is one with severe eczema and/or egg
            allergy. The guidelines recommend introduction of
            peanut-containing foods as early as 4-6 months for high-risk
            infants who have already started solid foods, after determining
            that it is safe to do so. Parents should know that most infants
            are either moderate- or low-risk for developing peanut
            allergies, and most can have peanut-containing foods introduced
            at home. Whole peanuts should never be given to infants as they
            are a choking hazard. More information can be found here, and
            also in the ACAAI video, “Introducing peanut-containing foods to
            prevent peanut allergy”.
          </span>
          <span className="allergy-section-paragraph">
            Clinical studies are ongoing in food allergy to help develop
            tolerances to specific foods. Ask your board-certified allergist
            if you or your child may be a candidate for one of these
            studies.
          </span>
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
            Are there any treatments for food allergy?
          </h4>

          <span className="allergy-section-paragraph">
                Currently, avoiding the food you are allergic to is the only way
                to protect against a reaction. However, there is good news. Two
                clinical trials of patches are being conducted at major medical
                centers nationwide. The patches place a small amount of a food
                allergen into the skin daily, to make you less sensitive to the
                food. Another trial introduces very small amounts of a food
                allergen orally in increasing doses to make you less sensitive
                and less allergic to the food. There is a lot of hope for
                therapies that will manage food allergies in the future, but
                none are currently approved by the FDA. Current research is
                looking at ways to make you less sensitive, but not cure, food
                allergies.
              </span>

          <h4 className="allergy-section-mid-title">
            Do food allergens remain on objects? Can an allergic reaction
            occur from touching food allergens that remain on things like
            board games or computer keys?
          </h4>

          <span className="allergy-section-paragraph">
                Yes, food allergens can potentially remain on objects if they
                are not carefully cleaned. Simply touching an object that
                contains something you are allergic to would either do nothing,
                or at worst possibly cause a rash on your skin at the site of
                contact. Without swallowing any of the allergen, it’s highly
                unlikely you would have any further reaction. If you did, it
                would be exceptionally rare to develop a severe allergic
                reaction. In most cases, simply washing the area will stop the
                rash, and it’s like that no medication would be needed. It is a
                common myth that you can have a severe reaction from simply
                touching something without eating the food. Many studies have
                shown that if you wash your hands well with soap and water, as
                well as thoroughly clean the surface with detergent, you can
                effectively remove the allergen. Gel-based alcohol hand
                sanitizers will NOT remove allergens from your skin .
              </span>

          <h4 className="allergy-section-mid-title">
            Can food allergies develop as an adult?
          </h4>

          <span className="allergy-section-paragraph">
                Although most food allergies develop when you are a child, they
                can, rarely, develop as an adult. The most common food allergies
                for adults are shellfish – both crustaceans and mollusks – as
                well as tree nuts, peanuts and fish. Most adults with food
                allergies have had their allergy since they were children. An
                allergic reaction to a food can sometimes be missed in an adult
                because symptoms such as vomiting or diarrhea can be mistaken
                for the flu or food poisoning. Adults don’t always pay close
                attention to symptoms, which can be dangerous since crucial
                hints can be missed and place the adult at risk if they continue
                to eat the food.
              </span>
          <span className="allergy-section-paragraph">
                Oral allergy syndrome is something that can develop in
                adulthood. Also known as pollen-food syndrome, it is caused by
                cross-reacting allergens found in both pollen and raw fruits,
                vegetables, and some tree nuts. This is not a food allergy,
                though the symptoms occur from food, which can be confusing.
                This is a pollen allergy. The symptoms of oral allergy syndrome
                are an itchy mouth or tongue, or swelling of the lips or tongue.
                Symptoms are generally short-lived because the cross-reacting
                allergens are quickly digested, and do not involve any other
                part of the body. These symptoms can help distinguish oral
                allergy from a true food allergy.
              </span>

          <h4 className="allergy-section-mid-title">
            Can you outgrow food allergies?
          </h4>

          <span className="allergy-section-paragraph">
                Yes. This is an important point to emphasize. Children
                generally, but not always, outgrow allergies to milk, egg, soy
                and wheat. New research indicates that up to 25 percent of
                children may outgrow their peanut allergy, with slightly fewer
                expected to outgrow a tree nut allergy. There is no need to
                assume your child’s food allergy will be lifelong, though for
                many, this may be the case. If a food allergy develops as an
                adult, chances are much lower you will outgrow it. Food
                allergies in adults tend to be lifelong, though there has not
                been a lot of research in this area.
              </span>

          <h4 className="allergy-section-mid-title">
            What are the chances of having a severe reaction to airborne
            allergens?
          </h4>

          <span className="allergy-section-paragraph">
                Virtually none. No study has ever conclusively proven that
                allergens become airborne and cause symptoms to develop. Outside
                of a few case reports involving symptoms from fish allergy
                appearing when someone cooked fish, those with food allergies
                only have severe reactions after eating the allergic food. Many
                people with peanut allergy also worry about the dust from
                peanuts, particularly on airplanes. Most reactions probably
                happen after touching peanut dust that may be on tray tables or
                other surfaces. A recent study showed that wiping the surfaces
                to remove any dust resulted in fewer people reporting reactions
                during a flight.
              </span>

          <h4 className="allergy-section-mid-title">
            How much does it cost to get tested for food allergies?
          </h4>

          <span className="allergy-section-paragraph">
                Like most medical procedures, there isn’t a uniform cost for
                food allergy testing, and insurance coverage varies. Allergy
                testing is very often not necessary and cannot be used to screen
                for food allergy. Food allergy testing confirms a diagnosis if
                you have a history of allergic reactions to a food, and you
                should only be tested if you have had a reaction. A positive
                test itself does not make a diagnosis. For this reason, broad
                panel testing of a lot of different foods should not be
                performed. If testing is done, it should only be to the food you
                had a reaction to, and not to other “common” foods. Allergists
                are specially trained to conduct food allergy testing, so see an
                allergist if you think you have a food allergy.
              </span>

          <h4 className="allergy-section-mid-title">
            What is gluten? How common is gluten allergy?
          </h4>

          <span className="allergy-section-paragraph">
                Gluten is a protein found in grains, such as wheat, barley and
                rye. Some people are allergic to wheat, but that is not the same
                as a gluten allergy. Gluten allergy is a misleading term
                commonly confused with wheat allergy, or sometimes celiac
                disease. There is no such thing as a gluten allergy, but there
                is a condition called Celiac Disease. Celiac Disease is a
                digestive condition that is potentially serious if not diagnosed
                or treated. Symptoms of celiac disease include severe diarrhea
                after eating gluten-containing products, a rash, severe weight
                loss or failure to properly gain weight, and abdominal pain. In
                small children, you may only see poor weight gain and no pain,
                or other symptoms. Diagnosis of celiac disease can only be made
                by a board-certified gastroenterologist. It must also be made
                when the person is eating foods with gluten, as gluten avoidance
                is the active treatment.
              </span>
          <span className="allergy-section-paragraph">
                A gluten intolerance is not an allergy, and there are currently
                no tests for accurate diagnosis. People with certain symptoms
                might need to be tested for celiac disease, but few people with
                gluten intolerance have celiac disease. Gluten intolerance is
                not an indication for allergy testing and is not a condition
                where an allergist could offer help. There are many people who
                label themselves as “allergic” to gluten, and unfortunately
                limit their diet without having seen a specialist. People with
                gluten intolerance should be seen by their primary care provider
                or referred to a gastroenterologist if there is concern about
                celiac disease.
              </span>
        </div>
    );

    return (
        <div className={this.state.mainClassName}>
          <h1 className="page-header">
            Food allergy
          </h1>
          <div className="allergy-create-group-button">
            <Button type='primary'
                    size="large"
                    onClick={() => {
                      this.props.onConfirmSelectionOneAllergy(
                          selectedArray);
                      this.props.onSelect(this.props.foodAllergy._id);
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
                  <ScrollLink to="Triggers"
                              offset={mediaQuery.matches ? -120 : -50}
                              spy={true}
                              smooth={true}
                              duration={500}
                              isDynamic={true}>
                    Triggers
                  </ScrollLink>
                </div>
                <div className="ant-anchor-link">
                  <ScrollLink to="Diagnosing Food Allergies"
                              offset={mediaQuery.matches ? -120 : -50}
                              spy={true}
                              smooth={true}
                              duration={500}
                              isDynamic={true}>
                    Diagnosing Food Allergies
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
              <span className="allergy-section-paragraph">
                More than 50 million Americans have an allergy of some kind.
                Food allergies are estimated to affect 4 to 6 percent of
                children and 4 percent of adults, according to the Centers for
                Disease Control and Prevention.
              </span>
              <span className="allergy-section-paragraph">
                Food allergy symptoms are most common in babies and children,
                but they can appear at any age. You can even develop an allergy
                to foods you have eaten for years with no problems. Learn more
                about the types of food allergies.
              </span>
              {symptoms}
              {triggers}
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
              {hash === 'triggers' ?
                  triggers
                  :
                  null
              }
              {
                hash === 'diagnosis' ?
                    diagnosis
                    :
                    null
              }
              {
                hash === 'management' ?
                    management
                    :
                    null
              }
              {
                hash === 'faq' ?
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

export default FoodAllergy;

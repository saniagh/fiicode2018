import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Checkbox, Button } from 'antd';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

import CreateGroupView from './CreateGroupView.jsx';

class AllAllergies extends Component {
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
  }

  render() {

    const columns = [
      {
        Header: 'Select',
        maxWidth: 46,
        accessor: '_id',
        Cell: props => <Checkbox
            onChange={() => this.props.onSelect(props.value)}/>,
      },
      {
        Header: 'Species',
        accessor: 'species',
      },
      {
        Header: 'Common',
        accessor: 'common',
      },
      {
        Header: 'IUISAllergen',
        accessor: 'iuisAllergen',
      },
      {
        Header: 'Type',
        accessor: 'type',
      },
      {
        Header: 'Group',
        accessor: 'group',
      },
      {
        Header: 'Length',
        accessor: 'length',
      },
      {
        Header: 'Accession',
        accessor: 'accession',
        Cell: props => <a
            href={`https://www.ncbi.nlm.nih.gov/protein/${props.value}`}
            target="_blank">{props.value}</a>,
      },
      {
        Header: 'GI#@',
        accessor: 'gi',
      },
      {
        Header: 'First Version',
        accessor: 'firstVersion',
      },
    ];

    return (
        <div className={this.state.mainClassName}>
          <h1 className="page-header">
            Choose an allergy
          </h1>
          <div className="allergies-capsules">
            <div className="allergy-image-container">
              <Link to={`/allergies/food-allergy`}>
                <img src="./food-allergy.jpg" alt=""/>
              </Link>
            </div>
            <h3 className="allergy-header">
              <Link to={`/allergies/food-allergy`}>
                Food Allergy
              </Link>
            </h3>
            <p className="allergy-paragraph">
              Food allergies are estimated to affect 4 to 6 percent of children
              and 4 percent of adults.
            </p>
          </div>

          <div className="allergies-capsules">
            <div className="allergy-image-container">
              <Link to={`/allergies/skin-allergy`}>
                <img src="./skin-allergy.jpg" alt=""/>
              </Link>
            </div>
            <h3 className="allergy-header">
              <Link to={`/allergies/skin-allergy`}>
                Skin Allergy
              </Link>
            </h3>
            <p className="allergy-paragraph">
              Learn about allergic skin reactions and what causes them.
            </p>
          </div>

          <div className="allergies-capsules">
            <div className="allergy-image-container">
              <Link to={`/allergies/dust-allergy`}>
                <img src="./dust-allergy.jpg" alt=""/>
              </Link>
            </div>
            <h3 className="allergy-header">
              <Link to={`/allergies/dust-allergy`}>
                Dust Allergy
              </Link>
            </h3>
            <p className="allergy-paragraph">
              People who have dust allergies are familiar with sneezing—but
              sneezing isn’t the only uncomfortable symptom.
            </p>
          </div>

          <div className="allergies-capsules">
            <div className="allergy-image-container">
              <Link to={`/allergies/insect-sting-allergy`}>
                <img src="./sting-allergy.jpg" alt=""/>
              </Link>
            </div>
            <h3 className="allergy-header">
              <Link to={`/allergies/insect-sting-allergy`}>
                Insect Sting Allergy
              </Link>
            </h3>
            <p className="allergy-paragraph">
              Stings from five insects - honeybees, hornets, wasps, yellow
              jackets and fire ants - are known to cause allergic reactions to
              the venom injected into the skin.
            </p>
          </div>

          <div className="allergies-capsules">
            <div className="allergy-image-container">
              <Link to={`/allergies/pet-allergies`}>
                <img src="./pet-allergy.jpg" alt=""/>
              </Link>
            </div>
            <h3 className="allergy-header">
              <Link to={`/allergies/pet-allergies`}>
                Pet Allergies
              </Link>
            </h3>
            <p className="allergy-paragraph">
              Pet allergies can contribute to constant allergy symptoms, such as
              causing your eyes to water, or causing you to start sneezing.
            </p>
          </div>

          <div className="allergies-capsules">
            <div className="allergy-image-container">
              <Link to={`/allergies/eye-allergies`}>
                <img src="./eye-allergy.jpg" alt=""/>
              </Link>
            </div>
            <h3 className="allergy-header">
              <Link to={`/allergies/eye-allergies`}>
                Eye Allergies
              </Link>
            </h3>
            <p className="allergy-paragraph">
              Learn about eye allergies, a condition that affects millions of
              Americans.
            </p>
          </div>

          <div className="allergies-capsules">
            <div className="allergy-image-container">
              <Link to={`/allergies/drug-allergy`}>
                <img src="./drug-allergy.jpg" alt=""/>
              </Link>
            </div>
            <h3 className="allergy-header">
              <Link to={`/allergies/drug-allergy`}>
                Drug Allergies
              </Link>
            </h3>
            <p className="allergy-paragraph">
              If you develop a rash, hives or difficulty breathing after taking
              certain medications, you may have a drug allergy.
            </p>
          </div>

          <div className="allergies-capsules">
            <div className="allergy-image-container">
              <Link to={`/allergies/allergic-rhinitis`}>
                <img src="./allergic-rhinitis.jpg" alt=""/>
              </Link>
            </div>
            <h3 className="allergy-header">
              <Link to={`/allergies/allergic-rhinitis`}>
                Allergic Rhinitis
              </Link>
            </h3>
            <p className="allergy-paragraph">
              If you sneeze a lot, if your nose is often runny or stuffy, or if
              your eyes, mouth or skin often feels itchy, you may have allergic
              rhinitis.
            </p>
          </div>

          <div className="allergies-capsules">
            <div className="allergy-image-container">
              <Link to={`/allergies/latex-allergy`}>
                <img src="./latex-allergy.jpg" alt=""/>
              </Link>
            </div>
            <h3 className="allergy-header">
              <Link to={`/allergies/latex-allergy`}>
                Latex Allergy
              </Link>
            </h3>
            <p className="allergy-paragraph">
              Allergic reactions to latex may be serious and can very rarely be
              fatal. If you have latex allergy you should limit or avoid future
              exposure to latex products.
            </p>
          </div>

          <div className="allergies-capsules">
            <div className="allergy-image-container">
              <Link to={`/allergies/mold-allergy`}>
                <img src="./mold-allergy.jpg" alt=""/>
              </Link>
            </div>
            <h3 className="allergy-header">
              <Link to={`/allergies/mold-allergy`}>
                Mold Allergy
              </Link>
            </h3>
            <p className="allergy-paragraph">
              Molds live everywhere—on logs and on fallen leaves, and in moist
              places like bathrooms and kitchens.
            </p>
          </div>

          <div className="allergies-capsules">
            <div className="allergy-image-container">
              <Link to={`/allergies/sinus-infection`}>
                <img src="./sinus-infection.jpg" alt=""/>
              </Link>
            </div>
            <h3 className="allergy-header">
              <Link to={`/allergies/sinus-infection`}>
                Sinus Infection
              </Link>
            </h3>
            <p className="allergy-paragraph">
              Sinus infection is a major health problem. It afflicts 31 million
              people in the United States.
            </p>
          </div>

          <div className="allergies-capsules">
            <div className="allergy-image-container">
              <Link to={`/allergies/cockroach-allergy`}>
                <img src="./cockroaches-allergy.png" alt=""/>
              </Link>
            </div>
            <h3 className="allergy-header">
              <Link to={`/allergies/cockroach-allergy`}>
                Cockroach Allergy
              </Link>
            </h3>
            <p className="allergy-paragraph">
              Some people develop allergy symptoms when they are around
              cockroaches.
            </p>
          </div>

          <div>
            <h1 className="page-header border-top">
              Protein-Based Allergens and Allergies
            </h1>
            <div className="confirm-selection-button-container">
              <Button type={this.props.selected.length !== 0 ?
                  'primary' :
                  'default'}
                      disabled={this.props.selected.length === 0}
                      size="large"
                      onClick={this.props.onConfirmSelection}>
                {this.props.selected.length !== 0 ?
                    <Link to={`/create-group`}>
                      Confirm selection
                    </Link>
                    :
                    'Select an allergy to create a group'
                }
              </Button>
            </div>
            <div className="react-table-container-padding">
              <ReactTable data={this.props.allergies}
                          columns={columns}/>
            </div>
          </div>
        </div>
    );
  }
}

export default AllAllergies;

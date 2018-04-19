import React, { Component } from 'react';
import { notification } from 'antd';
import { connect } from 'react-redux';
import axios from 'axios';
import { Route } from 'react-router-dom';

import {
  onConfirmSelectionAction,
} from './allergiesActions.js';

import AllAllergies from './AllAllergies.jsx';

import FoodAllergyView from './allergies/FoodAllergyView.jsx';
import SkinAllergyView from './allergies/SkinAllergyView.jsx';
import DustAllergyView from './allergies/DustAllergyView.jsx';
import InsectStingAllergyView from './allergies/InsectStingAllergyView.jsx';
import PetAllergiesView from './allergies/PetAllergiesView.jsx';
import EyeAllergiesView from './allergies/EyeAllergiesView.jsx';
import DrugAllergiesView from './allergies/DrugAllergiesView.jsx';
import AllergicRhinitisView from './allergies/AllergicRhinitisView.jsx';
import LatexAllergyView from './allergies/LatexAllergyView.jsx';
import MoldAllergyView from './allergies/MoldAllergyView.jsx';
import SinusInfectionView from './allergies/SinusInfectionView.jsx';
import CockroachAllergyView from './allergies/CockroachAllergyView.jsx';

let createHandlers = function (dispatch) {
  let onConfirmSelection = function (selected, allergies) {
    dispatch(onConfirmSelectionAction(selected, allergies));
  };

  return {
    onConfirmSelection,
  };
};

class AllAllergiesView extends Component {
  constructor(props) {
    super(props);

    this.handlers = createHandlers(this.props.dispatch);

    this.state = {
      fetchingAllergies: false,
      allAllergies: [],
      allergies: [],
      selected: [],
      foodAllergy: {},
      skinAllergy: {},
      dustAllergy: {},
      insectStingAllergy: {},
      petAllergies: {},
      eyeAllergies: {},
      drugAllergies: {},
      allergicRhinitis: {},
      latexAllergy: {},
      moldAllergy: {},
      sinusInfection: {},
      cockroachAllergy: {},
    };
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: '/allergies/get-allergies',
    }).then((res) => {
      let allergies = res.data.allergies;
      let length = allergies.length;
      let newAllergies = [];

      for (let i = 0; i < length; i++) {
        if (allergies[i].isGeneralAllergy === false)
          newAllergies.push(allergies[i]);
        if (allergies[i].type === 'Food Allergy')
          this.setState({
            foodAllergy: allergies[i],
          });
        if (allergies[i].type === 'Skin Allergy')
          this.setState({
            skinAllergy: allergies[i],
          });
        if (allergies[i].type === 'Dust Allergy')
          this.setState({
            dustAllergy: allergies[i],
          });
        if (allergies[i].type === 'Insect Sting Allergy')
          this.setState({
            insectStingAllergy: allergies[i],
          });
        if (allergies[i].type === 'Pet Allergies')
          this.setState({
            petAllergies: allergies[i],
          });
        if (allergies[i].type === 'Eye Allergies')
          this.setState({
            eyeAllergies: allergies[i],
          });
        if (allergies[i].type === 'Drug Allergies')
          this.setState({
            drugAllergies: allergies[i],
          });
        if (allergies[i].type === 'Allergic Rhinitis')
          this.setState({
            allergicRhinitis: allergies[i],
          });
        if (allergies[i].type === 'Latex Allergy')
          this.setState({
            latexAllergy: allergies[i],
          });
        if (allergies[i].type === 'Mold Allergy')
          this.setState({
            moldAllergy: allergies[i],
          });
        if (allergies[i].type === 'Sinus Infection')
          this.setState({
            sinusInfection: allergies[i],
          });
        if (allergies[i].type === 'Cockroach Allergy')
          this.setState({
            cockroachAllergy: allergies[i],
          });
      }

      this.setState({
        allergies: newAllergies,
        allAllergies: res.data.allergies,
      });
    }).catch((err) => {
    });
  }

  onSelect = (id) => {

    let exists = false;

    let newSelected = this.state.selected;

    for (let i = 0; i < newSelected.length; i++) {
      if (newSelected[i] === id) {
        newSelected = newSelected.filter(a => a !== id);
        exists = true;
      }
    }

    if (!exists) {
      newSelected.push(id);
    }

    this.setState({
      selected: newSelected,
    });
  };

  onConfirmSelection = () => {
    this.handlers.onConfirmSelection(this.state.selected, this.state.allergies);
    if (this.state.selected.length === 0) {
      notification.warning({
        message: 'No allergies selected',
        description: 'Cannot create group unless you select at least one allergy',
      });
    }
  };

  onConfirmSelectionOneAllergy = (allergy) => {
    this.handlers.onConfirmSelection(allergy, this.state.allAllergies);
  };

  render() {
    return (
        <div>
          <Route exact path={`/allergies`} render={() => {
            return <AllAllergies allergies={this.state.allergies}
                                 selected={this.state.selected}
                                 onSelect={this.onSelect}
                                 onConfirmSelection={this.onConfirmSelection}/>;
          }}/>
          <Route exact path={`/allergies/food-allergy`} render={() => {
            return <FoodAllergyView foodAllergy={this.state.foodAllergy}
                                    onSelect={this.onSelect}
                                    onConfirmSelectionOneAllergy={this.onConfirmSelectionOneAllergy}/>;
          }}/>
          <Route exact path={`/allergies/skin-allergy`} render={() => {
            return <SkinAllergyView skinAllergy={this.state.skinAllergy}
                                    onSelect={this.onSelect}
                                    onConfirmSelectionOneAllergy={this.onConfirmSelectionOneAllergy}/>;
          }}/>
          <Route exact path={`/allergies/dust-allergy`} render={() => {
            return <DustAllergyView dustAllergy={this.state.dustAllergy}
                                    onSelect={this.onSelect}
                                    onConfirmSelectionOneAllergy={this.onConfirmSelectionOneAllergy}/>;
          }}/>
          <Route exact path={`/allergies/insect-sting-allergy`} render={() => {
            return <InsectStingAllergyView
                insectStingAllergy={this.state.insectStingAllergy}
                onSelect={this.onSelect}
                onConfirmSelectionOneAllergy={this.onConfirmSelectionOneAllergy}/>;
          }}/>
          <Route exact path={`/allergies/pet-allergies`} render={() => {
            return <PetAllergiesView petAllergies={this.state.petAllergies}
                                     onSelect={this.onSelect}
                                     onConfirmSelectionOneAllergy={this.onConfirmSelectionOneAllergy}/>;
          }}/>
          <Route exact path={`/allergies/eye-allergies`} render={() => {
            return <EyeAllergiesView eyeAllergies={this.state.eyeAllergies}
                                     onSelect={this.onSelect}
                                     onConfirmSelectionOneAllergy={this.onConfirmSelectionOneAllergy}/>;
          }}/>
          <Route exact path={`/allergies/drug-allergies`} render={() => {
            return <DrugAllergiesView drugAllergies={this.state.drugAllergies}
                                      onSelect={this.onSelect}
                                      onConfirmSelectionOneAllergy={this.onConfirmSelectionOneAllergy}/>;
          }}/>
          <Route exact path={`/allergies/allergic-rhinitis`} render={() => {
            return <AllergicRhinitisView
                allergicRhinitis={this.state.allergicRhinitis}
                onSelect={this.onSelect}
                onConfirmSelectionOneAllergy={this.onConfirmSelectionOneAllergy}/>;
          }}/>
          <Route exact path={`/allergies/latex-allergy`} render={() => {
            return <LatexAllergyView latexAllergy={this.state.latexAllergy}
                                     onSelect={this.onSelect}
                                     onConfirmSelectionOneAllergy={this.onConfirmSelectionOneAllergy}/>;
          }}/>
          <Route exact path={`/allergies/mold-allergy`} render={() => {
            return <MoldAllergyView moldAllergy={this.state.moldAllergy}
                                    onSelect={this.onSelect}
                                    onConfirmSelectionOneAllergy={this.onConfirmSelectionOneAllergy}/>;
          }}/>
          <Route exact path={`/allergies/sinus-infection`} render={() => {
            return <SinusInfectionView
                sinusInfection={this.state.sinusInfection}
                onSelect={this.onSelect}
                onConfirmSelectionOneAllergy={this.onConfirmSelectionOneAllergy}/>;
          }}/>
          <Route exact path={`/allergies/cockroach-allergy`} render={() => {
            return <CockroachAllergyView
                cockroachAllergy={this.state.cockroachAllergy}
                onSelect={this.onSelect}
                onConfirmSelectionOneAllergy={this.onConfirmSelectionOneAllergy}/>;
          }}/>
        </div>
    );
  }
}

export default connect()(AllAllergiesView);

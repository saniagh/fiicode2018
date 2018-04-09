import {
  ON_CONFIRM_SELECTION,
} from '../../modules/actionTypes.js';

export default function allergiesReducer(
    state = {
      selected: [],
      allergies: [],
    }, action) {
  switch (action.type) {
    case ON_CONFIRM_SELECTION:
      return {
        ...state,
        selected: action.selected,
        allergies: action.allergies,
      };
    default:
      return state;
  }
}

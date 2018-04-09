import {
  ON_CONFIRM_SELECTION,
} from '../../modules/actionTypes.js';

export function onConfirmSelectionAction(selected, allergies) {
  return function (dispatch) {
    dispatch({
      type: ON_CONFIRM_SELECTION,
      selected: selected,
      allergies: allergies,
    });
  };
}

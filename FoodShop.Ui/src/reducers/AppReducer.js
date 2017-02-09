import * as types from '../constants/AppConstants';
import * as utils from '../utils/utils';

const initialState = {
  selectedMeals: []
};

export default function AppReducer(state = initialState, action) {
  switch (action.type) {

    case types.SELECT_MEAL:
      return {
        ...state,
        selectedMeals: mergeMeals(action)
      };

    default:
      return state;
  }
}

function mergeMeals(action) {
  let { selected, meals } = action;
  return utils.mergeMeals(selected, meals);
}

import * as types from '../constants/AppConstants';

export function selectMeal(selected, meals) {
  return {
    type: types.SELECT_MEAL,
    selected,
    meals
  };
}
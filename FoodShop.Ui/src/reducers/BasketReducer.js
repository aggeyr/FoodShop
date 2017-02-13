import * as types from '../constants/BasketConstants';
const initialState = {};

export default function BasketReducer(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_TOTAL_SUCCESS:
      return {
        ...state,
        total: action.data
      };

    default:
      return state;
  }
}
import * as types from '../constants/MenuConstants';

const initialState = {
  menus: []
};

export default function MenuReducer(state = initialState, action) {
  switch (action.type) {

    case types.GET_MENU_SUCCESS:
      return {
        ...state,
        menus: action.data
      };

    default:
      return state;
  }
}
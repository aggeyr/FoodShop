import * as types from '../constants/MenuConstants';
import service from '../service/service';

export function getMenus(categoryName) {
  return (dispatch) => {
    dispatch({
      type: types.GET_MENU
    });

    service.getMeals(categoryName, success, fail);

    function success(data, status) {
      dispatch({
        type: types.GET_MENU_SUCCESS,
        data,
        status
      });
    }

    function fail(data, status) {
      dispatch({
        type: types.GET_MENU_FAIL,
        data,
        status
      });
    }
  };
}
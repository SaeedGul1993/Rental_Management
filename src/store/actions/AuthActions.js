import {USER_DETAIL} from '../actionTypes';

export const AuthDetailMethod = data => {
  return dispatch => {
    dispatch({type: USER_DETAIL, payload: data});
  };
};

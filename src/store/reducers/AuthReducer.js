import {USER_DETAIL} from '../actionTypes';

const initialStates = {
  userDetail: null,
};

export default AuthReducer = (state = initialStates, action) => {
  switch (action.type) {
    case USER_DETAIL:
      return {
        ...state,
        userDetail: action.payload,
      };
      break;
    default:
      return {
        ...state,
      };
  }
};

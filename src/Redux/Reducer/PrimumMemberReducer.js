import { premiumUserConst } from "./../Constanse";

const InitialState = {
  loading: false,
  error: null,
  userList: [],
};

export const premiumUserReducer = (state = InitialState, action) => {
  switch (action.type) {
    case premiumUserConst.premiumUserReques:
      return {
        ...state,
        loading: true,
      };
    case premiumUserConst.premiumUserSuccess:
      return {
        ...state,
        loading: false,
        userList: action.payload,
      };
    case premiumUserConst.premiumUserFail:
      return {
        ...state,
        loading: false,
        userList: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

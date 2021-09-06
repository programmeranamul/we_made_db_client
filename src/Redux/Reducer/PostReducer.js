import { postConst } from "../Constanse";

const InitialState = {
  loading: true,
  success: "",
  error: null,
};
export const postReducer = (state = InitialState, action) => {
  switch (action.type) {
    case postConst.postRequest:
      return {
        ...InitialState,
        loading: true,
      };
    case postConst.postSuccess:
      return {
        ...state,
        loading: false,
        error: null,
        success: action.payload,
      };
    case postConst.postFail:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: "",
      };
    default:
      return state;
  }
};

import { adminConstanse } from "../Constanse";

const AdminState = {
  loading: false,
  error: null,
  success: "",
  userList: [],
};
export const adminStore = (state = AdminState, action) => {
  switch (action.type) {
    case adminConstanse.getAllUserSuccess:
      return {
        ...AdminState,
        userList: action.payload,
      };
    case adminConstanse.getAllUserFail:
      return {
        ...state,
        error: action.payload.error,
      };
    case adminConstanse.addNewAdminRequest:
      return {
        ...state,
        loading: true,
        error: null,
        success: "",
      };
    case adminConstanse.addNewAdminSuccess:
      return {
        ...state,
        loading: false,
        error: null,
        success: action.payload.message,
      };
    case adminConstanse.addNewAdminFail:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        success: "",
      };
    default:
      return state;
  }
};

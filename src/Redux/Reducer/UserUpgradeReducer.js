import { userUpgrafeConst } from "../Constanse";

const userUpgardeState = {
  loading: false,
  error: null,
  success: "",
};
export const userUgradeReducer = (state = userUpgardeState, action) => {
  switch (action.type) {
    case userUpgrafeConst.userUpgradeRequest:
      return {
        ...userUpgardeState,
        loading: true,
      };
    case userUpgrafeConst.userUpgradeSuccess:
      return {
        ...state,
        loading: false,
        error: null,
        success: action.payload,
      };
    case userUpgrafeConst.userUpgradeFail:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: "",
      };
    case userUpgrafeConst.clearUpgarde:
      return {
        ...userUpgardeState,
      };
    default:
      return state;
  }
};

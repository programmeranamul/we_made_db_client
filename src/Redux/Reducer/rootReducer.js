import { combineReducers } from "redux";
import { buyerAuthReducer } from "./BuyerAuthReducer";
import { conactUsReducer } from "./ContactUsReducer";
import { carearReducer } from "./CarearReducer";
import { adminStore } from "./AddAdminReducer";
import { userUgradeReducer } from "./UserUpgradeReducer";
import { premiumUserReducer } from "./PrimumMemberReducer";

export const rootReducer = combineReducers({
  buyerAuthReducer: buyerAuthReducer,
  conactUsReducer: conactUsReducer,
  carearReducer: carearReducer,
  adminStore: adminStore,
  userUgradeStore: userUgradeReducer,
  premiumUserStore: premiumUserReducer,
});

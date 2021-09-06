import { combineReducers } from "redux";
import { buyerAuthReducer } from "./BuyerAuthReducer";
import { conactUsReducer } from "./ContactUsReducer";
import { carearReducer } from "./CarearReducer";
import { adminStore } from "./AddAdminReducer";
import { userUgradeReducer } from "./UserUpgradeReducer";
import { premiumUserReducer } from "./PrimumMemberReducer";
import { postReducer } from "./PostReducer";
import { allPostReducer } from './AllPostReducer';
import { allBuyerPostReducer } from './BuyerPostReducer';

export const rootReducer = combineReducers({
  buyerAuthReducer: buyerAuthReducer,
  conactUsReducer: conactUsReducer,
  carearReducer: carearReducer,
  adminStore: adminStore,
  userUgradeStore: userUgradeReducer,
  premiumUserStore: premiumUserReducer,
  postStore: postReducer,
  allPostReducer: allPostReducer,
  allBuyerPostStore: allBuyerPostReducer
});

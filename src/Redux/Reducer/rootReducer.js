import { combineReducers } from "redux";
import { buyerAuthReducer } from "./BuyerAuthReducer";
import { conactUsReducer } from "./ContactUsReducer";
import { carearReducer } from "./CarearReducer";
import { adminStore } from "./AddAdminReducer";

export const rootReducer = combineReducers({
  buyerAuthReducer: buyerAuthReducer,
  conactUsReducer: conactUsReducer,
  carearReducer: carearReducer,
  adminStore: adminStore,
});

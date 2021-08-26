import { combineReducers } from "redux";
import { buyerAuthReducer } from './BuyerAuthReducer';

export const rootReducer = combineReducers({
    buyerAuthReducer: buyerAuthReducer,
});
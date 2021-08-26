import {
  buyserAuthConstanse,
  logedInConstanse,
  logOutConstanse,
  activateEmail,
} from "./../Constanse";

const buyerInitialState = {
  loading: false,
  error: null,
  message: "",
  token: null,
  authenticate: false,
  actMessage: "",
  buyer: {},
};

export const buyerAuthReducer = (state = buyerInitialState, action) => {
  switch (action.type) {
    case buyserAuthConstanse.buyerSingupRequest:
      return {
        ...buyerInitialState,
        loading: true,
      };
    case buyserAuthConstanse.buyerSingUpSuccess:
      return {
        ...state,
        error: null,
        loading: false,
        authenticate: true,
        token: action.payload.token,
        message: action.payload.message,
        buyer: action.payload.buyer,
      };
    case buyserAuthConstanse.buyerSingUpFail:
      return {
        ...buyerInitialState,
        authenticate: false,
        error: action.payload.error,
      };
    case logedInConstanse.logedInRequest: {
      return {
        ...buyerInitialState,
        loading: true,
        authenticate: false,
      };
    }
    case logedInConstanse.logedInSuccess: {
      return {
        ...state,
        error: null,
        loading: false,
        authenticate: true,
        token: action.payload.token,
        message: action.payload.message,
        buyer: action.payload.buyer,
      };
    }
    case logedInConstanse.logedInFail: {
      return {
        ...buyerInitialState,
        error: action.payload.error,      
      };
    }
    case logOutConstanse.logoutRequest: {
      return { ...state, loading: true };
    }
    case logOutConstanse.logOutSuccess: {
      return { ...buyerInitialState };
    }
    case activateEmail.activateEmailSuccessConstanse: {
      return {
        ...buyerInitialState,
        authenticate: false,
        actMessage: action.payload,
      };
    }

    default:
      return state;
  }
};

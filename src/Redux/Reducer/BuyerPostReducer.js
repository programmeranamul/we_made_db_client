import { allByerPOstConst } from "./../Constanse";

const InitialState = {
  loading: false,
  postList: [],
  error: null,
};

export const allBuyerPostReducer = (state = InitialState, action) => {
  switch (action.type) {
    case allByerPOstConst.requestAllBuyerPost:
      return {
        ...InitialState,
        loading: true,
      };
    case allByerPOstConst.successAllBuyerPost:
      return {
        ...InitialState,
        postList: action.payload,
      };
    case allByerPOstConst.failAllBuyerPost:
      return {
        ...InitialState,
        error: action.payload,
      };
    default:
      return state;
  }
};

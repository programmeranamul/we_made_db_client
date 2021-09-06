import { allPostConst } from "./../Constanse";

const InitialState = {
  loading: false,
  postList: [],
  error: null,
};

export const allPostReducer = (state = InitialState, action) => {
  switch (action.type) {
    case allPostConst.requestAllPost:
      return {
        ...InitialState,
        loading: true,
      };
    case allPostConst.successAllPost:
      return {
        ...InitialState,
        postList: action.payload,
      };
    case allPostConst.failAllPost:
      return {
        ...InitialState,
        error: action.payload,
      };
    default:
      return state;
  }
};

import axios from "axios";
import { allByerPOstConst, allPostConst } from "./../Constanse";
const token = localStorage.getItem("token");

//create new post for buyer
export const buyerPost = async (data) => {
  const res = await axios.post(
    "https://ancient-dawn-67469.herokuapp.com/admin/posts/buyer",
    data,
    {
      headers: {
        Authorization: `bearer ${token}`,
      },
    }
  );
  console.log(res);
};

//get all buyer post

export const getAllBuyerPost = () => {
  return async (dispatch) => {
    dispatch({ type: allByerPOstConst.requestAllBuyerPost });
    try {
      const res = await axios.get(
        "https://ancient-dawn-67469.herokuapp.com/admin/posts/buyer/all"
      );
      console.log(res);
      if (res.status === 200) {
        dispatch({
          type: allByerPOstConst.successAllBuyerPost,
          payload: res.data,
        });
      }
    } catch (e) {
      dispatch({
        type: allByerPOstConst.failAllBuyerPost,
        payload: e.response.data.error,
      });
    }
  };
};

//create buyer post
export const sellerPost = async (data) => {
  const res = await axios.post(
    "https://ancient-dawn-67469.herokuapp.com/admin/posts/seller",
    data,
    {
      headers: {
        Authorization: `bearer ${token}`,
      },
    }
  );
  console.log(res);
};

//get all seler post
export const getSellerAllPost = () => {
  return async (dispatch) => {
    dispatch({ type: allPostConst.requestAllPost });
    try {
      const res = await axios.get(
        "https://ancient-dawn-67469.herokuapp.com/admin/posts/seller/all"
      );
      console.log(res);
      if (res.status === 200) {
        dispatch({
          type: allPostConst.successAllPost,
          payload: res.data,
        });
      }
    } catch (e) {
      dispatch({
        type: allPostConst.failAllPost,
        payload: e.response.data.error,
      });
    }
  };
};


// delet seller post
export const deletSellerPost = (_id) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        "https://ancient-dawn-67469.herokuapp.com/admin/posts/seller/delet",
        { _id },
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      );
      dispatch(getSellerAllPost());
    } catch (e) {
      console.log(e.response.data.error);
    }
  };
};


//delet buyer post 
export const deletBuyerPost = (_id) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        "https://ancient-dawn-67469.herokuapp.com/admin/posts/buyer/delet",
        { _id },
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      );
      dispatch(getAllBuyerPost());
    } catch (e) {
      console.log(e.response.data.error);
    }
  };
};
import {
  activateEmail,
  buyserAuthConstanse,
  logedInConstanse,
  logOutConstanse,
} from "./../Constanse";
import axios from "axios";

export const buyerSingup = (datas) => {
  return async (dispatch) => {
    console.log(datas);
    dispatch({ type: buyserAuthConstanse.buyerSingupRequest });
    try {
      const res = await axios.post(
        "https://ancient-dawn-67469.herokuapp.com/account/active",
        datas
      );
      const { buyer, token, message } = res.data;
      localStorage.setItem("buyer", JSON.stringify(buyer));
      localStorage.setItem("token", token);
      dispatch({
        type: buyserAuthConstanse.buyerSingUpSuccess,
        payload: {
          buyer,
          token,
          message,
        },
      });
    } catch (e) {
      console.log(e.response.data.error);
      dispatch({
        type: buyserAuthConstanse.buyerSingUpFail,
        payload: {
          error: e.response.data.error,
        },
      });
    }
  };
};

// apply for email for singup
// export const applyActivation = async (data) => {
//   // return async (dispatch) => {
//   //   console.log("call");
//   //   console.log(data);
//   //   const res = await axios.post("http://localhost:8080/joinin", data);
//   //   console.log(res);
//   // };
//   console.log("object", data);
// };

export const applyActivation = (data) => {
  return async (dispatch) => {
    dispatch({ type: buyserAuthConstanse.buyerSingupRequest });
    try {
      const res = await axios.post("https://ancient-dawn-67469.herokuapp.com/joinin", data);
      dispatch({
        type: activateEmail.activateEmailSuccessConstanse,
        payload: "Go to your email and active your account",
      });
    } catch (e) {
      dispatch({
        type: buyserAuthConstanse.buyerSingUpFail,
        payload: {
          error: e.response.data.error,
        },
      });
    }
    //   try {
    //     const res = await axios.post("http://localhost:8080/joinin", data);
    //     dispatch({type:activateEmail.activateEmailConstanse, payload:"Active email"})
    //   } catch (e) {
    //     dispatch({
    //       type: buyserAuthConstanse.buyerSingUpFail,
    //       payload: {
    //         error: e.response.data.error,
    //       },
    //     });
    //   }

    // };
    console.log("true");
  };
};

//buyer login
export const login = (datas) => {
  return async (dispatch) => {
    dispatch({ type: logedInConstanse.logedInRequest });
    try {
      const res = await axios.post("https://ancient-dawn-67469.herokuapp.com/login", datas);
      const { buyer, token, message } = res.data;
      localStorage.setItem("buyer", JSON.stringify(buyer));
      localStorage.setItem("token", token);
      dispatch({
        type: logedInConstanse.logedInSuccess,
        payload: {
          token,
          buyer,
          message: "Logedin Success",
        },
      });
    } catch (e) {
      dispatch({
        type: logedInConstanse.logedInFail,
        payload: {
          error: e.response.data.error,
        },
      });
    }
  };
};

//if buyer loged in
export const ifLogedIN = () => {
  return async (dispatch) => {
    console.log("object logedin");
    const token = localStorage.getItem("token");
    const buyer = JSON.parse(localStorage.getItem("buyer"));

    if (token && buyer) {
      try {
        dispatch({
          type: logedInConstanse.logedInSuccess,
          payload: {
            token,
            buyer,
            message: "Logedin Success",
          },
        });
      } catch (e) {
        dispatch({
          type: logedInConstanse.logedInFail,
          payload: {
            error: e.response.data.error,
          },
        });
      }
    }
  };
};

//logout

export const logOut = () => {
  return async (dispatch) => {
    dispatch({ type: logOutConstanse.logoutRequest });
    try {
      // const res = await axios.post("https://ancient-dawn-67469.herokuapp.com/logout");
      // if (res.status === 200) {
    localStorage.clear();
      //   dispatch({ type: logOutConstanse.logOutSuccess });
      // } else {
      // }
      dispatch({ type: logOutConstanse.logOutSuccess })
    } catch (e) {
      dispatch({
        type: logOutConstanse.logoutRequest,
        payload: { error: "Fail to login" },
      });
    }
  };
};
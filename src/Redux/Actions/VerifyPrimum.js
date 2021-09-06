import axios from "axios";

export const checkVerifyP = async (token) => {
  
  try{
    const res = await axios.post("https://ancient-dawn-67469.herokuapp.com/verify/premium", {token});
  }catch(e){
    console.log(e);
  }
};

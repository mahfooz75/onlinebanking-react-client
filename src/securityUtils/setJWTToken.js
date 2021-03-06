import axios from "axios";

const setJWTToken = (token) => {
  if (token) {
    console.log("Token >> " + token);
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};
export default setJWTToken;

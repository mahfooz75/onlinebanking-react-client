import axios from "axios";
import { GET_TRANSACTIONS, GET_ERRORS } from "./types";

export const getAllTransactions = (transactionType) => async (dispatch) => {
  try {
    const res = await axios.get(`/accounts/${transactionType}`);
    dispatch({
      type: GET_TRANSACTIONS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

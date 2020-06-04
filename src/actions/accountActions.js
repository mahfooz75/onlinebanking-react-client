import axios from "axios";
import {
  GET_SAVINGS_ACCOUNT,
  GET_ERRORS,
  GET_ALL_ACCOUNT,
  DEPOSIT,
  WITHDRAW,
} from "./types";

export const getSavingsAccount = () => async (dispatch) => {
  try {
    const res = await axios.get(`/accounts/savingsAccount`);
    dispatch({
      type: GET_SAVINGS_ACCOUNT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const getAllAccounts = (username) => async (dispatch) => {
  try {
    const res = await axios.get(`/users/${username}`);
    dispatch({
      type: GET_ALL_ACCOUNT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const depositAmount = (DepositRequest, history) => async (dispatch) => {
  try {
    const res = await axios.post("/accounts/deposit", DepositRequest);
    history.push("/account");
    dispatch({
      type: DEPOSIT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const withdrawAmount = (DepositRequest, history) => async (dispatch) => {
  try {
    const res = await axios.post("/accounts/withdraw", DepositRequest);
    history.push("/account");
    dispatch({
      type: WITHDRAW,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

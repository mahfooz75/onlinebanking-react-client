import { combineReducers } from "redux";
import securityReducer from "./securityReducer";
import savingsAccountReducer from "./savingsAccountReducer";
import errorReducer from "./errorReducer";
import allAccountReducer from "./allAccountReducer";
import depositReducer from "./depositReducer";
import withdrawReducer from "./withdrawReducer";
import allTransactionsReducer from "./allTransactionsReducer";

export default combineReducers({
  errors: errorReducer,
  savingsaccount: savingsAccountReducer,
  security: securityReducer,
  allaccounts: allAccountReducer,
  deposit_details: depositReducer,
  withdraw_details: withdrawReducer,
  alltransactions: allTransactionsReducer,
});

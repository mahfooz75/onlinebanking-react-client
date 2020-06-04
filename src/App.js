import React from "react";

import "./App.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/UserManagement/Login";
import { Provider } from "react-redux";
import store from "./store";
import setJWTToken from "./securityUtils/setJWTToken";
import jwt_decode from "jwt-decode";
import { SET_CURRENT_USER } from "./actions/types";
import Register from "./components/UserManagement/Register";
import SecuredRoute from "./securityUtils/SecureRoute";
import SavingsAccount from "./components/account/SavingsAccount";
import CheckingAccount from "./components/account/CheckingAccount";
import MoneyMarketAccount from "./components/account/MoneyMarketAccount";
import AccountLandingPage from "./components/account/AccountLandingPage";
import Deposit from "./components/account/Deposit";
import Withdraw from "./components/account/Withdraw";
import Transactions from "./components/account/Transactions";

const jwtToken = localStorage.jwtToken;
//console.log(jwtToken);
if (jwtToken) {
  setJWTToken(jwtToken);
  const decoded_jwtToken = jwt_decode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded_jwtToken,
  });
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          {
            // Public Routes
          }
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          {
            // Private Routes
          }
          <Switch>
            <SecuredRoute exact path="/savings" component={SavingsAccount} />
            <SecuredRoute exact path="/checking" component={CheckingAccount} />
            <SecuredRoute
              exact
              path="/moneymarket"
              component={MoneyMarketAccount}
            />
            <SecuredRoute
              exact
              path="/account"
              component={AccountLandingPage}
            />
            <SecuredRoute exact path="/deposit" component={Deposit} />
            <SecuredRoute exact path="/withdraw" component={Withdraw} />
            <SecuredRoute
              exact
              path="/transactiondetail/:id"
              component={Transactions}
            />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

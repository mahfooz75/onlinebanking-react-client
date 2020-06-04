import React, { Component } from "react";
import { Link } from "react-router-dom";

class AccountDetails extends Component {
  render() {
    const { account_type, account_props } = this.props;

    return (
      <div className="col-md-4 mb-3">
        <div className="card">
          <div className="card-header">
            <h5>{account_type} Account</h5>
          </div>
          <div className="card-body">
            <div className="card-text">
              Account Number : {account_props.accountNumber}
              <p>Account Balance : {account_props.accountBalance}</p>
            </div>
          </div>
          <div className="card-footer">
            <div className="row">
              <div className="col-md-4 mb-1">
                <Link
                  className="btn btn-success"
                  to={{ pathname: "/deposit", accountType: { account_type } }}
                  role="button"
                >
                  Deposit
                </Link>
              </div>
              <div className="col-md-4 mb-1">
                <Link
                  className="btn btn-success"
                  to={{ pathname: "/withdraw", accountType: { account_type } }}
                  role="button"
                >
                  Withdraw
                </Link>
              </div>
              <div className="col-md-4 mb-1">
                <Link
                  className="btn btn-success"
                  to={`/transactiondetail/${account_type}`}
                  role="button"
                >
                  Transactions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AccountDetails;

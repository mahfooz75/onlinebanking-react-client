import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllAccounts } from "../../actions/accountActions";
import AccountDetails from "./AccountDetails";

class AccountLandingPage extends Component {
  constructor() {
    super();
    this.state = {
      errors: {},
    };
  }
  componentDidMount() {
    this.props.getAllAccounts(this.props.security.user.sub);
  }

  render() {
    const { all_accounts } = this.props.allaccounts;

    let savingsAccountDetail;
    let checkingAccountDetail;
    let moneyMarketAccountDetail;

    const getSavingAccountDetails = (all_accounts) => {
      if (all_accounts.savingsAccount) {
        const savingsAccountObj = all_accounts.savingsAccount;
        console.log(
          "Account Landing Page >> " + savingsAccountObj.accountNumber
        );
        return (
          <AccountDetails
            account_type="Savings"
            account_props={savingsAccountObj}
          />
        );
      }
    };

    const getCheckingAccountDetails = (all_accounts) => {
      if (all_accounts.checkingAccount) {
        const checkingAccountObj = all_accounts.checkingAccount;

        return (
          <AccountDetails
            account_type="Checking"
            account_props={checkingAccountObj}
          />
        );
      }
    };

    const getMoneyMarketAccountDetails = (all_accounts) => {
      if (all_accounts.moneyMarketAccount) {
        const moneyMarketAccountObj = all_accounts.moneyMarketAccount;
        return (
          <AccountDetails
            account_type="Money Market"
            account_props={moneyMarketAccountObj}
          />
        );
      }
    };

    savingsAccountDetail = getSavingAccountDetails(all_accounts);
    checkingAccountDetail = getCheckingAccountDetails(all_accounts);
    moneyMarketAccountDetail = getMoneyMarketAccountDetails(all_accounts);
    return (
      <div>
        <h2>
          Account Details of : {all_accounts.firstName} {all_accounts.lastName}
        </h2>
        <div className="row align-items-stretch justify-content-start card-deck">
          {savingsAccountDetail}
          {checkingAccountDetail}
          {moneyMarketAccountDetail}
        </div>
      </div>
    );
  }
}
AccountLandingPage.propTypes = {
  allaccounts: PropTypes.object.isRequired,
  getAllAccounts: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  security: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  allaccounts: state.allaccounts,
  errors: state.errors,
  security: state.security,
});
export default connect(mapStateToProps, { getAllAccounts })(AccountLandingPage);

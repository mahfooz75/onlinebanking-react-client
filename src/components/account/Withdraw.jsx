import React, { Component } from "react";
import TextInputGroup from "../common/TextInputGroup";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withdrawAmount } from "../../actions/accountActions";
import { Link } from "react-router-dom";

class Withdraw extends Component {
  constructor() {
    super();
    this.state = {
      accountType: "",
      amount: "",
      errors: {},
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onChange = (e) => {
    const re = /^[0-9.\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const DepositRequest = {
      accountType: e.target.accountType.value,
      amount: this.state.amount,
    };

    if (e.target.amount.value === "") {
      this.setState({ errors: { amount: "Amount can not be blank" } });
    } else {
      this.props.withdrawAmount(DepositRequest, this.props.history);
    }
  };
  render() {
    let acType = "";
    if (this.props.location.accountType) {
      acType = this.props.location.accountType;
    }
    const { account_type } = acType;
    const { errors, amount } = this.state;
    console.log(errors);
    return (
      <div>
        <div className="row">
          <div className="col-md-4 m-auto">
            <Link to="/account" className="btn btn-light">
              Back to account details
            </Link>
          </div>
          <div className="col-md-4 m-auto">
            <h4>Withdraw from {account_type} Account</h4>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <form onSubmit={this.onFormSubmit}>
                <TextInputGroup
                  name="accountType"
                  type="hidden"
                  placeholder="Enter account type"
                  value={account_type}
                  onChange={this.onChange}
                />
                <TextInputGroup
                  label="Enter valid amount only"
                  name="amount"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={this.onChange}
                  error={errors.amount}
                />

                <input
                  type="submit"
                  value="Withdraw"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Withdraw.propTypes = {
  withdraw_details: PropTypes.object.isRequired,
  withdrawAmount: PropTypes.func.isRequired,
  security: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  withdraw_details: state.withdraw_details,
  security: state.security,
  errors: state.errors,
});
export default connect(mapStateToProps, { withdrawAmount })(Withdraw);

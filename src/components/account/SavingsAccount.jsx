import React, { Component } from "react";
import { getSavingsAccount } from "../../actions/accountActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class SavingsAccount extends Component {
  constructor() {
    super();
    this.state = {
      errors: {},
    };
  }

  componentDidMount() {
    this.props.getSavingsAccount();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps,
      });
    }
  }

  render() {
    const { savings_account } = this.props.savingsaccount;
    return (
      <div>
        <h1>Saving Account</h1>

        <div className="col-md-3 mb-3">
          <div className="card">
            <div className="card-header">{savings_account.id}</div>
            <div className="card-body">
              <div className="card-text">
                {savings_account.accountNumber}
                <p>{savings_account.accountBalance}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
SavingsAccount.propTypes = {
  savingsaccount: PropTypes.object.isRequired,
  getSavingsAccount: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  savingsaccount: state.savingsaccount,
  errors: state.errors,
});
export default connect(mapStateToProps, { getSavingsAccount })(SavingsAccount);

import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllTransactions } from "../../actions/transactionsAction";
import { Link } from "react-router-dom";

class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      errors: {},
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id === "Savings") {
      this.props.getAllTransactions("savingAccountTransactionList");
    } else if (id === "Checking") {
      this.props.getAllTransactions("checkingAccountTransactionList");
    } else if (id === "Money Market") {
      this.props.getAllTransactions("moneyMarketAccountTransactionList");
    }
  }

  render() {
    const { id } = this.props.match.params;

    const { all_transactions } = this.props.alltransactions;
    const transaction = all_transactions.map((transactionObj) => (
      <div className="row" key={transactionObj.id}>
        <div className="col-md-3 m-auto">{transactionObj.date}</div>
        <div className="col-md-3 m-auto">{transactionObj.description}</div>
        <div className="col-md-3 m-auto">{transactionObj.amount}</div>
        <div className="col-md-3 m-auto">{transactionObj.availableBalance}</div>
      </div>
    ));

    return (
      <div>
        <div className="row">
          <div className="col-md-4 m-auto">
            <Link to="/account" className="btn btn-light">
              Back to account details
            </Link>
          </div>
        </div>

        <h4 className="display-4 text-center">
          Transactions Details for {id} Account
        </h4>
        <p></p>
        <div className="row">
          <div className="col-md-3 m-auto">
            <h5 className="text-center">Date</h5>
          </div>
          <div className="col-md-3 m-auto">
            <h5 className="text-center">Description</h5>
          </div>
          <div className="col-md-3 m-auto">
            <h5 className="text-center">Amount</h5>
          </div>
          <div className="col-md-3 m-auto">
            <h5 className="text-center">Balance</h5>
          </div>
        </div>
        {transaction}
        <div className="row">
          <div className="col-md-3 m-auto">
            <h5 className="text-center">------</h5>
          </div>
          <div className="col-md-3 m-auto">
            <h5 className="text-center">------</h5>
          </div>
          <div className="col-md-3 m-auto">
            <h5 className="text-center">------</h5>
          </div>
          <div className="col-md-3 m-auto">
            <h5 className="text-center">------</h5>
          </div>
        </div>
      </div>
    );
  }
}
Transactions.propTypes = {
  alltransactions: PropTypes.object.isRequired,
  getAllTransactions: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  security: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  alltransactions: state.alltransactions,
  errors: state.errors,
  security: state.security,
});
export default connect(mapStateToProps, { getAllTransactions })(Transactions);

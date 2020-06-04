import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createNewUser } from "../../actions/securityActions";
import TextInputGroup from "../common/TextInputGroup";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      ssn: "",
      address: "",
      errors: {},
    };
  }
  componentDidMount() {
    if (this.props.security.validToken) {
      this.props.history.push("/account");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
      ssn: this.state.ssn,
      address: this.state.address,
    };
    this.props.createNewUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h2 className="display-6 text-center">Sign Up</h2>
              <p className="lead text-center">Create your account</p>
              <form onSubmit={this.onFormSubmit}>
                <TextInputGroup
                  name="username"
                  placeholder="Enter user name"
                  value={this.state.username}
                  onChange={this.onChange}
                  error={errors.username}
                />
                <TextInputGroup
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={errors.password}
                />
                <TextInputGroup
                  name="firstName"
                  placeholder="Enter first name"
                  value={this.state.firstName}
                  onChange={this.onChange}
                  error={errors.firstName}
                />
                <TextInputGroup
                  name="lastName"
                  placeholder="Enter last name"
                  value={this.state.lastName}
                  onChange={this.onChange}
                  error={errors.lastName}
                />
                <TextInputGroup
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                />
                <TextInputGroup
                  name="phone"
                  placeholder="Enter phone"
                  value={this.state.phone}
                  onChange={this.onChange}
                  error={errors.phone}
                />
                <TextInputGroup
                  name="ssn"
                  placeholder="Enter ssn"
                  value={this.state.ssn}
                  onChange={this.onChange}
                  error={errors.ssn}
                />
                <TextInputGroup
                  name="address"
                  placeholder="Enter address"
                  value={this.state.address}
                  onChange={this.onChange}
                  error={errors.address}
                />
                <input
                  type="submit"
                  value="Login"
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
Register.propTypes = {
  createNewUser: PropTypes.func.isRequired,
  security: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  security: state.security,
  errors: state.errors,
});
export default connect(mapStateToProps, { createNewUser })(Register);

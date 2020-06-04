import React, { Component } from "react";
import TextInputGroup from "../common/TextInputGroup";
import { login } from "../../actions/securityActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errors: {},
    };
  }

  componentDidMount() {
    if (this.props.security.validToken) {
      this.props.history.push("/account");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.security.validToken) {
      this.props.history.push("/account");
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const LoginRequest = {
      username: this.state.username,
      password: this.state.password,
    };
    this.props.login(LoginRequest);
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <form onSubmit={this.onFormSubmit}>
                <TextInputGroup
                  name="username"
                  placeholder="Enter Name"
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
Login.propTypes = {
  login: PropTypes.func.isRequired,
  security: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  security: state.security,
  errors: state.errors,
});
export default connect(mapStateToProps, { login })(Login);

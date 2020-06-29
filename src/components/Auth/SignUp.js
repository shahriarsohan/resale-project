import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";

import { authSignup } from "../../action/auth";

class Signup extends Component {
  state = {
    email: "",
    password: "",
    password1: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, password1 } = this.state;
    this.props.signup(email, password, password1);
  };

  render() {
    const { email, password, password1 } = this.state;
    const { error, loading, token } = this.props;
    if (token) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login-area">
        <div className="avator-area">
          <i className="fas fa-user"></i>
        </div>
        <div className="login-heading-area">
          <p>Fill the form for an account</p>
        </div>
        {error && (
          <div class="alert alert-dangers text-center" role="alert">
            Oh snap! {error.message}
            <br />
            <span>Please provide valid information</span>
          </div>
        )}
        <hr />
        <form onSubmit={this.handleSubmit} className="login-form">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Email
              </span>
            </div>
            <input
              onChange={this.handleChange}
              name="email"
              value={email}
              type="email"
              className="form-control"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Password
              </span>
            </div>
            <input
              onChange={this.handleChange}
              name="password"
              value={password}
              type="password"
              className="form-control"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Re-type passwrod
              </span>
            </div>
            <input
              onChange={this.handleChange}
              name="password1"
              value={password1}
              type="password"
              className="form-control"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="extra-area">
            <button type="submit" className="btn btn-success">
              {loading && (
                <div className="spinner-border text-success" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              )}
              Sigh up
            </button>
            <p>
              Already have an account? <Link to="/login">Login here</Link>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    token: state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (email, password, password1) =>
      dispatch(authSignup(email, password, password1)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

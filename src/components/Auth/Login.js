import React from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { authLogin } from "../../action/auth";

class LoginForm extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.login(email, password);
  };

  render() {
    const { error, loading, token } = this.props;
    const { email, password } = this.state;
    if (token) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login-area">
        <div className="avator-area">
          <i class="fas fa-user"></i>
        </div>
        <div className="login-heading-area">
          <p>Login with valid credentials</p>
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

          <div className="extra-area">
            <button type="submit" class="btn btn-success">
              {loading && (
                <div class="spinner-border text-success" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              )}
              Login
            </button>
            <p>
              Don't have an account? <Link to="/signup">Sign up here</Link>
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
    login: (email, password) => dispatch(authLogin(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

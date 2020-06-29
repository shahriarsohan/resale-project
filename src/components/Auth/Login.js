import React from "react";
import { connect } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
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
      <>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={email}
            name="email"
            type="email"
          />
          <input
            onChange={this.handleChange}
            value={password}
            name="password"
            type="password"
          />
          <button>Login</button>
        </form>
      </>
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

import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";

class Profile extends Component {
  render() {
    const { token } = this.props;
    if (!token) {
      return <Redirect to="/login" />;
    }
    return <h1>Profile</h1>;
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    token: state.auth.token,
  };
};

export default connect(mapStateToProps)(Profile);

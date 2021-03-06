import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./container/Navbar";

import Login from "./components/Auth/Login";

import { authCheckState } from "./action/auth";
import { connect } from "react-redux";
import Signup from "./components/Auth/SignUp";
import Profile from "./components/Profile/Profile";
import Index from "./components/Index";
import FeaturedProductsDetails from "./components/Products/ProductsDetails";
import FeaturedFilter from "./components/filter/FeaturedFilter/FilterResults";

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignUp();
  }

  render() {
    return (
      <Router>
        <>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/profile" component={Profile} />
              <Route
                exact
                path="/details/:slug"
                component={FeaturedProductsDetails}
              />
              <Route exact path="/more" component={FeaturedFilter} />
            </Switch>
          </div>
        </>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignUp: () => dispatch(authCheckState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

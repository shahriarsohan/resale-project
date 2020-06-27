import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./container/Navbar";

import Index from "./components/Index";
import AllProductsList from "./components/AllProducts/AllProducts";

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={AllProductsList} />
          </Switch>
        </div>
      </>
    </Router>
  );
};

export default App;

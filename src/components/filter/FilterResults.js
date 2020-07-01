import React, { Component } from "react";

import { connect } from "react-redux";

import FilterForm from "./FeaturedFilterForm";

import { fetchFilterFeaturedProducts } from "../../action/index";

class FeaturedFilter extends Component {
  handleSubmit = (formValues) => {
    this.props.fetchFilterFeaturedProducts(formValues);
  };

  render() {
    return (
      <div className="featured-filter">
        <FilterForm onSubmit={this.handleSubmit} />

        <div className="result-filter">{this.props.results}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    results: state.feturedProducts.data,
  };
};

export default connect(mapStateToProps, { fetchFilterFeaturedProducts })(
  FeaturedFilter
);

import React, { Component } from "react";

import { connect } from "react-redux";

import FilterForm from "./FeaturedFilterForm";

import { fetchFilterFeaturedProducts } from "../../../action/index";

import ProductsList from "../../Products/ProductsList";

class FeaturedFilter extends Component {
  handleSubmit = (formValues) => {
    this.props.fetchFilterFeaturedProducts(formValues);
  };

  render() {
    const { results } = this.props;
    return (
      <div className="featured-filter">
        <FilterForm onSubmit={this.handleSubmit} />

        <div className="result-filter mt-4">
          {results.map((fp) => {
            return (
              <div key={fp.id}>
                <ProductsList
                  image={fp.image}
                  title={fp.title}
                  timestamp={fp.timestamp}
                  used={fp.used}
                  description={fp.description}
                  used_duration={fp.used_duration}
                  slug={fp.slug}
                />
              </div>
            );
          })}
        </div>
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

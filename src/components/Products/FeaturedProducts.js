import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchFeaturedProducts } from "../../action";

import Title from "../../container/Title";

import ProductsList from "./ProductsList";

class FeaturedProducts extends Component {
  componentDidMount() {
    this.props.fetchFeaturedProducts();
  }

  render() {
    const { featuredProducts, error, loading } = this.props;
    console.log(this.props.featuredProducts);
    return (
      <div>
        <Title title="Featured Products" />
        {error && (
          <div class="alert alert-danger text-center" role="alert">
            {error}
          </div>
        )}
        {loading && (
          <div className="d-flex justify-content-center align-items-center">
            <div class="spinner-border text-success " role="status"></div>
          </div>
        )}
        {featuredProducts.map((fp) => {
          return (
            <div key={fp.slug}>
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
    );
  }
}

const mapStateToProps = (state) => {
  return {
    featuredProducts: state.feturedProducts.data,
    error: state.feturedProducts.error,
    loading: state.feturedProducts.loading,
  };
};

export default connect(mapStateToProps, { fetchFeaturedProducts })(
  FeaturedProducts
);

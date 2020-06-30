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
        {featuredProducts.map((fp) => {
          return (
            <>
              <ProductsList
                image={fp.image}
                title={fp.title}
                timestamp={fp.timestamp}
                used={fp.used}
                description={fp.description}
                used_duration={fp.used_duration}
                slug={fp.slug}
              />
            </>
          );
        })}
        {error}
        {loading && <h1>hello</h1>}
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

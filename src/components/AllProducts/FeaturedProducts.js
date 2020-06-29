import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchFeaturedProducts } from "../../action";

import Title from "../../container/Title";

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
        {/* {featuredProducts.map((fp) => {
          return (
            <>
              <h1>{fp.user.user.email}</h1>
            </>
          );
        })} */}
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

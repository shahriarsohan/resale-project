import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchAllProductsList } from "../../action/index";

import ProductsList from "./ProductsList";
import Title from "../../container/Title";

class LatestProducts extends Component {
  componentDidMount() {
    this.props.fetchAllProductsList();
  }

  render() {
    const { latestProducts, error, loading } = this.props;
    return (
      <React.Fragment>
        <Title title="Latest Products" />
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
        {latestProducts.map((fp) => {
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
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    latestProducts: state.allProducts.data,
    loading: state.allProducts.loading,
    error: state.allProducts.error,
  };
};

export default connect(mapStateToProps, { fetchAllProductsList })(
  LatestProducts
);

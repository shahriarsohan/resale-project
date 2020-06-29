import React from "react";

import { connect } from "react-redux";

import { fetchAllProductsList } from "../../action/index";

class AllProductsList extends React.Component {
  componentDidMount() {
    this.props.fetchAllProductsList();
  }

  render() {
    const { products, error, loading } = this.props;
    console.log(products);
    return (
      <div>
        {products.map((p) => {
          return <h1>{p.user.user.email}</h1>;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.allProducts.data,
    error: state.allProducts.error,
    loading: state.allProducts.loading,
  };
};

export default connect(mapStateToProps, { fetchAllProductsList })(
  AllProductsList
);

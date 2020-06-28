import React from "react";

import { connect } from "react-redux";

import { fetchAllProductsList } from "../../action/index";

class AllProductsList extends React.Component {
  componentDidMount() {
    this.props.fetchAllProductsList();
  }

  render() {
    console.log(this.props.products);
    return (
      <div>
        <h1></h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { products: Object.values(state.allProducts.products) };
};

export default connect(mapStateToProps, { fetchAllProductsList })(
  AllProductsList
);

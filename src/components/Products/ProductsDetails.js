import React, { Component } from "react";
import api from "../../api/api";
import { FetchAllProductDetails } from "../../constant";

import Title from "../../container/Title";

class ProductsDetail extends Component {
  state = {
    data: [],
    userdata: [],
    moreuserdata: [],
    error: null,
    loading: true,
  };
  handleFetchItem = () => {
    const {
      match: { params },
    } = this.props;

    this.setState({ loading: true });
    api
      .get(FetchAllProductDetails(params.slug))
      .then((res) => {
        this.setState({
          loading: false,
          data: res.data,
          userdata: res.data.user,
          moreuserdata: res.data.user.user,
        });
      })
      .catch((err) => {
        this.setState({
          loading: false,
          error: err,
        });
      });
  };
  data;
  componentDidMount() {
    this.handleFetchItem();
  }

  render() {
    const { data, userdata, moreuserdata } = this.state;
    console.log(moreuserdata);
    console.log(data);
    return (
      <>
        <Title title="Products Details" />
        <hr />
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="products-image">
              <img src={data.image} alt={data.title} width="400" height="400" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
            <div className="products-title">
              <h2>{data.title}</h2>
            </div>
            <div className="member-name">
              <p>{userdata.email}</p>
            </div>
            {userdata.member && (
              <div className="member">
                <p>
                  Verified Member <i class="fal fa-stars"></i>
                </p>
              </div>
            )}
            <br />
            <br />
            <div className="price-area">
              <i class="fal fa-tags"></i>
              <p>{data.product_price}</p>
              {data.negotiable && (
                <p style={{ color: "green" }}>
                  <b>(not fixed)</b>
                </p>
              )}
            </div>
            <div className="add-cart">
              <button className="btn btn-primary">
                Add to cart<i class="cart fad fa-cart-plus"></i>
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-lg-12 description-box">
            <h1>Description</h1>
            <br />
            <p>{data.description}</p>
            <div className="product-details-area mt-4">
              <table class="table">
                <tbody>
                  <tr>
                    <td>Seller's Email : </td>
                    <td>{moreuserdata.email}</td>
                  </tr>
                  <tr>
                    <td>Category : </td>
                    <td>{data.category}</td>
                  </tr>
                  {data.featured && (
                    <tr>
                      <td>Featured : </td>
                      <td>Yes</td>
                    </tr>
                  )}
                  {data.negotiable ? (
                    <tr>
                      <td>Negotiable</td>
                      <td>Yes</td>
                    </tr>
                  ) : (
                    <tr>
                      <td>Negotiable</td>
                      <td>No</td>
                    </tr>
                  )}
                  <tr>
                    <td>Phone Number : </td>
                    <td>{data.phone_number}</td>
                  </tr>
                  <tr>
                    <td>Thana</td>
                    <td>{data.thana}</td>
                  </tr>
                  <tr>
                    <td>Zilla</td>
                    <td>{data.zilla}</td>
                  </tr>
                  <tr>
                    <td>Division</td>
                    <td>{data.division}</td>
                  </tr>
                  <tr>
                    <td>Zip Code</td>
                    <td>{data.zip_code}</td>
                  </tr>
                  {/* <tr>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductsDetail;

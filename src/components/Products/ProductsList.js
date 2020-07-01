import React from "react";

import { Link } from "react-router-dom";

const ProductsList = (props) => {
  return (
    <>
      <div className="card mb-3" style={{ maxWidth: "auto" }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <Link to={`/details/${props.slug}`}>
              <img src={props.image} width="180" height="180" />
            </Link>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="h5-same card-title">
                <b className="list-title">
                  <Link to={`/details/${props.slug}`}>{props.title}</Link>
                </b>
                <div className="used-cond">
                  {props.used && (
                    <p>
                      <i>
                        used <b>{props.used_duration}</b> days
                      </i>
                    </p>
                  )}
                </div>
              </h5>
              <p className="card-text">{props.description}</p>
              <p className="card-text">
                <small className="text-muted">
                  Posted {props.timestamp} Hours ago
                </small>
              </p>
              <div className="peoducts-icon">
                <i class="love fas fa-heart-circle"></i>
                <i class="cart fad fa-cart-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsList;

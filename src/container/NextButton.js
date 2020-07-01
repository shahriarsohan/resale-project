import React from "react";
import { Link } from "react-router-dom";

const NextButton = ({ title }) => {
  return (
    <div className="d-flex justify-content-end">
      <Link to="/more">
        <button className="btn btn-primary">
          {title}
          <i class="far fa-arrow-circle-right"></i>
        </button>
      </Link>
    </div>
  );
};

export default NextButton;

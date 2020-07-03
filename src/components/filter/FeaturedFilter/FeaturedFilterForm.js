import React, { Component } from "react";
import { connect } from "react-redux";

import { Field, reduxForm } from "redux-form";

class FeaturedProducts extends Component {
  render() {
    const { handleSubmit } = this.props;
    console.log(handleSubmit);
    return (
      <div className="filter-form_area">
        <form onSubmit={handleSubmit}>
          <Field
            className="form-control"
            component="input"
            name="title"
            placeholder="title"
          />
          <Field
            className="form-control"
            component="input"
            name="category"
            placeholder="category"
          />
          <Field
            className="form-control"
            component="input"
            name="thana"
            placeholder="thana"
          />
          <Field
            className="form-control"
            component="input"
            name="zilla"
            placeholder="zilla"
          />
          <button className="btn btn-primary mt-4" type="submit">
            Filter
          </button>
        </form>
      </div>
    );
  }
}

const ReactWidgetsForm = reduxForm({
  form: "reactWidgets", // a unique identifier for this form
})(FeaturedProducts);

export default connect(null, {})(ReactWidgetsForm);

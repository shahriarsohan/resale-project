import React from "react";

class SearchMusic extends React.Component {
  render() {
    return (
      <div className="input-group mb-3 py-4">
        {/* <div className="input-group-prepend">
          <div className="input-group-text">
            <i class="fas fa-search"></i>
          </div>
        </div> */}
        <input
          type="text"
          className="form-control"
          aria-label="Text input with checkbox"
          placeholder="Search Your favourite Music..."
        />
        <button type="submit" className="btn btn-success">
          <i class="fas fa-search"></i>
        </button>
      </div>
    );
  }
}

export default SearchMusic;

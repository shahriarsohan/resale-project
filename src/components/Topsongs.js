import React from "react";
import { connect } from "react-redux";

import Title from "../container/Title";
import { fetchTopSongs } from "../action/index";

class Topsongs extends React.Component {
  componentDidMount() {
    this.props.fetchTopSongs();
  }
  render() {
    const { topsongs } = this.props;
    console.log(topsongs);

    return (
      <div>
        <Title title="Topsongs" />
        {topsongs.map((song) => {
          console.log(song);
          return <div />;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { topsongs: Object.values(state.topsongs) };
};

export default connect(mapStateToProps, { fetchTopSongs })(Topsongs);

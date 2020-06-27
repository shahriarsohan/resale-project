import React from "react";
import { connect } from "react-redux";

import { fetchUsersList } from "../action/index";

class Topsongs extends React.Component {
  componentDidMount() {
    this.props.fetchUsersList();
  }
  render() {
    const { usersList } = this.props;
    const { loading, error } = this.props;
    console.log(loading);
    console.log(usersList);

    return (
      <div>
        {error && <h1>{error.message}</h1>}
        {loading && (
          <div>
            <h1>hello</h1>
          </div>
        )}
        {/* {usersList.map((u) => {
          return (
            <div>
              <h1>{u.user.email}</h1>
            </div>
          );
        })} */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    usersList: Object.values(state.usersList.data),
    loading: state.usersList.loading,
    error: state.usersList.error,
  };
};

export default connect(mapStateToProps, { fetchUsersList })(Topsongs);

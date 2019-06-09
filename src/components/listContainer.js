import React from "react";
import { connect } from "react-redux";
import { removeValue, fetchUsers } from "../redux/actions/index";
import PropTypes from 'prop-types';

class ListContainer extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }
  render() {
    const { users: { data = [], isFetching } = {}, onSelect } = this.props;
    return (
      <div className="childContainer">
        <h3>List Container</h3>
        {isFetching && <label>Loading.....</label>}
        {!isFetching && !data.length && <label>No Records Found.</label>}
        {!isFetching && data.map((user, i) => (
          <div className="userList" key={i}>
            <span onClick={() => onSelect(user)}>{user.name}</span>
            <button onClick={() => this.props.remove(i)}>Remove</button>
          </div>
        ))}
      </div>
    );
  }
}

ListContainer.defaultProps = {
  onSelect: () => {}
}

ListContainer.propTypes = {
  onSelect: PropTypes.func
};

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  remove: data => dispatch(removeValue(data)),
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer);

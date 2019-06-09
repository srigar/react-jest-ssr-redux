import React, { Component } from "React";
import "../../app.css";
import "./userDetails.css";
import ListContainer from "../listContainer";

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.onSelect = this.onSelect.bind(this);
  }
  onSelect(user) {
    this.setState({ user });
  }
  render() {
    const { user } = this.state;
    return (
      <>
        <ListContainer onSelect={this.onSelect} />
        {user && (
          <div className="user-details">
            <h4>User Details</h4>
            <p>Sample Nested Route</p>
            <p>User Details Goes Here</p>
          </div>
        )}
      </>
    );
  }
}

export default UserDetails;

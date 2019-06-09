import React, { Component } from "React";

import "../../app.css";
import "./addUser.css";
import FormContainer from "../formContainer";
import ListContainer from "../listContainer";

class AddUser extends Component {
  render() {
    return (
      <div className="add-user">
        <FormContainer />
        <ListContainer />
      </div>
    );
  }
}

export default AddUser;

import React from "react";
import { connect } from "react-redux";
import { addValue } from "../redux/actions/index";

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ input: event.target.value });
  }

  render() {
    const { input } = this.state;
    return (
      <div className="childContainer">
        <h3>Form Container</h3>
        <label htmlFor="username">Username: </label>
        <input
          id="username"
          type="text"
          value={input}
          onChange={e => this.onChange(e)}
        />
        <button onClick={() => this.props.add({name: input})}>Add</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  add: data => dispatch(addValue(data))
});

export default connect(
  null,
  mapDispatchToProps
)(FormContainer);

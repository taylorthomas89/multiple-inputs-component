import React, { Component } from "react";

class InputRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: "",
      lName: "",
      email: "",
      pw: "",
      pwC: ""
    };
  }

  handleInputChange = e => {
    let { id, value } = e.target;
    this.setState({
      ...this.state,
      [id]: value
    });
  };

  render() {
    return (
      <div className="row mt-2">
        <input
          type="text"
          id="fName"
          className="ml-1 col-sm form-control"
          placeholder="First Name"
          value={this.state.fName}
          onChange={e => this.handleInputChange(e)}
        />
        <input
          type="text"
          id="lName"
          className="ml-1 col-sm form-control"
          placeholder="Last Name"
          value={this.state.lName}
          onChange={e => this.handleInputChange(e)}
        />
        <input
          type="text"
          id="email"
          className="ml-1 col-sm form-control"
          placeholder="Email"
          value={this.email}
          onChange={e => this.handleInputChange(e)}
        />
        <input
          type="text"
          id="pw"
          className="ml-1 col-sm form-control"
          placeholder="Password"
          value={this.pw}
          onChange={e => this.handleInputChange(e)}
        />
        <input
          type="text"
          id="pwC"
          className="ml-1 col-sm form-control"
          placeholder="Password Confirm"
          value={this.pwC}
          onChange={e => this.handleInputChange(e)}
        />
        <button
          className="btn btn-outline-success ml-5 btn-sm col-sm-1"
          onClick={e => this.props.addRow(e, this.state)}
        >
          +
        </button>
      </div>
    );
  }
}

export default InputRow;

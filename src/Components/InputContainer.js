import React, { Component } from "react";
import InputRow from "./InputRow";

class InputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [1], // tracks amount of input rows to be rendered. using an array such that we can use .map
      data: {}, // all the data collected from input rows
      header: "😀"
    };
  }

  // Handles adding a new row of inputs (CustomInput component)
  onAddRow = (e, childData) => {
    let { items } = this.state;
    let amount = items.length;

    // hide previous row's '+' button
    e.target.style = "visibility: hidden";

    this.setState({
      ...this.state,
      items: [...items, amount + 1],
      data: {
        ...this.state.data,
        [amount]: {
          ...childData
        }
      }
    });
  };

  onSubmit = () => {
    // clear state out
    this.setState({
      items: [],
      massiveDatadump: {},
      header: "🤪"
    });

    // there's probably some kind of redirect happening at this point? //
  };

  render() {
    return (
      <div className="container mt-5">
        <h1 style={{ textAlign: "center" }}>{this.state.header}</h1>
        <button
          className="btn btn-outline-primary float-right"
          style={{ width: "auto" }}
          onClick={this.onSubmit}
        >
          Submit
        </button>
        <div className="mt-5 row">
          {this.state.items.map((elem, index) => (
            <InputRow key={index} addRow={this.onAddRow} />
          ))}
        </div>
      </div>
    );
  }
}

export default InputContainer;

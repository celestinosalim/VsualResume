import React, { Component } from "react";
import { MDBInput } from "mdbreact";

class InterpersonalsForm extends Component {
  state = {
    interpersonals: [
      {
        name: ""
      }
    ]
  };

  handleClick = e => {
    e.preventDefault();

    this.setState({
      interpersonals: [
        ...this.state.interpersonals,
        {
          name: ""
        }
      ]
    });
  };

  handleDynamicInputsChange = (e, idx) => {
    const newInterpersonals = this.state.interpersonals.map(
      (interpersonals, interpersonalsIdx) => {
        if (idx !== interpersonalsIdx) {
          return interpersonals;
        }
        return { ...interpersonals, [e.target.name]: e.target.value };
      }
    );
    this.setState({ interpersonals: newInterpersonals });
  };

  interpersonalsToAdd = () => {
    let { interpersonals } = this.state;
    let { name } = this.state.interpersonals;

    return interpersonals.map((interpersonals, idx) => {
      return (
        <div key={idx}>
          <div>
            <MDBInput
              label="Name"
              value={name}
              name="name"
              onChange={e => this.handleDynamicInputsChange(e, idx)}
              type="text"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          <button className="btn btn-danger">Delete Field</button>
          <br />
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h3>Interpersonals Skills</h3>
        {this.state.interpersonals.length < 8 && (
          <button className="btn btn-info" onClick={e => this.handleClick(e)}>
            Add
          </button>
        )}

        {this.interpersonalsToAdd()}
      </div>
    );
  }
}

export default InterpersonalsForm;

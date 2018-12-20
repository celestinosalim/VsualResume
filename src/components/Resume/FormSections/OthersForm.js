import React, { Component } from "react";
import { MDBInput } from "mdbreact";

class OthersForm extends Component {
  state = {
    others: [
      {
        name: ""
      }
    ]
  };

  handleClick = e => {
    e.preventDefault();

    this.setState({
      others: [
        ...this.state.others,
        {
          name: ""
        }
      ]
    });
  };

  handleDynamicInputsChange = (e, idx) => {
    const newOthers = this.state.others.map((others, othersIdx) => {
      if (idx !== othersIdx) {
        return others;
      }
      return { ...others, [e.target.name]: e.target.value };
    });
    this.setState({ others: newOthers });
  };

  othersToAdd = () => {
    let { others } = this.state;
    let { name } = this.state.others;

    return others.map((others, idx) => {
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
        <h3>Other Skills</h3>
        {this.state.others.length < 8 && (
          <button className="btn btn-info" onClick={e => this.handleClick(e)}>
            Add
          </button>
        )}

        {this.othersToAdd()}
      </div>
    );
  }
}

export default OthersForm;

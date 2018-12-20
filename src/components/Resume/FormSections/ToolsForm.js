import React, { Component } from "react";
import { MDBInput } from "mdbreact";

class ToolsForm extends Component {
  state = {
    tools: [
      {
        name: ""
      }
    ]
  };

  handleClick = e => {
    e.preventDefault();

    this.setState({
      tools: [
        ...this.state.tools,
        {
          name: ""
        }
      ]
    });
  };

  handleDynamicInputsChange = (e, idx) => {
    const newTools = this.state.tools.map((tools, toolsIdx) => {
      if (idx !== toolsIdx) {
        return tools;
      }
      return { ...tools, [e.target.name]: e.target.value };
    });
    this.setState({ tools: newTools });
  };

  toolsToAdd = () => {
    let { tools } = this.state;
    let { name } = this.state.tools;

    return tools.map((tools, idx) => {
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
        <h3>Tools & Technologies</h3>
        {this.state.tools.length < 8 && (
          <button className="btn btn-info" onClick={e => this.handleClick(e)}>
            Add
          </button>
        )}

        {this.toolsToAdd()}
      </div>
    );
  }
}

export default ToolsForm;

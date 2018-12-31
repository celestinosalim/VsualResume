import React, { Component } from "react";
import { Button } from "mdbreact";

class ToolsForm extends Component {
  state = {
    tools: [
      {
        name: ""
      }
    ]
  };

  handleDeleteField = (e, idx) => {
    e.preventDefault();
    this.setState({
      tools: this.state.tools.filter((s, _idx) => _idx !== idx)
    });
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
            <div>
              <label htmlFor="name">Ex: Git</label>
              <input
                className="form-control"
                value={name}
                name="name"
                onChange={e => this.handleDynamicInputsChange(e, idx)}
                type="text"
                required
                pattern="^\S[a-zA-Z\d\-_.,@\s]+$"
                minLength="5"
                maxLength="20"
              />
              <div className="invalid-feedback">
                Cannot be empty! You must Have at least one Tool.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </div>
          </div>
          <div>
            <button
              onClick={e => this.handleDeleteField(e, idx)}
              className="btn btn-danger"
            >
              Delete Field
            </button>
          </div>
          <br />
        </div>
      );
    });
  };

  handleSubmit = (e, obj) => {
    e.preventDefault();
    e.target.className += " was-validated";
    if (e.target.checkValidity() === true) {
      this.props.saveToolsToSkillState(e, obj);
    }
  };

  render() {
    return (
      <div>
        <h3>Tools & Technologies</h3>
        <form
          className="needs-validation"
          onSubmit={e => this.handleSubmit(e, this.state)}
          noValidate
        >
          {this.state.tools.length < 8 && (
            <button className="btn btn-info" onClick={e => this.handleClick(e)}>
              Add
            </button>
          )}
          {this.toolsToAdd()}

          <div>
            <Button color="success" type="submit">
              Update Tools & Technologies
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default ToolsForm;

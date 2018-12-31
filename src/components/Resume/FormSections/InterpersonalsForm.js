import React, { Component } from "react";
import { Button } from "mdbreact";

class InterpersonalsForm extends Component {
  state = {
    interpersonals: [
      {
        name: ""
      }
    ]
  };

  handleDeleteField = (e, idx) => {
    e.preventDefault();
    this.setState({
      interpersonals: this.state.interpersonals.filter(
        (s, _idx) => _idx !== idx
      )
    });
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
            <div>
              <label htmlFor="name">Ex: Leadership</label>
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
      this.props.saveInterpersonalsToSkillState(e, obj);
    }
  };

  render() {
    return (
      <div>
        <h3>Interpersonals Skills</h3>
        <form
          className="needs-validation"
          onSubmit={e => this.handleSubmit(e, this.state)}
          noValidate
        >
          {this.state.interpersonals.length < 8 && (
            <button className="btn btn-info" onClick={e => this.handleClick(e)}>
              Add
            </button>
          )}

          {this.interpersonalsToAdd()}
          <div>
            <Button color="success" type="submit">
              Update Other Skills
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default InterpersonalsForm;

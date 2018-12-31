import React, { Component } from "react";
import { Button } from "mdbreact";

class OthersForm extends Component {
  state = {
    others: [
      {
        name: ""
      }
    ]
  };

  handleDeleteField = (e, idx) => {
    e.preventDefault();
    this.setState({
      others: this.state.others.filter((s, _idx) => _idx !== idx)
    });
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
      this.props.saveOthersToSkillState(e, obj);
    }
  };

  render() {
    return (
      <div>
        <h3>Other Skills</h3>
        <form
          className="needs-validation"
          onSubmit={e => this.handleSubmit(e, this.state)}
          noValidate
        >
          {this.state.others.length < 8 && (
            <button className="btn btn-info" onClick={e => this.handleClick(e)}>
              Add
            </button>
          )}

          {this.othersToAdd()}
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

export default OthersForm;

import React, { Component } from 'react';

import shortid from 'shortid';

export default class Form extends Component {
  state = { name: '', number: '' };
  nameID = shortid.generate();
  numberID = shortid.generate();

  onChangeHandler = ev => {
    const { value, name } = ev.currentTarget;
    this.setState({ [name]: value });
  };

  onSubmitHandler = ev => {
    ev.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <label htmlFor={this.nameID}>
          Input your name
          <input
            id={this.nameID}
            value={this.state.name}
            type="text"
            name="name"
            onChange={this.onChangeHandler}
          />
        </label>
        <label htmlFor={this.numberID}>
          Input your number
          <input
            id={this.numberID}
            value={this.state.number}
            type="number"
            name="number"
            onChange={this.onChangeHandler}
          />
        </label>

        <button type="submit">ENTER</button>
      </form>
    );
  }
}

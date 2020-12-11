import React, { Component } from 'react';

import Container from './components/Container';

import Form from './components/Form';

export default class App extends Component {
  state = { rundom: '' };
  onSubmitHandler = data => {
    console.log(data);
  };
  render() {
    return (
      <Container>
        <Form onSubmit={this.onSubmitHandler} />
      </Container>
    );
  }
}

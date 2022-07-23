import React, { Component } from "react";
import Form from 'react-bootstrap/Form';

import { LoaderButton } from '../Components';

import "./Signup.css";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      confirmationCode: "",
      newUser: null
    };
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }

  validateConfirmationForm() {
    return this.state.confirmationCode.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  // handleSubmit = async event => {
  //   event.preventDefault();

  //   this.setState({ isLoading: true });

  //   try {
  //     const newUser = await Auth.signUp({
  //       username: this.state.email,
  //       password: this.state.password
  //     });
  //     this.setState({
  //       newUser
  //     });
  //   } catch (e) {
  //     alert(e.message);
  //   }

  //   this.setState({ isLoading: false });
  // }

  // handleConfirmationSubmit = async event => {
  //   event.preventDefault();

  //   this.setState({ isLoading: true });

  //   try {
  //     await Auth.confirmSignUp(this.state.email, this.state.confirmationCode);
  //     await Auth.signIn(this.state.email, this.state.password);

  //     this.props.userHasAuthenticated(true);
  //     this.props.history.push("/");
  //   } catch (e) {
  //     alert(e.message);
  //     this.setState({ isLoading: false });
  //   }
  // }

  renderConfirmationForm() {
    return (
      <form onSubmit={this.handleConfirmationSubmit}>
        <Form.Group controlId="confirmationCode">
          <Form.Label>Confirmation Code</Form.Label>
          <Form.Control
            autoFocus
            type="tel"
            value={this.state.confirmationCode}
            onChange={this.handleChange}
          />
          <Form.Text>Please check your email for the code.</Form.Text>
        </Form.Group>
        <LoaderButton
          block
          disabled={!this.validateConfirmationForm()}
          type="submit"
          isLoading={this.state.isLoading}
          text="Verify"
          loadingText="Verifying…"
        />
      </form>
    );
  }

  renderForm() {
    return (
      <div>
        <h3>Sign Up Details</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              autoFocus
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              autoFocus
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              type="password"
            />
          </Form.Group>
          <LoaderButton
            block
            disabled={!this.validateForm()}
            type="submit"
            isLoading={this.state.isLoading}
            text="Signup"
            loadingText="Signing up…"
          />
        </Form>
      </div>
    );
  }

  render() {
    return (
      <div className="Signup">
        {this.state.newUser === null
          ? this.renderForm()
          : this.renderConfirmationForm()}
      </div>
    );
  }
}

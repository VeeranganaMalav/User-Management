import React, { Component } from "react";
import Form from 'react-bootstrap/Form';

import { LoaderButton } from '../Components';

import "./UpdateUser.css";

export default class User extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      address: ""
    };
  }

  validateForm() {
    return (
      this.state.firstName.length > 0 &&
      this.state.lastName.length > 0 &&
      this.state.address.length > 0
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  render() {
    return (
      <div className="UodateUser">
        <h3>Update User Details</h3>
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
            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                autoFocus
                as="textarea" 
                rows={3}
                value={this.state.address}
                onChange={this.handleChange}
              />
            </Form.Group>
            <LoaderButton
              block
              disabled={!this.validateForm()}
              type="submit"
              isLoading={this.state.isLoading}
              text="Update User"
              loadingText="Updating User…"
            />
          </Form>
      </div>
    )
  };
};

import React, { Component } from "react";
import Axios from 'axios';
import Form from 'react-bootstrap/Form';
import { Navigate } from "react-router-dom";
import { LoaderButton } from '../Components';

import "./UpdateUser.css";

export default class User extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      firstName: "",
      lastName: "",
      address: ""
    };
  }

  componentDidMount() {
    const { user } = this.props;
    const { firstName, lastName } = user;

    this.setState({
      firstName,
      lastName
    })
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

  handleSubmit = async event => {
    event.preventDefault();

    const updateUserBody = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      address: this.state.address,
      email: this.props.user.email
    }
    this.setState({ isLoading: true });
    console.log('updateUserBody - ', updateUserBody);
    try {
      const userResp = await Axios.put('/api/updateUserDetails', updateUserBody);
      console.log('userResp.data - ', userResp.data);
      if(userResp.status === 200) {
        this.props.setUser(userResp.data);
      }
    } catch (e) {
      alert(e.message);
    }

    this.setState({ isLoading: false });
  }

  render() {
    return (
      <div className="UpdateUser">
      {this.props.user.address &&
          <Navigate to="/userDetails" replace={true} />
      }
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

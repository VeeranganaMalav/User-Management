import React, { Component } from "react";
import Axios from 'axios';
import Form from 'react-bootstrap/Form';
import { Navigate } from "react-router-dom";
import { LoaderButton } from "../Components";

import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
        isLoading: false,
        email: "",
        password: ""
      };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    const loginBody = {
      email: this.state.email,
      password: this.state.password
    }
    this.setState({ isLoading: true });
    console.log('loginBody - ', loginBody);
    try {
      const loginResp = await Axios.post('/api/login', loginBody);
      console.log('loginResp.data - ', loginResp.data);
      if(loginResp.status === 200) {
        this.props.setUser(loginResp.data);
      }
    } catch (e) {
      alert(e.message);
    }

    this.setState({ isLoading: false });
  }

  render() {
    return (
      <div className="Login">
      {this.props.user.address &&
          <Navigate to="/userDetails" replace={true} />
      }
        <Form onSubmit={this.handleSubmit}>
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
          <LoaderButton
            block
            disabled={!this.validateForm()}
            type="submit"
            isLoading={this.state.isLoading}
            text="Login"
            loadingText="Logging in…"
          />
        </Form>
      </div>
    );
  }
}

import React, { Component } from "react";
import autoBind from 'auto-bind';

import AppRoutes from './Routes';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };

    autoBind(this);
  }

  setUser(user) {
    this.setState({
      user: user
    }, () => {
      console.log('this.state - ', this.state);
    });
  }

  render() {
    return (
      <div className="App">
        <AppRoutes setUser={this.setUser} user={this.state.user}/>
      </div>
    )
  };
}

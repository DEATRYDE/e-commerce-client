import React, { Component } from "react";
import Input from "../general/Input";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password1: "",
      password2: "",
    };
  }
  onChange(e) {
    console.log(e);
  }

  render() {
    return (
      <div className="container">
        <h1 className="large text-primary">Register</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Create your Account
        </p>
        <div className="form">
          <Input
            type="text"
            placeholder="Full Name"
            value=""
            onChange={this.onChange}
          />
        </div>
        <div className="form">
          <Input
            type="email"
            placeholder="Email Address"
            value=""
            onChange={this.onChange}
          />
        </div>
        <div className="form">
          <Input
            type="password"
            placeholder="Enter Password"
            value=""
            onChange={this.onChange}
          />
        </div>
        <div className="form">
          <Input
            type="password"
            placeholder="Confirm Password"
            value=""
            onChange={this.onChange}
          />
        </div>
        <button className="btn btn-primary">Register</button>
      </div>
    );
  }
}

export default Register;

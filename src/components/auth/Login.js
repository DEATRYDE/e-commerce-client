import React, { Component } from "react";
import Input from "../general/Input";
import { Link } from "react-router-dom";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  onChange(e) {
    console.log(e);
  }

  render() {
    return (
      <div className="container">
        <h1 className="large text-primary">Login</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Create your Account
        </p>
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
            placeholder="Password"
            value=""
            onChange={this.onChange}
          />
        </div>
        <button className="btn btn-primary">Login</button>
        <p className="my-1">
          Dont Have an Account? <Link to="/register">Create Account</Link>
        </p>
      </div>
    );
  }
}

export default Register;

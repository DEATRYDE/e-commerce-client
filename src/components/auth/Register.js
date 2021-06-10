import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Input from "../general/Input";
import { register } from "../../actions/authActions";
import { message } from "antd";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(nextProps.auth);
    if (
      nextProps &&
      nextProps.auth.errors &&
      nextProps.auth.errors.length > 0
    ) {
      nextProps.auth.errors.forEach((error) => {
        message.error(error.msg);
      });
    }

    if (nextProps.auth.isAuthenticated) {
      message.success("Thank you for signing up");
      setTimeout(() => this.props.history.push("/"), 3000);
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit() {
    let role = this.props.location.search.split("?role=");
    role = role[role.length - 1];
    console.log(role);
    const { name, password, password2, email } = this.state;
    const newUser = {
      name,
      email,
      password,
      role,
    };
    if (password === password2) {
      this.props.register(newUser);
    } else {
      console.log("password must match");
    }
  }

  render() {
    const { name, password, password2, email } = this.state;
    return (
      <div className="container">
        <h1 className="large text-primary">Register</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Create your Account
        </p>
        <div className="form">
          <Input
            name="name"
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={this.onChange}
          />
        </div>
        <div className="form">
          <Input
            name="email"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={this.onChange}
          />
        </div>
        <div className="form">
          <Input
            name="password"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={this.onChange}
          />
        </div>
        <div className="form">
          <Input
            name="password2"
            type="password"
            placeholder="Confirm Password"
            value={password2}
            onChange={this.onChange}
          />
        </div>
        <button className="btn btn-primary" onClick={this.onSubmit}>
          Register
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { register })(withRouter(Register));

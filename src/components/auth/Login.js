import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import Input from "../general/Input";
import { login } from "../../actions/authActions";
import { message } from "antd";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
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

    if (nextProps.isAuthenticated) {
      message.success("Successful Login");
      setTimeout(() => this.props.history.push("/"), 3000);
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit() {
    const { email, password } = this.state;
    const user = {
      email,
      password,
    };
    this.props.login(user);
  }

  render() {
    return (
      <div className="container">
        <h1 className="large text-primary">Login</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Login into you Account
        </p>
        <form className="form">
          <Input
            name="email"
            type="email"
            placeholder="Email Address"
            autoComplete="on"
            value={this.state.email}
            onChange={this.onChange}
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            autoComplete="off"
            value={this.state.password}
            onChange={this.onChange}
          />
        </form>
        <button className="btn btn-primary" onClick={this.onSubmit}>
          Login
        </button>
        <p className="my-1">
          Dont Have an Account? <Link to="/register">Create Account</Link>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth,
});

export default connect(mapStateToProps, { login })(withRouter(Login));

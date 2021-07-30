import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Input from "../general/Input";
import { register } from "../../actions/authActions";
import { message } from "antd";
import { decodeUser } from "../../util";
import { addToCart } from "../../actions/cartActions";

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
    const search = this.props.location.search;
    let split = search.split("redirect=");
    const hasRedirect = search.includes("redirect=");
    split = split[split.length - 1];
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
      if (split && hasRedirect) {
        if (
          split === "/cart" &&
          localStorage.getItem("token" && localStorage.getItem("products"))
        ) {
          const userId = decodeUser().user.id;
          const cartProducts = JSON.parse(localStorage.getItem("products"));
          const context = { products: cartProducts, userId };
          this.props.addToCart(context);
          localStorage.removeItem("products");
        }
        this.props.history.push(split);
      } else {
        message.success("Thank you for signing up");
        setTimeout(() => this.props.history.push("/"), 3000);
      }
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit() {
    let split = this.props.location.search.split("?role=");
    split = split[split.length - 1].split("&");
    const role = split[0];

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
        <form className="form">
          <Input
            name="name"
            type="text"
            placeholder="Full Name"
            autoComplete="on"
            value={name}
            onChange={this.onChange}
          />

          <Input
            name="email"
            type="email"
            placeholder="Email Address"
            autoComplete="on"
            value={email}
            onChange={this.onChange}
          />

          <Input
            name="password"
            type="password"
            placeholder="Enter Password"
            autoComplete="off"
            value={password}
            onChange={this.onChange}
          />

          <Input
            name="password2"
            type="password"
            placeholder="Confirm Password"
            autoComplete="off"
            value={password2}
            onChange={this.onChange}
          />
        </form>
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

export default connect(mapStateToProps, { register, addToCart })(
  withRouter(Register)
);

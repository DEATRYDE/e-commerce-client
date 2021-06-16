import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getProfile } from "../../../actions/profileActions";
import { decodeUser } from "../../../util";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: null,
    };
  }

  componentDidMount() {
    this.props.getProfile(decodeUser().user.id);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(nextProps.profile.profile);
  }

  render() {
    const { name } = this.props.auth.user;
    return (
      <div className="container">
        <h1>Welcome {name}</h1>
        {this.state.profile ? (
          <h1>I have a profile </h1>
        ) : (
          <h1>Create a Profile</h1>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfile })(withRouter(Profile));

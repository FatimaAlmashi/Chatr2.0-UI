import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import * as actionCreators from "../store/actions";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faSignInAlt,
  faUserPlus,
  faPlusCircle
} from "@fortawesome/free-solid-svg-icons";

class BottomBar extends Component {
  render() {
    const user = this.props.user;

    const addChannel = (
      <button id="settings">
        <Link className="link_color" to="/createChannel">
          <i className="fa fa-user-plus fa-fw" aria-hidden="true" />
          <span>Add Channel</span>
        </Link>
      </button>
    );
    const logoutButton = (
      <button id="settings" onClick={this.props.logout}>
        <FontAwesomeIcon icon={faSignOutAlt} />
        <span>Logout</span>
      </button>
    );
    const LogInButton = (
      <button id="settings">
        <Link to="/login" className=" link_color nav-link">
          <FontAwesomeIcon icon={faSignInAlt} />
          <span>Login</span>
        </Link>
      </button>
    );

    const SignUpButton = (
      <button id="settings">
        <Link to="/signup" className="nav-link  link_color">
          <FontAwesomeIcon icon={faUserPlus} />
          <span>SignUp</span>
        </Link>
      </button>
    );

    return (
      <div id="bottom-bar">
        {user ? addChannel : LogInButton}
        {user ? logoutButton : SignUpButton}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.auth.user
});
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(actionCreators.logout())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BottomBar);

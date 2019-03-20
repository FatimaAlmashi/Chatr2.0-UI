import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import * as actionCreators from "../../store/actions";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faSignInAlt,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";

class AuthButton extends Component {
  render() {
    // const { user } = this.props;
    const user = this.props.user;
    // console.log("[AuthButton.js] username", user);
    let buttons = (
      //   type="button"
      //   className="btn btn-outline-secondary"
      //   onClick={this.props.logout}
      // >
      //   <FontAwesomeIcon icon={faSignOutAlt} /> Logout
      // </span>

      <button className="btn btn-outline-secondary" onClick={this.props.logout}>
        <FontAwesomeIcon icon={faSignOutAlt} /> Logout
      </button>
    );

    if (!user) {
      buttons = [
        <li key="loginButton" className="nav-item">
          <Link to="/login" className="nav-link">
            <FontAwesomeIcon icon={faSignInAlt} /> Login
          </Link>
        </li>,
        <li key="signupButton" className="nav-item">
          <Link to="/signup" className="nav-link">
            <FontAwesomeIcon icon={faUserPlus} /> Signup
          </Link>
        </li>
      ];
    }

    return (
      <div className="float-right mx-3">
        <span className="mx-3">{user ? user.username : ""}</span>
        {user ? buttons : ""}
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
)(AuthButton);

// ----old-------

// class AuthButton extends Component {
//   render() {
//     // const { user } = this.props;
//     const user = this.props.user;
//     console.log("[AuthButton.js] username", user);
//     let buttons = (
//       <li className="nav-item">
//         <span className="nav-link" onClick={this.props.logout}>
//           <FontAwesomeIcon icon={faSignOutAlt} /> Logout
//         </span>
//       </li>
//     );

//     if (!user) {
//       buttons = [
//         <li key="loginButton" className="nav-item">
//           <Link to="/login" className="nav-link">
//             <FontAwesomeIcon icon={faSignInAlt} /> Login
//           </Link>
//         </li>,
//         <li key="signupButton" className="nav-item">
//           <Link to="/signup" className="nav-link">
//             <FontAwesomeIcon icon={faUserPlus} /> Signup
//           </Link>
//         </li>
//       ];
//     }

//     return (
//       <ul className="navbar-nav ml-auto">
//         <span className="navbar-text">{user ? user.username : ""}</span>
//         {user ? buttons : ""}
//       </ul>
//     );
//   }
// }

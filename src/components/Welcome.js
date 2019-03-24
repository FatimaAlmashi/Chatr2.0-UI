import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import chatrLogo from "../images/chatrLogo.png";

class Welcome extends Component {
  render() {
    return (
      <header className="masthead d-flex my-5">
        <div className="container text-center my-auto z-1 my-5">
          <div className="w-100" style={{ paddingTop: "30px" }}>
            <img src={chatrLogo} alt="" style={{ height: "17%" }} />
          </div>
          <hr style={{ width: "70%" }} />
          <h1 className="mb-1 my-5">WELCOME TO CHATR</h1>
          <h3 className="mb-3">
            <em className="">You're gonna need to login to see the messages</em>
          </h3>
          <div className="my-5">
            <Link to="/login" className="btn btn-outline-secondary">
              Login
            </Link>
            <span className=" mx-3"> </span>
            <Link to="/signup" className="btn btn-outline-secondary">
              Signup
            </Link>
          </div>
        </div>
        <div className="overlay z-0" />
      </header>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};
export default connect(mapStateToProps)(Welcome);

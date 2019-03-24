import React, { Component } from "react";
import BottomBar from "./BottomBar";
import { connect } from "react-redux";
import SideNav from "./Navigation/SideNav";
import * as actionCreators from "../store/actions";
import userImage from "../images/user.jpg";

class Sidepanel extends Component {
  render() {
    return (
      <div id="sidepanel">
        <div id="profile">
          <div className="wrap">
            <img
              id="profile-img"
              src={userImage}
              className="circuler_border"
              alt=""
            />{" "}
            {this.props.user && (
              <span style={{ fontWeight: "bold" }}>
                <span style={{ color: "#95a5a6", fontWeight: "normal" }}>
                  welcome :
                </span>{" "}
                {this.props.user.username}
              </span>
            )}
          </div>
        </div>
        <div id="search">
          <label for="">
            <i className="fa fa-search" aria-hidden="true" />
          </label>
          <input
            type="text"
            placeholder="Search channels..."
            onChange={event => this.props.filterChannels(event.target.value)}
          />
        </div>
        <SideNav />
        <BottomBar />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.auth.user
});
const mapDispatchToProps = dispatch => ({
  filterChannels: query => dispatch(actionCreators.filterChannels(query))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidepanel);

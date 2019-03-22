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
            />
            {/* <i class="fas fa-user-tie" width="200px" /> */}
            {this.props.user && <p>{this.props.user.username}</p>}
          </div>
        </div>
        <div id="search">
          <label for="">
            <i className="fa fa-search" aria-hidden="true" />
          </label>
          <input
            type="text"
            placeholder="Search contacts..."
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

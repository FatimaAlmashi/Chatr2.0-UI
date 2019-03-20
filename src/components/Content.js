import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions";
import Messages from "./Messages";

class Content extends Component {
  async componentDidMount() {
    let channelID = this.props.match.params.channelID;
    this.props.getChannelByID(channelID);
  }
  componentDidUpdate(prevState) {
    let channelID = this.props.match.params.channelID;
    if (
      prevState.match.params.channelID !== this.props.match.params.channelID
    ) {
      this.props.getChannelByID(channelID);
    }
  }
  render() {
    return (
      <div>
        {this.props.channel && (
          <div className="contact-profile float-left">
            {this.props.channel.image_url ? (
              <img src={this.props.channel.image_url} />
            ) : (
              <img
                id="profile-img"
                src="https://blog.hubspot.com/hs-fs/hub/53/file-23123745-jpg/blog/images/hashtag.jpg"
                className="circuler_border"
                alt=""
              />
            )}

            <p>{this.props.channel.name}</p>
            <p>{this.props.channel.owner}</p>
            {/* <div className="social-media">
            <i className="fa fa-facebook" aria-hidden="true" />
            <i className="fa fa-twitter" aria-hidden="true" />
            <i className="fa fa-instagram" aria-hidden="true" />
          </div> */}
          </div>
        )}
        <Messages />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    channels: state.channels,
    channel: state.channel.channel
    // loading: state.rootAuthor.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getChannelByID: (channelID, channels) =>
      dispatch(actionCreators.getChannelByID(channelID, channels))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Content)
);

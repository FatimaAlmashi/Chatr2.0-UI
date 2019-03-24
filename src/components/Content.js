import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions";
import Messages from "./Messages";
import hashtag from "../images/hash.png";

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
              <img src={this.props.channel.image_url} alt="" />
            ) : (
              <img
                id="profile-img"
                src={hashtag}
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

            {/* <div id="search" className=" float-right mx-4 my-4"> */}

            <div id="search" className=" float-right mx-3">
              {/* <label for="">
                <i className="fa fa-search" aria-hidden="true" />
              </label> */}

              <input
                className="form-control mr-sm-2 my-3"
                type="search"
                placeholder="Search"
                onChange={event =>
                  this.props.filterMessages(event.target.value)
                }
              />
            </div>
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
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getChannelByID: (channelID, channels) =>
      dispatch(actionCreators.getChannelByID(channelID, channels)),
    filterMessages: query => dispatch(actionCreators.filterMessages(query))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Content)
);

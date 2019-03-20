import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";

class ChannelNavLink extends Component {
  render() {
    // const { channel } = this.props;
    // const { loading, filteredAuthors, user } = this.props;
    const { user, channels } = this.props;
    const all_channels = channels.map(channel => (
      <li
        className="contact"
        key={channel.name}
        data-toggle="tooltip"
        data-placement="right"
        title={channel.name}
      >
        <NavLink className="nav-link link_color" to={`/channels/${channel.id}`}>
          <div className="wrap">
            <img
              id="profile-img"
              src="https://blog.hubspot.com/hs-fs/hub/53/file-23123745-jpg/blog/images/hashtag.jpg"
              className="circuler_border"
              alt=""
            />
            {/* <FontAwesomeIcon icon={faHashtag} /> */}
            <div className="meta">
              <p className="name">{channel.name}</p>
            </div>
          </div>
        </NavLink>
      </li>
    ));

    // if (loading) {
    //   return <Loading />;
    // } else {
    return <div>{user && all_channels}</div>;
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    channels: state.channels.channels
    //   loading: state.rootChannelss.loading,
    //   filteredChannelss: state.rootChannels.filteredChannels,
  };
};

export default connect(mapStateToProps)(ChannelNavLink);

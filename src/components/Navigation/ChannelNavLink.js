import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import hashtag from "../../images/hash.png";
import Loading from "../Loading";

// FontAwesome
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHashtag } from "@fortawesome/free-solid-svg-icons";

class ChannelNavLink extends Component {
  render() {
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
            {channel.image_url ? (
              <img
                id="profile-img"
                src={channel.image_url}
                className="circuler_border"
                alt=""
              />
            ) : (
              <img
                id="profile-img"
                src={hashtag}
                className="circuler_border"
                alt=""
              />
            )}
            {/* <FontAwesomeIcon icon={faHashtag} /> */}
            <div className="meta">
              <p className="name">{channel.name}</p>
            </div>
          </div>
        </NavLink>
      </li>
    ));

    if (this.props.ch_loading) {
      return <Loading />;
    } else {
      return <div>{user && all_channels}</div>;
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    channels: state.channels.filteredChannels,
    ch_loading: state.channels.ch_loading
  };
};

export default connect(mapStateToProps)(ChannelNavLink);

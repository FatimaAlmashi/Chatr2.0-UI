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
        key={channel.name}
        className="nav-item"
        data-toggle="tooltip"
        data-placement="right"
        title={channel.name}
      >
        <NavLink className="nav-link" to={`/channels/${channel.id}`}>
          <FontAwesomeIcon icon={faHashtag} />
          <span className="nav-link-text"> {channel.name}</span>
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

// old code
// <li
//   className="nav-item"
//   data-toggle="tooltip"
//   data-placement="right"
//   title={channel.name}
// >
//   {channel_obj}
//   <NavLink className="nav-link" to={`/channels/${channel.name}`}>
//     <FontAwesomeIcon icon={faHashtag} />
//     <span className="nav-link-text"> {channel.name}</span>
//   </NavLink>
// </li>

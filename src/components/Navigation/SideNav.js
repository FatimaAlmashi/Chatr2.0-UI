import React from "react";
// Components
import ChannelNavLink from "./ChannelNavLink";

class SideNav extends React.Component {
  state = { collapsed: false };
  render() {
    const channelLinks = [{ name: "all" }].map(channel => (
      <ChannelNavLink key={channel.name} channel={channel} />
    ));
    return (
      <div id="contacts">
        <ul>{channelLinks}</ul>
      </div>
    );
  }
}
export default SideNav;

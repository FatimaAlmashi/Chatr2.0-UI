import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

// Actions
import * as actionCreators from "../store/actions";

//Components
import PostMessageForm from "./PostMessageForm";

class Messages extends Component {
  timer = null;
  state = {
    timestamp: ""
    // channelID: undefined
  };

  async componentDidMount() {
    let channelID = this.props.match.params.channelID;
    await this.props.fetchMessageList(channelID);
    this.fetchMessages();
    this.props.getChannelByID(channelID);
    // this.setState({ channelID: this.props.match.params.channelID });
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  componentDidUpdate(prevState) {
    let channelID = this.props.match.params.channelID;
    if (
      prevState.match.params.channelID !== this.props.match.params.channelID &&
      this.props.message_list.length !== 0
    ) {
      clearInterval(this.timer);
      this.props.fetchMessageList(channelID);
      this.fetchMessages();
      this.props.getChannelByID(channelID);
      // this.setState({ channelID: this.props.match.params.channelID });
    }
  }

  fetchMessages = () => {
    if (this.props.message_list.length !== 0) {
      let last_message = this.props.message_list[
        this.props.message_list.length - 1
      ];
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.props.fetchMessageWithTiemstamp(
          this.props.match.params.channelID,
          last_message.timestamp
        );
      }, 3000); //get data and rerender the component every 3s
    }
  };

  render() {
    // const { loading, author, user } = this.props;
    // const { message_list, user } = this.props;
    const message_list = this.props.message_list;

    const channelID = this.props.match.params.channelID;
    // const channel = this.props.channel;
    // if (loading) {
    //   return <Loading />;
    // } else {

    const listOfMessages = message_list.map(message => {
      return (
        <div>
          <span style={{ color: "blue" }}>{message.username}</span>
          <li className="sent">
            <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
            <p>{message.message}</p>
          </li>
          <p style={{ fontSize: "9px" }}>{message.timestamp}</p>
        </div>
      );
    });

    return (
      // <div className="ml-5">
      //   {listOfMessages}
      //   <PostMessageForm channelID={channelID} />
      // </div>

      <div className="messages float-left w-100">
        <ul>{listOfMessages}</ul>
        <div className="message-input">
          <div className="wrap">
            <input type="text" placeholder="Write your message..." />
            <i className="fa fa-paperclip attachment" aria-hidden="true" />
            <button className="submit">
              <i className="fa fa-paper-plane" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    message_list: state.messages.messages,
    user: state.auth.user,
    message: state.message,
    channels: state.channels,
    channel: state.channel
    // loading: state.rootAuthor.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMessageList: (channelID, timestamp) =>
      dispatch(actionCreators.fetchMessageList(channelID, timestamp)),
    fetchMessageWithTiemstamp: (channelID, timestamp) =>
      dispatch(
        actionCreators.fetchMessageListWithTimestamp(channelID, timestamp)
      ),
    getChannelByID: (channelID, channels) =>
      dispatch(actionCreators.getChannelByID(channelID, channels))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Messages)
);

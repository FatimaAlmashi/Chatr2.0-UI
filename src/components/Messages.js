import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import ReactDOM from "react-dom";
// Actions
import * as actionCreators from "../store/actions";
//Components
import PostMessageForm from "./PostMessageForm";
import Loading from "../components/Loading";

class Messages extends Component {
  timer = null;
  state = {
    timestamp: ""
  };

  async componentDidMount() {
    let channelID = this.props.match.params.channelID;
    await this.props.fetchMessageList(channelID);
    this.fetchMessages();
    this.props.getChannelByID(channelID);
    this.scrollToBottom();
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
    }
    this.scrollToBottom();
  }
  scrollToBottom = () => {
    if (this.messagesEnd) {
      this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }
  };
  fetchMessages = () => {
    if (this.props.message_list.length !== 0) {
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        let last_message = this.props.message_list[
          this.props.message_list.length - 1
        ];
        this.props.fetchMessageWithTiemstamp(
          this.props.match.params.channelID,
          last_message.timestamp
        );
      }, 3000); //get data and rerender the component every 3s
    }
  };

  getTime = message => {
    return message.timestamp.slice(11, 16);
  };

  getDate = (message, lastMessage) => {
    const current_msg_year = message.timestamp.slice(0, 4);
    const current_msg_month = message.timestamp.slice(5, 7);
    const current_msg_day = message.timestamp.slice(8, 10);

    const last_msg_year = lastMessage.timestamp.slice(0, 4);
    const last_msg_month = lastMessage.timestamp.slice(5, 7);
    const last_msg_day = lastMessage.timestamp.slice(8, 10);

    if (
      !+current_msg_year >= +last_msg_year ||
      +current_msg_month >= +last_msg_month ||
      +current_msg_day !== +last_msg_day
    ) {
      return (
        <p style={{ textAlign: "center" }}>
          {current_msg_year}-{current_msg_month}-{current_msg_day}
        </p>
      );
    }
    return <p>{""}</p>;
  };
  render() {
    const message_list = this.props.message_list;
    const channelID = this.props.match.params.channelID;

    const listOfMessages = message_list.map(message => {
      return (
        <div>
          {this.props.user.username === message.username ? (
            <div>
              {this.getDate(message, this.props.lastMessage)}
              <li className="sent">
                <p>
                  <span className="sent_username" style={{ color: "#95a5a6" }}>
                    > {message.username}
                  </span>
                  <br />
                  <span className="sent_msg" style={{ fontWeight: "bold" }}>
                    {message.message}
                  </span>
                  <br />
                  <span
                    className="sent_time float-right"
                    style={{ fontSize: "9px" }}
                  >
                    {this.getTime(message)}
                  </span>
                  <br />
                </p>
              </li>
            </div>
          ) : (
            <div>
              <li className="replies text-secondary">
                <p className="">
                  <span
                    className="replies_username float-left"
                    style={{ color: "#95a5a6" }}
                  >
                    > {message.username}
                  </span>
                  <br />
                  <span
                    className="replies_msg float-left"
                    style={{ fontWeight: "bold" }}
                  >
                    {message.message}
                  </span>
                  <br />
                  <span
                    className="replies_time float-right"
                    style={{ fontSize: "9px" }}
                  >
                    {this.getTime(message)}
                  </span>
                  <br />
                </p>
              </li>
            </div>
          )}
        </div>
      );
    });

    if (this.props.msg_loading) {
      return <Loading />;
    } else {
      return (
        //  <div className="messages float-left w-100">

        // tries to show latest messages ...
        // bottom_aligner
        <div
          className="messages w-100"
          style={{
            // display: "table",
            // display: "table-cell",
            // "vertical-align": "bottom",
            scrollPaddingBottom: "0px"
          }}
        >
          <ul>{listOfMessages}</ul>
          <div
            style={{ float: "left", clear: "both" }}
            ref={el => {
              this.messagesEnd = el;
            }}
          >
            {""}
          </div>
          <PostMessageForm channelID={channelID} />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    message_list: state.filteredMessages.filteredMessages,
    user: state.auth.user,
    message: state.message,
    channels: state.channels,
    channel: state.channel,
    msg_loading: state.messages.msg_loading,
    lastMessage: state.message.lastMessage,
    lastYear: state.message.lastYear,
    lastMonth: state.message.lastMonth,
    lastDay: state.message.lastDay
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

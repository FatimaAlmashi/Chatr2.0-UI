import React, { Component } from "react";
import { connect } from "react-redux";

// Actions
import * as actionCreators from "../store/actions";

//Components
import PostMessageForm from "./PostMessageForm";

class SuperSecretPage extends Component {
  timer = null;
  state = {
    timestamp: ""
  };

  async componentDidMount() {
    await this.props.fetchMessageList(this.props.match.params.channelID);
    this.fetchMessages();
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  componentDidUpdate(prevState) {
    if (
      prevState.match.params.channelID !== this.props.match.params.channelID &&
      this.props.message_list.length !== 0
    ) {
      clearInterval(this.timer);
      this.props.fetchMessageList(this.props.match.params.channelID);
      this.fetchMessages();
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
    const { message_list, user } = this.props;
    const channelID = this.props.match.params.channelID;
    // if (loading) {
    //   return <Loading />;
    // } else {

    const listOfMessages = message_list.map(message => {
      return (
        <div>
          <p style={{ color: "blue" }}>{message.username}</p>
          <p>{message.message}</p>
          <p style={{ fontSize: "9px" }}>{message.timestamp}</p>
        </div>
      );
    });
    return (
      <div className="ml-5">
        {listOfMessages}
        <PostMessageForm channelID={channelID} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    message_list: state.messages.messages,
    user: state.auth.user,
    message: state.message
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
      )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SuperSecretPage);

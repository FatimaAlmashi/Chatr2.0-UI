import React, { Component } from "react";
import { connect } from "react-redux";
// Actions
import * as actionCreators from "../store/actions";

class PostMessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  componentWillUnmount() {
    this.props.resetForm();
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.postMessage(this.state, this.props.channelID);
  };

  render() {
    return (
      <form
        className="message-input"
        onSubmit={event => {
          this.submitHandler(event);
        }}
      >
        <div className="wrap">
          <input
            type="text"
            placeholder="Type a message..."
            name="message"
            onChange={this.changeHandler}
          />
          <i className="fa fa-paperclip attachment" aria-hidden="true" />
          <button className="submit" type="submit">
            <i className="fa fa-paper-plane" aria-hidden="true" />
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  message: state.message
});
const mapDispatchToProps = dispatch => ({
  postMessage: (message, history) =>
    dispatch(actionCreators.postMessage(message, history)),
  resetForm: () => dispatch(actionCreators.setErrors({}))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostMessageForm);

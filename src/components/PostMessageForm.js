import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
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
    const message = this.props.message;
    // const user = this.props;

    // if (user) {
    //   return <Redirect to="/private" />;
    // }

    return (
      <form
        className="card col-6 mx-auto p-0 mt-5"
        onSubmit={event => {
          this.submitHandler(event);
        }}
      >
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="message_text"
            name="message"
            onChange={this.changeHandler}
          />
        </div>
        <input className="btn btn-primary" type="submit" value="Post" />
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

import React, { Component } from "react";
import { connect } from "react-redux";

// Actions
import * as actionCreators from "../store/actions";

class ChannelForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      owner: this.props.user,
      imageUrl: ""
    };
    this.submitChannel = this.submitChannel.bind(this);
    this.onTextchange = this.onTextchange.bind(this);
  }

  submitChannel(event) {
    event.preventDefault();
    this.props.postChannel(this.state);
  }

  onTextchange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <>
        <h3 className="mb-1 my-5 mx-5">Add a New Channel</h3>
        <form
          className="ml-5 my-5 mx-5 justify-content-center"
          onSubmit={this.submitChannel}
        >
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Channel Name</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={this.onTextchange}
            />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Image URL</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="imageUrl"
              onChange={this.onTextchange}
            />
          </div>
          <input
            className="btn btn-outline-secondary"
            type="submit"
            value="Add"
          />
        </form>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postChannel: newChannel => dispatch(actionCreators.postChannel(newChannel))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelForm);

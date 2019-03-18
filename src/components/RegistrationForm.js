import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
// Actions
import * as actionCreators from "../store/actions";

class RegistationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      type: ""
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

  submitHandler = (e, type) => {
    e.preventDefault();
    if (type === "signup") {
      this.props.signup(this.state, this.props.history);
    } else {
      this.props.login(this.state);
    }
  };

  render() {
    const type = this.props.match.url.substring(1);
    const { username, password } = this.state;
    const { user } = this.props;

    if (user) {
      return <Redirect to="/private" />;
    }
    let errors = [];
    if (this.props.error) {
      errors = this.props.error.map(error => (
        <div className="text-danger">{error}</div>
      ));
    }

    return (
      <div className="card col-6 mx-auto p-0 mt-5">
        <div className="card-body">
          <h5 className="card-title mb-4">
            {type === "login"
              ? "Login to send messages"
              : "Register an account"}
          </h5>

          {this.props.error ? errors : ""}
          <form
            onSubmit={event => {
              this.submitHandler(event, type);
            }}
          >
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={this.changeHandler}
              />
            </div>

            <div className="form-group">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={this.changeHandler}
              />
            </div>
            <input
              className="btn btn-primary"
              type="submit"
              value={type.replace(/^\w/, c => c.toUpperCase())}
            />
          </form>
        </div>
        <div className="card-footer">
          <Link
            to={type === "login" ? "/signup" : "/login"}
            className="btn btn-small btn-link"
          >
            {type === "login"
              ? "register an account"
              : "login with an existing account"}
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  error: state.errors.error
});

const mapDispatchToProps = dispatch => ({
  signup: (userData, history) =>
    dispatch(actionCreators.signup(userData, history)),
  login: userData => dispatch(actionCreators.login(userData)),
  resetForm: () => dispatch(actionCreators.setErrors({}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistationForm);

import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

// Scripts
import main from "./assets/js/main";
// Actions
import * as actionCreators from "./store/actions";

// Components
import NavBar from "./components/Navigation/NavBar";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import Welcome from "./components/Welcome";
import RegistrationForm from "./components/RegistrationForm";
import SuperSecretPage from "./components/SuperSecretPage";
import ChannelForm from "./components/ChannelForm";

class App extends Component {
  componentDidMount() {
    this.props.checkToken();
    this.props.fetchAllChannels();
    main();
  }

  render() {
    return (
      <div className="content-wrapper">
        <div className="col-3">
          <NavBar />
        </div>
        <div className="col-9">
          <Switch>
            <Route path="/welcome" component={Welcome} />
            <Route path="/(login|signup)" component={RegistrationForm} />
            <PrivateRoute path="/private" component={SuperSecretPage} />
            <PrivateRoute path="/createChannel" component={ChannelForm} />
            <Redirect to="/welcome" />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllChannels: () => dispatch(actionCreators.fetchChannels()),
    checkToken: () => dispatch(actionCreators.checkForExpiredToken())
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);

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
import Messages from "./components/Messages";
import ChannelForm from "./components/ChannelForm";

// New Components
import Sidepanel from "./components/Sidepanel";
import Content from "./components/Content";

class App extends Component {
  componentDidMount() {
    this.props.checkToken();
    this.props.fetchAllChannels();
    main();
  }
  render() {
    return (
      <div id="frame">
        <Sidepanel />
        <div className="content">
          <Switch>
            <Route path="/welcome" component={Welcome} />
            <Route path="/(login|signup)" component={RegistrationForm} />
            <PrivateRoute path="/private" component={Content} />
            <PrivateRoute path="/createChannel" component={ChannelForm} />
            <PrivateRoute path={`/channels/:channelID/`} component={Content} />
            <Redirect to="/welcome" />
          </Switch>
        </div>
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

// ----------------   OLD return      ------------------
// return (
//   <div className="content-wrapper">
//     <div className="col-3">
//       <NavBar />
//     </div>
//     <div className="col-9">
// <Switch>
//   <Route path="/welcome" component={Welcome} />
//   <Route path="/(login|signup)" component={RegistrationForm} />
//   <PrivateRoute path="/private" component={SuperSecretPage} />
//   <PrivateRoute path="/createChannel" component={ChannelForm} />
//   <PrivateRoute
//     path={`/channels/:channelID/`}
//     component={SuperSecretPage}
//   />
//   <Redirect to="/welcome" />
// </Switch>
//     </div>
//     <Footer />
//   </div>
// );

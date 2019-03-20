import React, { Component } from "react";
import BottomBar from "./BottomBar";
// import { Switch, Route, Redirect, withRouter } from "react-router-dom";
// import { connect } from "react-redux";
// // Scripts
// import main from "./assets/js/main";
// // Actions
// import * as actionCreators from "./store/actions";
import SideNav from "./Navigation/SideNav";

class Sidepanel extends Component {
  render() {
    return (
      <div id="sidepanel">
        <div id="profile">
          <div className="wrap">
            <img
              id="profile-img"
              src="https://cdn.onlinewebfonts.com/svg/img_568657.png"
              className="circuler_border"
              alt=""
            />
            <i class="fas fa-user-tie" />
            <p>user name</p>
          </div>
        </div>
        <div id="search">
          <label for="">
            <i className="fa fa-search" aria-hidden="true" />
          </label>
          <input type="text" placeholder="Search contacts..." />
        </div>
        <SideNav />

        {/* <div id="contacts">
          <ul>
            <li className="contact">
              <div className="wrap">
                <img
                  id="profile-img"
                  src="https://blog.hubspot.com/hs-fs/hub/53/file-23123745-jpg/blog/images/hashtag.jpg"
                  className="circuler_border"
                  alt=""
                />
                <div className="meta">
                  <p className="name">Louis Litt</p>
                  <p className="preview">You just got LITT up, Mike.</p>
                </div>
              </div>
            </li>
            <li className="contact active">
              <div className="wrap">
                <img
                  id="profile-img"
                  src="https://blog.hubspot.com/hs-fs/hub/53/file-23123745-jpg/blog/images/hashtag.jpg"
                  className="circuler_border"
                  alt=""
                />
                <div className="meta">
                  <p className="name">Harvey Specter</p>
                  <p className="preview">
                    Wrong. You take the gun, or you pull out a bigger one. Or,
                    you call their bluff. Or, you do any one of a hundred and
                    forty six other things.
                  </p>
                </div>
              </div>
            </li>
            <li className="contact">
              <div className="wrap">
                <img
                  id="profile-img"
                  src="https://blog.hubspot.com/hs-fs/hub/53/file-23123745-jpg/blog/images/hashtag.jpg"
                  className="circuler_border"
                  alt=""
                />
                <div className="meta">
                  <p className="name">Rachel Zane</p>
                  <p className="preview">
                    I was thinking that we could have chicken tonight, sounds
                    good?
                  </p>
                </div>
              </div>
            </li>
            <li className="contact">
              <div className="wrap">
                <img
                  id="profile-img"
                  src="https://blog.hubspot.com/hs-fs/hub/53/file-23123745-jpg/blog/images/hashtag.jpg"
                  className="circuler_border"
                  alt=""
                />
                <div className="meta">
                  <p className="name">Donna Paulsen</p>
                  <p className="preview">
                    Mike, I know everything! I'm Donna..
                  </p>
                </div>
              </div>
            </li>
            <li className="contact">
              <div className="wrap">
                <img
                  id="profile-img"
                  src="https://blog.hubspot.com/hs-fs/hub/53/file-23123745-jpg/blog/images/hashtag.jpg"
                  className="circuler_border"
                  alt=""
                />
                <div className="meta">
                  <p className="name">Jessica Pearson</p>
                  <p className="preview">
                    Have you finished the draft on the Hinsenburg deal?
                  </p>
                </div>
              </div>
            </li>
            <li className="contact">
              <div className="wrap">
                <img
                  id="profile-img"
                  src="https://blog.hubspot.com/hs-fs/hub/53/file-23123745-jpg/blog/images/hashtag.jpg"
                  className="circuler_border"
                  alt=""
                />
                <div className="meta">
                  <p className="name">Harold Gunderson</p>
                  <p className="preview">Thanks Mike! :)</p>
                </div>
              </div>
            </li>
            <li className="contact">
              <div className="wrap">
                <img
                  id="profile-img"
                  src="https://blog.hubspot.com/hs-fs/hub/53/file-23123745-jpg/blog/images/hashtag.jpg"
                  className="circuler_border"
                  alt=""
                />
                <div className="meta">
                  <p className="name">Daniel Hardman</p>
                  <p className="preview">
                    We'll meet again, Mike. Tell Jessica I said 'Hi'.
                  </p>
                </div>
              </div>
            </li>
            <li className="contact">
              <div className="wrap">
                <img
                  id="profile-img"
                  src="https://blog.hubspot.com/hs-fs/hub/53/file-23123745-jpg/blog/images/hashtag.jpg"
                  className="circuler_border"
                  alt=""
                />
                <div className="meta">
                  <p className="name">Katrina Bennett</p>
                  <p className="preview">
                    I've sent you the files for the Garrett trial.
                  </p>
                </div>
              </div>
            </li>
            <li className="contact">
              <div className="wrap">
                <img
                  id="profile-img"
                  src="https://blog.hubspot.com/hs-fs/hub/53/file-23123745-jpg/blog/images/hashtag.jpg"
                  className="circuler_border"
                  alt=""
                />
                <div className="meta">
                  <p className="name">Charles Forstman</p>
                  <p className="preview">Mike, this isn't over.</p>
                </div>
              </div>
            </li>
            <li className="contact">
              <div className="wrap">
                <img
                  id="profile-img"
                  src="https://blog.hubspot.com/hs-fs/hub/53/file-23123745-jpg/blog/images/hashtag.jpg"
                  className="circuler_border"
                  alt=""
                />
                <div className="meta">
                  <p className="name">Jonathan Sidwell</p>
                  <p className="preview">
                    <span>You:</span> That's bullshit. This deal is solid.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
         */}
        <BottomBar />
      </div>
    );
  }
}
export default Sidepanel;

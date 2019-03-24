import React, { Component } from "react";

class Loading extends Component {
  render() {
    return (
      <div
        className=""
        id="loading_style"
        style={{
          width: "100%",
          height: "100%",
          textAlign: "center",
          padding: "50% 0"
        }}
      >
        {/* <div class="spinner-border text-light" role="status">
          <span class="sr-only">Loading...</span>
        </div> */}

        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
}
export default Loading;

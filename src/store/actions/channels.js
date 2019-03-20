import * as actionTypes from "./actionTypes";

import axios from "axios";

const instance = axios.create({
  baseURL: "https://api-chatr.herokuapp.com/"
});

export const fetchChannels = () => {
  return dispatch => {
    instance
      .get("channels/")
      .then(res => res.data)
      .then(channels =>
        dispatch({ type: actionTypes.FETCH_CHANNELS, payload: channels })
      )
      .catch(error => console.error(error));
  };
};
export const getChannelByID = channelID => {
  return {
    type: actionTypes.GET_CHANNEL_BY_ID,
    payload: channelID
  };
};

export const postChannel = newChannel => {
  return dispatch => {
    instance
      .post("channels/create/", newChannel)
      .then(res => res.data)
      .then(createdChannel =>
        dispatch({
          type: actionTypes.POST_CHANNEL,
          payload: createdChannel
        })
      )
      .catch(error => console.error(error.response.data));
  };
};

// export const filterChannels = query => {
//   return {
//     type: actionTypes.FILTER_CHANNELS,
//     payload: query
//   };
// };

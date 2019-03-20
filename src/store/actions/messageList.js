import * as actionTypes from "./actionTypes";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://api-chatr.herokuapp.com/"
});

// const setLoading = () => ({
//   type: actionTypes.SET_AUTHOR_LOADING
// });

export const fetchMessageList = channelID => {
  return dispatch => {
    // dispatch(setLoading());
    instance
      .get(`channels/${channelID}`)
      .then(res => res.data)
      .then(messageList =>
        dispatch({
          type: actionTypes.FETCH_MESSAGE_LIST,
          payload: messageList
        })
      )
      .catch(err => console.error(err));
  };
};

export const fetchMessageListWithTimestamp = (channelID, timestamp) => {
  return async dispatch => {
    // dispatch(setLoading());
    try {
      const res = await instance.get(
        `channels/${channelID}/?latest=${timestamp}`
      );
      const messageList = res.data;
      dispatch({
        type: actionTypes.FETCH_MESSAGE_LIST_WITH_TIMESTAMP,
        payload: messageList
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const postMessage = (message, channelID) => {
  // message = {
  //   ...message,
  //   belongs_to_channel: [channelID]
  // };
  return dispatch => {
    instance
      .post(`channels/${channelID}/send/`, message)
      .then(res => res.data)
      .then(createdMessage =>
        dispatch({
          type: actionTypes.POST_MESSAGE,
          payload: createdMessage
        })
      )
      .catch(error => console.error(error.response.data));
  };
};

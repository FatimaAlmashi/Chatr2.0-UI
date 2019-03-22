import { combineReducers } from "redux";

// Reducers
import authReducer from "./authentication";
import errorReducer from "./errors";
import channelReducer from "./channels";
import messageListReducer from "./messageList";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  channels: channelReducer,
  channel: channelReducer,
  filteredChannels: channelReducer,
  messages: messageListReducer,
  message: messageListReducer,
  filteredMessages: messageListReducer
});

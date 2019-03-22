import * as actionTypes from "../actions/actionTypes";

const initialState = {
  channels: [],
  channel: null,
  filteredChannels: []
  // loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CHANNELS:
      return {
        ...state,
        channels: action.payload,
        filteredChannels: action.payload
        //   loading: false
      };
    case actionTypes.GET_CHANNEL_BY_ID:
      let channelID = parseInt(action.payload);
      return {
        ...state,
        channel: state.channels.find(channel => channel.id === channelID)
      };

    case actionTypes.POST_CHANNEL:
      return {
        ...state,
        channels: [action.payload].concat(state.channels),
        filteredChannels: [action.payload].concat(state.channels)
      };
    default:
      return state;

    case actionTypes.FILTER_CHANNELS:
      return {
        ...state,
        filteredChannels: state.channels.filter(channel => {
          return channel.name.toLowerCase().includes(action.payload);
        })
      };
  }
};
export default reducer;

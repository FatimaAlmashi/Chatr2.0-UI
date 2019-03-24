import * as actionTypes from "../actions/actionTypes";

const initialState = {
  channels: [],
  channel: null,
  filteredChannels: [],
  ch_loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CHANNELS:
      return {
        ...state,
        channels: action.payload,
        filteredChannels: action.payload,
        ch_loading: false
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

    case actionTypes.FILTER_CHANNELS:
      return {
        ...state,
        filteredChannels: state.channels.filter(channel => {
          return channel.name.toLowerCase().includes(action.payload);
        })
      };

    case actionTypes.SET_CHANNEL_LOADING:
      return {
        ...state,
        ch_loading: true
      };

    default:
      return state;
  }
};
export default reducer;

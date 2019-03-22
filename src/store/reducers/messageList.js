import * as actionTypes from "../actions/actionTypes";

const initialState = {
  //   belongs_to_channel: undefined
  //   loading: true
  messages: [],
  filteredMessages: []
};

const messageListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MESSAGE_LIST:
      return {
        ...state,
        messages: action.payload,
        filteredMessages: action.payload
        // loading: false
      };

    case actionTypes.FETCH_MESSAGE_LIST_WITH_TIMESTAMP:
      return {
        ...state,
        messages: state.messages.concat(action.payload),
        filteredMessages: state.messages.concat(action.payload)
        // loading: false
      };
    // case actionTypes.POST_MESSAGE:
    //   return {
    //     ...state,
    //     messages: state.messages.concat(action.payload),
    //     filteredMessages: state.messages.concat(action.payload)
    //   };
    case actionTypes.FILTER_MESSAGES:
      return {
        ...state,
        filteredMessages: state.messages.filter(message => {
          return message.message.toLowerCase().includes(action.payload);
        })
      };
    // case actionTypes.SET_AUTHOR_LOADING:
    //   return {
    //     ...state,
    //     loading: true
    //   };

    default:
      return state;
  }
};

export default messageListReducer;

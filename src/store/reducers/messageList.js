import * as actionTypes from "../actions/actionTypes";

const initialState = {
  messages: [],
  filteredMessages: [],
  msg_loading: true,
  lastMessage: {}
  // lastYear: "",
  // lastMonth: "",
  // lastDay: ""
};

const messageListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MESSAGE_LIST:
      // if (action.payload) {
      //   const lastMsg = action.payload[action.payload.length - 1];
      //   let year = "";
      //   let month = "";
      //   let day = "";
      //   if (state.lastYear === "") {
      //     year = state.lastMsg.timestamp.slice(0, 4);
      //     month = state.lastMsg.timestamp.slice(5, 7);
      //     day = state.lastMsg.timestamp.slice(8, 10);
      //   } else {
      //     if (state.lastMsg.timestamp.slice(0, 4) > state.lastYear) {
      //       year = state.lastMsg.timestamp.slice(0, 4);
      //     }
      //     if (state.lastMsg.timestamp.slice(5, 7) > state.lastMonth) {
      //       month = state.lastMsg.timestamp.slice(5, 7);
      //     }
      //     if (state.lastMsg.timestamp.slice(8, 10) > state.lastDay) {
      //       day = state.lastMsg.timestamp.slice(8, 10);
      //     }
      //   }
      // }
      return {
        ...state,
        messages: action.payload,
        filteredMessages: action.payload,
        lastMessage: action.payload[action.payload.length - 1],
        // lastYear: this.year,
        // lastMonth: this.month,
        // lastDay: this.day,
        msg_loading: false
      };

    case actionTypes.FETCH_MESSAGE_LIST_WITH_TIMESTAMP:
      let newlastMessage = state.lastMessage;
      // console.log("[reducers/messageList.js] action.payload: ", action.payload);
      if (action.payload.length) {
        newlastMessage = action.payload[action.payload.length - 1];
      }
      return {
        ...state,
        messages: state.messages.concat(action.payload),
        filteredMessages: state.messages.concat(action.payload),
        lastMessage: newlastMessage,
        msg_loading: false
      };

    case actionTypes.FILTER_MESSAGES:
      return {
        ...state,
        filteredMessages: state.messages.filter(message => {
          return message.message.toLowerCase().includes(action.payload);
        })
      };
    case actionTypes.SET_MESSAGES_LOADING:
      return {
        ...state,
        msg_loading: true
      };

    default:
      return state;
  }
};

export default messageListReducer;

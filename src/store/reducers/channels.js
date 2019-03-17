import * as actionTypes from "../actions/actionTypes";

const initialState = {
  channels: []
  // filteredChannels: [],
  // loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CHANNELS:
      return {
        ...state,
        channels: action.payload
        //   filteredChannels: action.payload,
        //   loading: false
      };

    case actionTypes.POST_CHANNEL:
      return {
        ...state,
        channels: [action.payload].concat(state.channels)
        //   filteredChanneled: [action.payload].concat(state.channels)
      };
    default:
      return state;
  }
};

//   case actionTypes.FILTER_AUTHORS:
//     return {
//       ...state,
//       filteredAuthors: state.authors.filter(author => {
//         return `${author.first_name} ${author.last_name}`
//           .toLowerCase()
//           .includes(action.payload);
//       })
//     };

export default reducer;

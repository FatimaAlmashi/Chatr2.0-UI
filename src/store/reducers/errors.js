import { SET_ERRORS } from "../actions/actionTypes";

const initialState = {
  error: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERRORS:
      // console.log(action.payload);
      return {
        error: action.payload.non_field_errors
      };
    default:
      return state;
  }
};

export default reducer;

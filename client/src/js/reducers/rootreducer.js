import * as actionTypes from "../actions/messageActions";
const initialState = {
  messages: ["Test message"]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.syncMessages:
      return { ...state, messages: action.payload };
    case actionTypes.appendNewMessage:
      return { ...state, messages: [...state.messages, action.payload] };
    default:
      return state;
  }
};

export default rootReducer;

export const syncMessages = payload => {
  return {
    type: "SYNC_MESSAGES",
    payload
  };
};

export const appendNewMessage = payload => {
  return {
    appendNewMessage: "APPEND_NEW_MESSAGES",
    payload
  };
};

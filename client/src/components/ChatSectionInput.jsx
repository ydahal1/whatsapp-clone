import React, { useState } from "react";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicNoneIcon from "@material-ui/icons/MicNone";

import axios from "../axios";
import "./chatSectionInput.css";

function ChatSectionInput() {
  let [message, setMessage] = useState("");
  let [date, setDate] = useState("");

  //Handle input value change
  const handleInputChange = e => {
    setMessage(e.target.value);
  };

  // Handle form submission
  const handleFormSubmit = e => {
    e.preventDefault();
    //date
    let timeStamp = new Date().toUTCString();
    timeStamp = timeStamp.substring(16);

    //make a api call to save data
    axios
      .post("/messages/new", {
        name: "Logged in user",
        message: message,
        timeStamp: timeStamp,
        received: false
      })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });

    setMessage("");
  };

  return (
    <div className="chatSectionInput">
      <InsertEmoticonIcon />
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Type a message"
          onChange={handleInputChange}
          value={message}
        ></input>
        <button type="submit"> Send a message</button>
      </form>
      <MicNoneIcon />
    </div>
  );
}

export default ChatSectionInput;

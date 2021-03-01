import React from "react";
import IndividualChatMsg from "./IndividualChatMsg";
import "./chatSectionBody.css";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

function ChatSectionBody() {
  const messages = useSelector(store => store.messages);
  return (
    <div className="chatSectionBody">
      {messages.map(message => (
        <IndividualChatMsg data={message} key={uuidv4()} />
      ))}
    </div>
  );
}

export default ChatSectionBody;

import React from "react";
import "./chat.css";
import ChatSectionHeader from "./ChatSectionHeader";
import ChatSectionBody from "./ChatSectionBody";
import ChatSectionInput from "./ChatSectionInput";

function Chat() {
  return (
    <div className="chat">
      <ChatSectionHeader />
      <ChatSectionBody />
      <ChatSectionInput />
    </div>
  );
}

export default Chat;

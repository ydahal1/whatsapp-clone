import React from "react";
import "./sidebarChat.css";
import { Avatar } from "@material-ui/core";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h2>General</h2>
        {/* <p>This is the last message</p> */}
      </div>
    </div>
  );
}

export default SidebarChat;

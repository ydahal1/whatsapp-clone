import React from "react";
import { Avatar } from "@material-ui/core";
import "./chatSectionHeader.css";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

function ChatSectionHeader() {
  return (
    <div className="chatSectionHeader">
      <Avatar />
      <div className="chatSectionHeader__info">
        <h3>General Room</h3>
        <p>Last active 10 minutes ago ..</p>
      </div>
      <div className="chatSectionHeader__right">
        <IconButton>
          <SearchOutlined />
        </IconButton>
        <IconButton>
          <AttachFile />
        </IconButton>
        <IconButton>
          <MoreVert />
        </IconButton>
      </div>
    </div>
  );
}

export default ChatSectionHeader;

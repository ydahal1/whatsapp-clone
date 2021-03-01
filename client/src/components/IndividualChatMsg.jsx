import React from "react";
import "./individualChatMsg.css";

function IndividualChatMsg({ receiver, data }) {
  return (
    <div
      className={
        !data.received
          ? "individualChatMsg individualChatMsg__receiver"
          : "individualChatMsg"
      }
    >
      <span className="individualChatMsg__name">{data.name}</span>
      <p className="individualChatMsg_body">
        {data.message}
        <span className="individualChatMsg__timeStamp">{data.timeStamp}</span>
      </p>
    </div>
  );
}

export default IndividualChatMsg;

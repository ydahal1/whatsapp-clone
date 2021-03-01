import { useEffect } from "react";
import Pusher from "pusher-js";
import axios from "./axios";

import "./App.css";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import messageStore from "./js/store/messageStore";
import * as actionTypes from "./js/actions/messageActions";

function App() {
  //Fetch initial messages from database
  useEffect(() => {
    axios.get("/messages/sync").then(response => {
      messageStore.dispatch({
        type: actionTypes.syncMessages,
        payload: response.data
      });
    });
  }, []);

  //Listining to the pusher
  useEffect(() => {
    const pusher = new Pusher("610b5084e8c096f0ccce", {
      cluster: "us2"
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", data => {
      //dispatching action to append new data to state
      messageStore.dispatch({
        type: actionTypes.appendNewMessage,
        payload: data
      });
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, []);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;

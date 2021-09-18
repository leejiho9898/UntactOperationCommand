import React from "react";
import "./style.css";
const chat = () => {
  return (
    <div>
      <ul id="messages"></ul>
      <form id="form" action="">
        <input id="input" autoComplete="off" />
        <button>Send</button>
      </form>
      <script src="/socket.io/socket.io.js"></script>
      <script>var socket = io();</script>
    </div>
  );
};

export default chat;

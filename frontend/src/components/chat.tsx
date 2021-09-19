import React from "react";
import socketIOClient from "socket.io-client";
import "./style.css";

const ENDPOINT = "http://localhost:8080";
const socket = socketIOClient(ENDPOINT);
const chat = () => {
//   const onchange = (e: React.FormEvent<HTMLFormElement>) => {};
//   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     socket.emit("chat message", value);
//   };
  return (
    <div>
      <ul id="messages"></ul>
      <form id="form" action="">
        <input id="input" autoComplete="off" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default chat;

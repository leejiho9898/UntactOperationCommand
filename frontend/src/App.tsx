import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import chat from './components/chat';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/chat" component={chat} />
      </Switch>
    </>
  );
}

export default App;

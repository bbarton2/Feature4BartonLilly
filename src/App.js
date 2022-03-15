
import "./styles.css";
import React, { useState, useEffect } from "react";
import * as Env from "./enviornment";
import Parse from "parse";
import Components from "./Components/Components.js";

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

function App() {
  return <Components />;
}

export default App;

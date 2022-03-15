import {
  html,
  render,
  useState,
  useEffect
} from "https://unpkg.com/htm/preact/standalone.module.js";
import { getSpecials } from "./Services/specials.service.js";
import { Specials } from "./Components/Specials.js";
import { Header } from "./Components/Header.js";
import "./App.css";
import React, { useState, useEffect } from "react";
import * as Env from "./enviornment";
import Parse from "parse";

import { getById } from './Common/LearnService';


Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

function App() {
  const [menu, setMenu] = useState([]);

  // the useEffect hook is used here to load user data asynchronously
  // we will discuss async data in class, for now you can utilize the pattern

  useEffect(() => {
    return getSpecials().then((data) => {
      setMenu(data);
    });
  }, []);
  // here is where we put everything together
  return html`
  <${Header} title="Specials">
  </${Header}>
  <${Specials} menu="${menu}">
  </${Specials}>
  `;
} // in the future we will be adding in a map function on the main page and add in user registration options

render(html` <${App} /> `, document.getElementById("app"));

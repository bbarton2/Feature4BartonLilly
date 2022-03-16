import React from "react";
import SpecialList from "./SpecialList";
import Header from "../Header/Header";
import { useHistory } from "react-router-dom";


/* MAIN MODULE WITH STATEFUL PARENT AND STATELESS CHILD */
const SpecialModule = () => {
  return (
    <div>
      <Header> </Header>
      <SpecialList />
    </div>
  );
};

export default SpecialModule;
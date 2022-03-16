import { useHistory } from "react-router-dom";
import React from "react";
import HeaderModule from "../Header/Header";
import SubscribeFormModule from "./SubscribeForm";



const SubscribeModule = () => {
    return (
      // returns the header module and subscribe form
      <div>
        <HeaderModule />
        <SubscribeFormModule />
      </div>
    );
  };
  
  export default SubscribeModule;
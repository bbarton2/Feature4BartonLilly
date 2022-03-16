import React from "react";
import SpecialList from "./SpecialList";
import HeaderModule from "../Header/Header";
import { useHistory } from "react-router-dom";


/* Special MODULE WITH STATEFUL PARENT AND STATELESS CHILD */
const SpecialModule = () => {
  return (
    <div>
      <HeaderModule />
      <SpecialList />  {/*calls on child to get inforation so that it can be used in special module */}
    </div>
  );
};

export default SpecialModule;
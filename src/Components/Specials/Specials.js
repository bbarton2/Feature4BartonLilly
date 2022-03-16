import React from "react";
import SpecialList from "./SpecialList";
import HeaderModule from "../Header/Header";


/* Special MODULE WITH STATEFUL PARENT AND STATELESS CHILD */
const SpecialModule = () => {
  return (
    // right now, this looks exactly like the home module, but in the future we
    // will add more to the home module and keep this module simple 
    // with just containing the specials list.
    <div>
      <HeaderModule />
      <SpecialList />  {/*calls on child to get inforation so that it can be used in special module */}
    </div>
  );
};

export default SpecialModule;
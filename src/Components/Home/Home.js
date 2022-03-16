import React from "react";
import SpecialList from "../Specials/SpecialList";
import Header from "../Header/Header";


/* MAIN MODULE WITH STATEFUL PARENT AND STATELESS CHILD */
const Home = () => {
  return (
    <div>
      <Header> </Header>
      <SpecialList />
    </div>
  );
};

export default Home;
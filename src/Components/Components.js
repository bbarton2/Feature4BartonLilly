import React from "react";
import HeaderModule from "./Header/Header";
import SpecialsModule from "./Specials/Specials"
import SubscribeModule from "./Subscribe/Subscribe"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";



export default function Components() {
    return (
    <div>
    <HeaderModule />
    <SpecialsModule />
            
      <Router>
        <Switch>
          {/* <Route path="/" exact component={Home} />          */}
          <Route path="./Specials/specials.js" component={SpecialsModule} />
          <Route path="./Subscribe/subscribe.js" component={SubscribeModule} />
          <Redirect to="/" />
        </Switch>
      </Router>
      </div>
        
    );
  }

  
  

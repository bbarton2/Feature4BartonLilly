import React from "react";
import Home from "./Home/Home"
import HeaderModule from "./Header/Header";
import SpecialsModule from "./Specials/Specials"
import SubscribeModule from "./Subscribe/Subscribe"
import Login from "./Login/Login"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";



export default function Components() {
    return (
    <div>
            
      <Router>
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/specials" component={SpecialsModule} />
          <Route path="/subscribe" component={SubscribeModule} />
          <Route path="/login" component={Login} />
          <Redirect to="/home" />
        </Switch>
      </Router>
      </div>
        
    );
  }

  
  

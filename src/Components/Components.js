import React from "react";
import Home from "./Home/Home"
import SpecialsModule from "./Specials/Specials"
import SubscribeModule from "./Subscribe/Subscribe"
import LoginModule from "./Login/Login"
import { //need to import for Routing to work
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";



export default function Components() {
    return (
    <div>
      {/* where all of the routing is done between the components    */}
      <Router> 
      {/* adding routes for all components on the main nav bar */}
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/specials" component={SpecialsModule} />
          <Route path="/subscribe" component={SubscribeModule} />
          <Route path="/login" component={LoginModule} />
          <Redirect to="/home" />
        </Switch>
      </Router>
      </div>
        
    );
  }

  
  

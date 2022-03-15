import Header from "./Header/Header";
import Locate from "./About/About";
import Login from "./Login/Login";
import Specials from "./Specials/Specials"
import Subscribe from "./Subscribe/Subscribe"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

export default function Components() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />         
          <Route path="/locate" component={Locate} />
          <Route path="/login" component={Login} />
          <Route path="/specials" component={Specials} />
          <Route path="/subscribe" component={Subscribe} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Router>
    );
  }
  
import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Members from "./pages/Members";
import Docs from "./pages/Docs";
import Bookings from "./pages/Bookings";
import { AuthContext } from "./context/auth";
import Login from "./pages/Login";
import Signup from './pages/Signup';
import {Navbar,NavbarGroup,NavbarHeading,NavbarDivider,Button,Alignment} from "@blueprintjs/core";
import logo from "./res/logo.png";

function App(props) {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }
  return (
    <AuthContext.Provider value={{authTokens, setAuthTokens: setTokens}}>
    <Router>
    <Navbar>
    <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading><img src={logo} alt="MIZ Logo" height="40px"/></Navbar.Heading>
        <Navbar.Divider />
        <Link to="/">
          <Button minimal="true" icon="home" text="Home page"/>
        </Link>
        <Link to="/members">
          <Button minimal="true" icon="people" text="Members"/>
        </Link>
        <Link to="/docs">
          <Button minimal="true" icon="document" text="Documents"/>
        </Link>
        <Link to="/bookings">
          <Button minimal="true" icon="calendar" text="Bookings"/>
        </Link>
      </Navbar.Group>
      <Navbar.Group align={Alignment.RIGHT}>
        <Link to="/admin">
          <Button intent="primary" icon="log-in" text="Administration"/>
        </Link>
      </Navbar.Group>
    </Navbar>
        <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/members" component={Members} />
          <Route path="/docs" component={Docs} />
          <Route path="/bookings" component={Bookings} />
          <PrivateRoute path="/admin" component={Admin} />
    </Router>
    </AuthContext.Provider>
  );
}
export default App;

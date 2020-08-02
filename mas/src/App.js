import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Members from "./pages/Members";
import Docs from "./pages/Docs";
import Bookings from "./pages/Bookings";
import Accounting from "./pages/Accounting";
import { AuthContext } from "./context/auth";
import Login from "./pages/Login";
import Signup from './pages/Signup';
import {Navbar,NavbarGroup,NavbarHeading,NavbarDivider,Button,Alignment} from "@blueprintjs/core";
import logo from "./res/logo.png";
import { withTranslation, Trans } from 'react-i18next';

function App(props) {
  //Authentification
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }
  //Localization
  const [lang, setLang]=useState("en");
  const {t} = props
  return (
    <AuthContext.Provider value={{authTokens, setAuthTokens: setTokens}}>
    <Router>
    <Navbar>
    <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading><img src={logo} alt="Logo" height="40px"/></NavbarHeading>
        <NavbarDivider />
        <Link to="/">
          <Button minimal="true" icon="home" text={t('menu.home')}/>
        </Link>
        <Link to="/members">
          <Button minimal="true" icon="people" text={t('menu.members')}/>
        </Link>
        <Link to="/docs">
          <Button minimal="true" icon="document" text={t('menu.documents')}/>
        </Link>
        <Link to="/bookings">
          <Button minimal="true" icon="calendar" text={t('menu.bookings')}/>
        </Link>
        <Link to="/accounting">
          <Button minimal="true" icon="bank-account" text={t('menu.accounting')}/>
        </Link>
      </NavbarGroup>
      <NavbarGroup align={Alignment.RIGHT}>
      <Button onClick={() => {setLang("de");props.i18n.changeLanguage("de")}}>DE</Button>
      <Button onClick={() => {setLang("en");props.i18n.changeLanguage("en")}}>EN</Button>
        <Link to="/admin">
          <Button intent="primary" icon="log-in" text={t('menu.administration')}/>
        </Link>
      </NavbarGroup>
    </Navbar>
        <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/members" component={Members} />
          <Route path="/docs" component={Docs} />
          <Route path="/bookings" component={Bookings} />
          <Route path="/accounting" component={Accounting} />
          <PrivateRoute path="/admin" component={Admin} />
    </Router>
    </AuthContext.Provider>
  );
}
export default withTranslation()(App);

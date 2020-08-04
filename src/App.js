import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import './App.css';
import PrivateRoute from './PrivateRoute';
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Members from "./pages/Members";
import Docs from "./pages/Docs";
import Bookings from "./pages/Bookings";
import Accounting from "./pages/Accounting";
import Inventory from "./pages/Inventory";
import { AuthContext } from "./context/auth";
import Login from "./pages/Login";
import Signup from './pages/Signup';
import Footer from './pages/Footer';
import {Navbar,NavbarGroup,NavbarHeading,NavbarDivider,Button,Alignment} from "@blueprintjs/core";
import {Select} from "@blueprintjs/select";
import logo from "./res/logo.png";
import { withTranslation } from 'react-i18next';
import i18n from 'i18next'

function App(props) {
  //Authentification
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }
  //Localization
  const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
}
  const {t} = props
  return (
    <div id="App">
    <AuthContext.Provider value={{authTokens, setAuthTokens: setTokens}}>
    <Router>
    <Navbar id="Navbar">
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
        <Link to="/inventory">
          <Button minimal="true" icon="box" text={t('menu.inventory')}/>
        </Link>
        <Link to="/accounting">
          <Button minimal="true" icon="bank-account" text={t('menu.accounting')}/>
        </Link>
        <Link to="/admin">
          <Button intent="primary" icon="log-in" text={t('menu.administration')}/>
        </Link>
      </NavbarGroup>
      <NavbarGroup align={Alignment.RIGHT}>
        <NavbarDivider />
        <select onChange={e => changeLanguage(e.target.value)}>
          <option value="de">Deutsch</option>
          <option value="en">English</option>
        </select>
      </NavbarGroup>
    </Navbar>
        <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/members" component={Members} />
          <Route path="/docs" component={Docs} />
          <Route path="/inventory" component={Inventory} />
          <Route path="/bookings" component={Bookings} />
          <Route path="/accounting" component={Accounting} />
          <PrivateRoute path="/admin" component={Admin} />
    </Router>
    </AuthContext.Provider>
    <Footer/>
    </div>
  );
}
export default withTranslation()(App);

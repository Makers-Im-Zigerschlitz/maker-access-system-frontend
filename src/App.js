import React from "react";
import { BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import './App.css';
import PrivateRoute from './PrivateRoute';
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Members from "./pages/Members";
import Docs from "./pages/Docs";
import Bookings from "./pages/Bookings";
import Accounting from "./pages/Accounting";
import Inventory from "./pages/Inventory";
import Login from "./pages/Login";
import Signup from './pages/Signup';
import Footer from './pages/Footer';
import Profile from './pages/Profile';
import Devices from './pages/Devices';
import NotFound from './pages/NotFound';
import LoginButton from './components/LoginButton';
import UserQuery from './components/UserQuery';
import {Navbar,NavbarGroup,NavbarHeading,NavbarDivider,Button,ButtonGroup,Alignment} from "@blueprintjs/core";
import logo from "./res/logo.png";
import { withTranslation } from 'react-i18next';
import i18n from 'i18next'
import { UserProvider} from "./context/UserProvider";


function App(props) {
  //Localization
  const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
}
  const {t} = props
  return (
    <UserProvider>
    <UserQuery/>
    <div id="App" class="bp3-dark">
    <Router>
    <Navbar id="Navbar">
    <NavbarGroup align={Alignment.RIGHT}>
    <LoginButton />
    <NavbarDivider />
    <select onChange={e => changeLanguage(e.target.value)}>
      <option value="de">Deutsch</option>
      <option value="en">English</option>
    </select>
    </NavbarGroup>
    <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading><img src={logo} alt="Logo" height="40px"/></NavbarHeading>
        <NavbarDivider />
        <ButtonGroup>
        <Link to="/">
          <Button icon="home" text={t('menu.home')}/>
        </Link>
        <Link to="/members">
          <Button icon="people" text={t('menu.members')}/>
        </Link>
        <Link to="/docs">
          <Button icon="document" text={t('menu.documents')}/>
        </Link>
        <Link to="/bookings">
          <Button icon="calendar" text={t('menu.bookings')}/>
        </Link>
        <Link to="/devices">
          <Button icon="cube" text={t('menu.devices')}/>
        </Link>
        <Link to="/inventory">
          <Button icon="box" text={t('menu.inventory')}/>
        </Link>
        <Link to="/accounting">
          <Button icon="bank-account" text={t('menu.accounting')}/>
        </Link>
        <Link to="/admin">
          <Button icon="log-in" text={t('menu.administration')}/>
        </Link>
        </ButtonGroup>
      </NavbarGroup>
    </Navbar>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <PrivateRoute path="/members" component={Members} />
        <PrivateRoute path="/docs" component={Docs} />
        <PrivateRoute path="/inventory" component={Inventory} />
        <PrivateRoute path="/bookings" component={Bookings} />
        <Route path="/devices" component={Devices} />
        <PrivateRoute path="/accounting" component={Accounting} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/admin" component={Admin} />
        <Route component={NotFound} />
        </Switch>
    </Router>
    <Footer/>
    </div>
    </UserProvider>
  );
}
export default withTranslation()(App);

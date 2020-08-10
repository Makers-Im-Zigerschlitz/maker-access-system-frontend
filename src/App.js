import React, {useContext} from "react";
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
import Login from "./pages/Login";
import Signup from './pages/Signup';
import Footer from './pages/Footer';
import Profile from './pages/Profile';
import LoginButton from './components/LoginButton';
import {Navbar,NavbarGroup,NavbarHeading,NavbarDivider,Button,Alignment} from "@blueprintjs/core";
import logo from "./res/logo.png";
import { withTranslation } from 'react-i18next';
import i18n from 'i18next'
import axios from 'axios'
import { UserProvider, UserDispatchContext} from "./context/UserProvider";


function App(props) {
  const setUserDetails = useContext(UserDispatchContext);
  //Check if Auth already exists - if yes, get user information
    axios.get("/auth/me").then(result => {
      if (result.status===200) {
      setUserDetails({
        uid:result.data.uid,
        username:result.data.username,
        password:result.data.password,
        level:result.data.level,
        loggedIn:true,
      });
    } else {
      setUserDetails({
        uid:"",
        username:"",
        password:"",
        level:"",
        loggedIn:false,
      })
    }
    }).catch(e => {
      console.log(e);
    });

  //Localization
  const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
}
  const {t} = props
  return (
    <UserProvider>
    <div id="App">
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
      <LoginButton />
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
          <PrivateRoute path="/members" component={Members} />
          <PrivateRoute path="/docs" component={Docs} />
          <PrivateRoute path="/inventory" component={Inventory} />
          <PrivateRoute path="/bookings" component={Bookings} />
          <PrivateRoute path="/accounting" component={Accounting} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/admin" component={Admin} />
    </Router>
    <Footer/>
    </div>
    </UserProvider>
  );
}
export default withTranslation()(App);

import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
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
import { Menubar } from 'primereact/menubar';
import { Dropdown } from 'primereact/dropdown';
import logo from "./res/logo.png";
import { withTranslation } from 'react-i18next';
import i18n from 'i18next'
import { UserProvider} from "./context/UserProvider";
import { Ripple } from 'primereact/ripple';

function App(props) {

  //Localization
  const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
}
  const {t} = props
  const langSelectItems = [
    {label: 'Deutsch', value: 'de'},
    {label: 'English', value: 'en'}
];
//Menu
const items =
[
    {
        label: t('menu.home'),
        icon: 'fas fa-home',
        command: (event) => {
            window.location = "/";
        }
    },
    {
        label: t('menu.members'),
        icon: 'fas fa-users',
        command: (event) => {
            window.location = "/members";
        }
    },
    {
        label: t('menu.documents'),
        icon: 'fas fa-file',
        command: (event) => {
            window.location = "/docs";
        }
    },
    {
        label: t('menu.bookings'),
        icon: 'fas fa-calendar',
        command: (event) => {
            window.location = "/bookings";
        }
    },
    {
        label: t('menu.devices'),
        icon: 'fas fa-laptop-house',
        command: (event) => {
            window.location = "/devices";
        }
    },
    {
        label: t('menu.inventory'),
        icon: 'fas fa-boxes',
        command: (event) => {
            window.location = "/inventory";
        }
    },
    {
        label: t('menu.accounting'),
        icon: 'fas fa-coins',
        command: (event) => {
            window.location = "/accounting";
        }
    },
    {
        label: t('menu.administration'),
        icon: 'fas fa-tools',
        command: (event) => {
            window.location = "/admin";
        }
    },
];


  return (
    <UserProvider>
    <UserQuery/>
    <div id="App" classname="p-ripple">
    <Ripple/>
    <Router>
    <Menubar
      model={items}
      start={<img alt="logo" src={logo} height="40" className="p-mr-2"></img>}
      end={
        <div>
        <LoginButton />
        <Dropdown options={langSelectItems} onChange={e => changeLanguage(e.target.value)} placeholder="Sprache"/>
        </div>
      }
      />


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

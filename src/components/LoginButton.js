import React, {useContext} from "react";
import { withTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import {UserContext, UserDispatchContext} from '../context/UserProvider'
import {Button} from "@blueprintjs/core";
import axios from 'axios';



function LoginButton(props) {
  const {t} = props;
  const userDetails = React.useContext(UserContext);
  const setUserDetails = useContext(UserDispatchContext);

  function handleClick(e) {
      axios.post("/auth/dologout").then(result =>
        {
          if (result.data.successful===true)
          {
            setUserDetails({
              uid:"",
              username:"",
              password:"",
              level:"",
              loggedIn:false,
            });
          }
        }).catch(e => {
          console.log(e);
        });
  }

  if (userDetails.loggedIn) {
    return (
      <Button onClick={handleClick} intent="primary" icon="log-out" text={t('menu.logout')}/>
    );
  } else {
    return (
      <Link to="/login"><Button intent="primary" icon="log-in" text={t('menu.login')}/></Link>
    );
  }
}
export default withTranslation()(LoginButton);

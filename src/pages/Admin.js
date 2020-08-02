import React from "react";
import { withTranslation } from 'react-i18next';
import {Button} from "@blueprintjs/core"
import { useAuth } from "../context/auth";

function Admin(props) {
  const {t} = props
  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();
  }

  return (
    <div>
      <div><h1>{t('menu.administration')}</h1></div>
      <Button onClick={logOut}>Log out</Button>
    </div>
  );
}

export default withTranslation()(Admin);
import React from "react";
import { withTranslation } from 'react-i18next';
import {Button,Card,Elevation} from "@blueprintjs/core"
import { useAuth } from "../context/auth";

function Admin(props) {
  const {t} = props
  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();
  }

  return (
    <Card id="content" elevation={Elevation.TWO}>
    <div>
      <div><h1>{t('menu.administration')}</h1></div>
      <Button onClick={logOut}>{t('admin.logout')}</Button>
    </div>
    </Card>
  );
}

export default withTranslation()(Admin);

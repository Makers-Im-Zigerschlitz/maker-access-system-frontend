import React from "react";
import { withTranslation } from 'react-i18next';
import {Card,Elevation} from "@blueprintjs/core"

function Admin(props) {
  const {t} = props

  return (
    <Card id="content" elevation={Elevation.TWO}>
    <div>
      <div><h1>{t('menu.administration')}</h1></div>
    </div>
    </Card>
  );
}

export default withTranslation()(Admin);

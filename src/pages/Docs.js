import React from "react";
import { withTranslation } from 'react-i18next';
import {Card,Elevation} from "@blueprintjs/core";

function Docs(props) {
    const {t} = props
return (
  <Card id="content" elevation={Elevation.TWO}>
  <div>
  <h1>{t('menu.documents')}</h1>
  </div>
  </Card>
)
}

export default withTranslation()(Docs);

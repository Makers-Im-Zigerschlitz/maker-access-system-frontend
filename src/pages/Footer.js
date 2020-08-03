import React from "react";
import { withTranslation } from 'react-i18next';
import {Card,Elevation} from "@blueprintjs/core";

function Footer(props) {
  const {t} = props
return (
  <Card elevation={Elevation.TWO}>
  <p>{t('footer.copyright')}</p>
  </Card>
)
}

export default withTranslation()(Footer);

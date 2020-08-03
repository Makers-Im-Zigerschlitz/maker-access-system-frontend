import React from "react";
import { withTranslation } from 'react-i18next';
import {Card,Elevation} from "@blueprintjs/core";

function Footer(props) {
  const {t} = props
return (
  <Card elevation={Elevation.TWO}>
  <p>Maker Access System</p>
  </Card>
)
}

export default withTranslation()(Footer);

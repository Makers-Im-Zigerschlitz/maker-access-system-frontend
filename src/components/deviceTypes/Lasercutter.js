import React from "react";
import { withTranslation } from 'react-i18next';
import {Card,Elevation,Icon} from "@blueprintjs/core";

function Lasercutter(props) {
  const {t} = props
  return (
    <Card className="dev-lasercutter devicecard" elevation={Elevation.TWO}>
    <div>
    <Icon icon="flame" iconSize="20px" alt={t('devices.lasercutter')}/>
    <h1>{props.name}</h1>
    <h2>{props.description}</h2>
    </div>
    </Card>
  )
}

export default withTranslation()(Lasercutter);

import React from "react";
import { withTranslation } from 'react-i18next';
import {Card,Elevation,Icon} from "@blueprintjs/core";

function Plotter(props) {
  const {t} = props
  return (
    <Card className="dev-plotter devicecard" elevation={Elevation.TWO}>
    <div>
    <Icon icon="cut" iconSize="20px" alt={t('devices.plotter')}/>
    <h1>{props.name}</h1>
    <h2>{props.description}</h2>
    </div>
    </Card>
  )
}

export default withTranslation()(Plotter);

import React from "react";
import { withTranslation } from 'react-i18next';
import {Card,Elevation,Icon} from "@blueprintjs/core";

function Plotter(props) {
  const {t} = props
  return (
    <Card className="dev-plotter devicecard" elevation={Elevation.TWO}>
      <div>
        <div className="dev-logo"><Icon icon="cut" iconSize="150px" alt={t('devices.plotter')}/></div>
        <div className="dev-content">
          <h1>{props.name}</h1>
          <h2>{props.description}</h2>
        </div>
      </div>
    </Card>
  )
}

export default withTranslation()(Plotter);

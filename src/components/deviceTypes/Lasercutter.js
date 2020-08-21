import React from "react";
import { withTranslation } from 'react-i18next';
import { Card } from 'primereact/card';

function Lasercutter(props) {
  const {t} = props
  return (
    <Card className="dev-lasercutter devicecard">
      <div>
        <div className="dev-logo"><i className="pi pi-table" style={{'fontSize': '150px'}} alt={t('devices.lasercutter')} /></div>
        <div className="dev-content">
          <h1>{props.name}</h1>
          <h2>{props.description}</h2>
        </div>
      </div>
    </Card>
  )
}

export default withTranslation()(Lasercutter);

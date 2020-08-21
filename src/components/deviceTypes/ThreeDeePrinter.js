import React from "react";
import { withTranslation } from 'react-i18next';
import { Card } from 'primereact/card';

function ThreeDeePrinter(props) {
  const { t } = props;
  return (
    <Card className="dev-3dprinter devicecard">
      <div>
        <div className="dev-logo"><i className="fas fa-print" style={{'fontSize': '150px'}} alt={t('devices.lasercutter')} /></div>
        <div className="dev-content">
          <h1>{props.name}</h1>
          <h2>{props.description}</h2>
        </div>
      </div>
    </Card>
  );
}

export default withTranslation()(ThreeDeePrinter);

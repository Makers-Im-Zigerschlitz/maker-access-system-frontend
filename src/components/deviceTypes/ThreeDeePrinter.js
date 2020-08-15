import React from "react";
import { withTranslation } from "react-i18next";
import { Card, Elevation, Icon } from "@blueprintjs/core";

function ThreeDeePrinter(props) {
  const { t } = props;
  return (
    <Card className="dev-3dprinter devicecard" elevation={Elevation.TWO}>
      <div>
        <Icon icon="print" iconSize="20px" alt={t("devices.3dprinter")} />
        <h1>{props.name}</h1>
        <h2>{props.description}</h2>
      </div>
    </Card>
  );
}

export default withTranslation()(ThreeDeePrinter);

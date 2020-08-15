import React from "react";
import { withTranslation } from "react-i18next";
import { Card, Elevation } from "@blueprintjs/core";

function Inventory(props) {
  const { t } = props;
  return (
    <Card id="content" elevation={Elevation.TWO}>
      <div>
        <h1>{t("menu.inventory")}</h1>
      </div>
    </Card>
  );
}

export default withTranslation()(Inventory);

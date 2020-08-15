import React from "react";
import { withTranslation } from "react-i18next";
import { Card, Elevation } from "@blueprintjs/core";

function NotFound(props) {
  const { t } = props;

  return (
    <Card id="content" elevation={Elevation.TWO}>
      <div>
        <h1>404</h1>
        <h2>{t("menu.notfound")}</h2>
      </div>
    </Card>
  );
}

export default withTranslation()(NotFound);

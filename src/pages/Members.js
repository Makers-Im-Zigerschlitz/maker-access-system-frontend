import React from "react";
import { withTranslation } from "react-i18next";
import { Card, Elevation } from "@blueprintjs/core";
import { Table, Column } from "@blueprintjs/table";

function Members(props) {
  const { t } = props;
  return (
    <Card id="content" elevation={Elevation.TWO}>
      <div>
        <h1>{t("menu.members")}</h1>
        <Table numRows={5}>
          <Column name="ID" />
          <Column name="First name" />
          <Column name="Last name" />
          <Column name="Street" />
          <Column name="ZIP" />
          <Column name="State" />
          <Column name="City" />
          <Column name="Country" />
        </Table>
      </div>
    </Card>
  );
}

export default withTranslation()(Members);

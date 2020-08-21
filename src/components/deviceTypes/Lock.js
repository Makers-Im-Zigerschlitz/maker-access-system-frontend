import React from "react";
import { withTranslation } from 'react-i18next';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import axios from 'axios';

function Lock(props) {
  const { t } = props;

  function open() {
    console.log("/device/" + props.key);
    axios
      .post("/device/" + props.key, {
        action: "unlock",
      })
      .then((result) => {
        console.log("unlocked!");
      })
      .catch((e) => {
        console.log(e);
      });
  }
  function close() {
    axios
      .post("/device/" + props.devid, {
        action: "lock",
      })
      .then((result) => {
        console.log("locked!");
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <Card className="dev-lock devicecard">
      <div>
        <div className="dev-logo"><i className="fas fa-key" style={{'fontSize': '150px'}} alt={t('devices.lasercutter')} /></div>
        <div className="dev-content">
          <h1>{props.name}</h1>
          <h2>{props.description}</h2>

          <Button onClick={open} label="open"/>
          <Button onClick={close} label="close"/>
        </div>
      </div>
    </Card>
  );
}

export default withTranslation()(Lock);

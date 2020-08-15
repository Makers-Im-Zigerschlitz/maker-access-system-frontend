import React from "react";
import { withTranslation } from 'react-i18next';
import {Card,Elevation,Icon,Button} from "@blueprintjs/core";
import axios from 'axios';

function Lock(props) {
  const {t} = props;

    function open() {
      console.log("/device/"+props.key);
      axios.post("/device/"+props.key, {
        action: "unlock"
      }).then(result => {
        console.log("unlocked!");
      }).catch(e => {
        console.log(e);
      });
    }
    function close() {
      axios.post("/device/"+props.devid, {
        action: "lock"
      }).then(result => {
        console.log("locked!");
      }).catch(e => {
        console.log(e);
      });
    }
  return (
    <Card className="dev-lock devicecard" elevation={Elevation.TWO} color="blue">
    <div>
    <Icon icon="key" iconSize="20px" alt={t('devices.lock')}/>
    <h1>{props.name}</h1>
    <h2>{props.description}</h2>

    <Button onClick={open} text="open"/>
    <Button onClick={close} text="close"/>

    </div>
    </Card>
  )
}

export default withTranslation()(Lock);

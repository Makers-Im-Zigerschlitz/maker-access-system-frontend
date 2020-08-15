import React, { useState, useEffect } from "react";
import { withTranslation } from 'react-i18next';
import {Card,Elevation} from "@blueprintjs/core";
import Lock from '../components/deviceTypes/Lock';
import ThreeDeePrinter from '../components/deviceTypes/ThreeDeePrinter';
import Plotter from '../components/deviceTypes/Plotter';
import Lasercutter from '../components/deviceTypes/Lasercutter';
import axios from 'axios';

function Devices(props) {
    const {t} = props
    const [data, setData] = useState([]);
    const Components = {
      1: Lock,
      2: ThreeDeePrinter,
      3: Lasercutter,
      4: Plotter
    };

    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          '/device',
        );
        console.log("Fetching devices...");
        console.log(result.data);
        setData(result.data);
      };

      fetchData();
    }, []);

return (
  <Card id="content" elevation={Elevation.TWO}>
  <div>
  <h1>{t('menu.devices')}</h1>
  </div>
  {data.map(item => (
    React.createElement(Components[item.deviceType],
      {
      key:          item.deviceID,
      name:         item.deviceName,
      description:  item.deviceDesc
      }
    )
  ))}
  </Card>

)
}

export default withTranslation()(Devices);

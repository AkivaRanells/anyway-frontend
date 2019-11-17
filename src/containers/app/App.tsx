import React from 'react';
import AnywayMap from '../map/Map';
import styles from "./App.module.css";
import AreaChart from "../charts/area-chart";

const App: React.FC = () => {
  return (
    <div className={styles.mainApp}>
      <AnywayMap />
      <div className={styles.areaChartWrapper}>
        <AreaChart></AreaChart>
      </div>
    </div>
  );
}

export default App;

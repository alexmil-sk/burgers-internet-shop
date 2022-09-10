import React from 'react';
import noData from '../../assets/image/no-data.jpg';
import classes from "./AppNoData.module.scss";


export const AppNoData: React.FC = () => {
  return (
    <>
      <div className={classes.AppNoData}>
        <div className={classes.AppNoDataTitle}>
          <h2>sorry! no any burgers...</h2>
        </div>
        <img src={noData} alt="no-data"/>
      </div>
    </>
  );
}

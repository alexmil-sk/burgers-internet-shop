import React from 'react';
import classes from './NotFound.module.scss';
import AppNoData from "../../components/AppNoData/AppNoData.jsx";

function NotFound() {
  return (
    <div className={classes.container}>
      <AppNoData />
    </div>
  );
}

export default NotFound;

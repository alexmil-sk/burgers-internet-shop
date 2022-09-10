import React from 'react';
import classes from './NotFound.module.scss';
import {AppNoData} from "../../components";

const NotFound: React.FC = () => {
  return (
    <div className={classes.container}>
      <AppNoData />
    </div>
  );
}

export default NotFound;

import React from 'react';
import classes from './AppSearch.module.scss';
import { BsSearch } from "react-icons/bs";


function AppSearch() {
  return (
    <div className={classes.search}>
      <input type="text" placeholder="Введите название пиццы..."/>
      <span className={classes.icon} >
        <BsSearch/></span>
    </div>
  );
}

export default AppSearch;

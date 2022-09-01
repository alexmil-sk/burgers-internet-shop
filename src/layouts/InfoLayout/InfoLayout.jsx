import React, {useState} from 'react';
import classes from './InfoLayout.module.scss';
import {Link, Outlet} from "react-router-dom";
import catalogBtnRed from '../../assets/image/btn/back-to-catalog-red.png';
import catalogBtnGreen from '../../assets/image/btn/back-to-catalog-green.png';

function InfoLayout() {
  
  const [isClickedToCat, setIsClickedToCat] = useState(false);
  
  
  console.log(isClickedToCat);
  
  
  return (
    <>
        <div className="wrapper">
          <Outlet />
          <div className={classes.InfoLayoutCatalogBtn}>
            <Link to="/">
              <img
                onMouseDown={() => setIsClickedToCat(true)}
                src={isClickedToCat ? catalogBtnGreen : catalogBtnRed} alt={isClickedToCat ? 'catalogBtnGreen' : 'catalogBtnRed'}  />
            </Link>
          </div>
        </div>
    </>
  );
}

export default InfoLayout;

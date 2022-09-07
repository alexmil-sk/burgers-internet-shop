import React from 'react';
import {Outlet} from 'react-router-dom';
//import classes from './MainLayout.module.scss';
import AppHeader from "../../components/AppHeader/AppHeader";

const MainLayout: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <AppHeader/>
        <Outlet />
      </div>
    
    </>
  );
}

export default MainLayout;

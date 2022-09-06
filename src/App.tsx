// @ts-ignore
import * as React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Cart from "./pages/Cart/Cart.js";
import AppBurgerInfo from "./components/AppBurgerInfo/AppBurgerInfo.js";
import MainLayout from "./layouts/MainLayout/MainLayout.jsx";
import InfoLayout from "./layouts/InfoLayout/InfoLayout.jsx";



function App () {
  
    return (
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />}/>
            <Route path="cart" element={<Cart />}/>
            <Route path="*" element={<NotFound />}/>
          </Route>
          <Route path="/" element={<InfoLayout />}>
            <Route path="burgers/:burgerId" element={<AppBurgerInfo />}/>
          </Route>
        </Routes>
  )
}

export default App;

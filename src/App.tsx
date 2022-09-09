// @ts-ignore
import React, {Suspense} from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound.js";
//import Cart from "./pages/Cart/Cart.js";
//import AppBurgerInfo from "./components/AppBurgerInfo/AppBurgerInfo.js";
import MainLayout from "./layouts/MainLayout/MainLayout";
import InfoLayout from "./layouts/InfoLayout/InfoLayout";
import AppLoader from "./components/AppLoader/AppLoader";

const Cart = React.lazy(() => import(/* webpackChunkName: "CartChunk" */"./pages/Cart/Cart"))
const AppBurgerInfo = React.lazy(() => import(/* webpackChunkName: "AppBurgerInfoChunk" */"./components/AppBurgerInfo/AppBurgerInfo"));


function App() {
  
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route
          path="cart"
          element={
          <Suspense fallback={<div style={{textAlign: 'center'}}><AppLoader /></div>}>
          <Cart/>
        </Suspense>
        }/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
      <Route path="/" element={<InfoLayout/>}>
        <Route path="burgers/:burgerId" element={
          <Suspense fallback={<div style={{textAlign: 'center'}}><AppLoader /></div>}>
            <AppBurgerInfo/>
          </Suspense>
        }/>
      </Route>
    </Routes>
  )
}

export default App;

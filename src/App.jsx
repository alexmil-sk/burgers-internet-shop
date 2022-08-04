import React, {useState, createContext} from "react";
import {Routes, Route, useLocation} from "react-router-dom";
import AppHeader from "./components/AppHeader/AppHeader.jsx";
import Home from "./pages/Home/Home.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import AppSearch from "./components/AppSearch/AppSearch.jsx";

export const ContextSearchField = createContext({});


function App() {
  
  const [searchField, setSearchField] = useState('');
  let location = useLocation();
  
  return (
    <div className="wrapper">
      <ContextSearchField.Provider value={{searchField, setSearchField}}>
        <AppHeader/>
        {
          location.pathname === '/cart'
            ? null
            : <AppSearch/>
        }
        
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </ContextSearchField.Provider>
    </div>
  )
}

export default App;

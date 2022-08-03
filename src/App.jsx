import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import AppHeader from "./components/AppHeader/AppHeader.jsx";
import Home from "./pages/Home/Home.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import AppSearch from "./components/AppSearch/AppSearch.jsx";


function App() {
  
  const [searchField, setSearchField] = useState('');
  
  return (
    <div className="wrapper">
      <AppHeader/>
      <AppSearch searchField={searchField} setSearchField={setSearchField}/>
      
        <Routes>
          <Route path="/" element={<Home searchField={searchField}/>} />
          <Route path="cart" element={<Cart />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
    </div>
  )
}

export default App;

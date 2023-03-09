import React from 'react'
import { BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import ProductRegister from "./ProductRegister";
import Delete from "./Delete";
import Patch from "./Patch";
import Products from "./Products";


function App() {
  return (
    <div className="App">
         <BrowserRouter>
            <div className="header">
              <NavLink  exact activeClassName="active" to="/product">Home</NavLink>
              <NavLink   activeClassName="active" to="/products-delete">Delete</NavLink>
              <NavLink   activeClassName="active" to="/products-patch">Update</NavLink>
              <NavLink   activeClassName="active" to="/products">Products</NavLink>
              
            </div>
            <div className="content">
              <Routes>
                
                 <Route path="/product"   element={ <ProductRegister/>} />
                 <Route path="/products-delete"   element={ <Delete/>} />
                 <Route path="/products-patch"   element={ <Patch/>} />
                 <Route path="/products"   element={ <Products/>} />
                 
                 
              </Routes>
            </div>
         </BrowserRouter>
        
    </div>
  );
}

export default App;
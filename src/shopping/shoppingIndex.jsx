import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ShoppingHome from "./shoppingHome";
import ShoppingProducts from "./shoppingProducts";
import ShoppingDetails from "./shoppingDetails";
import ShoppingSearch from "./shoppingSearch";
import ShoppingSearchResult from "./shoppingSearchResult";

const ShoppingIndex = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <header className="p-2 mt-2 border">
          <div className="text-center">
            <span className="font-bold text-2xl">Shopping</span>
            <div>
                <Link to="/search">Search Products</Link>
            </div>
          </div>
        </header>
        <section className="mt-4">
          <Routes>
            <Route path="/" element={<ShoppingHome />} />
            <Route path="products/:category" element={<ShoppingProducts />}>
              <Route path="details/:id" element={<ShoppingDetails />} />
            </Route>
            <Route path="search" element={<ShoppingSearch/>}/>
            <Route path="searchResult" element={<ShoppingSearchResult/>}/>
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
};

export default ShoppingIndex;

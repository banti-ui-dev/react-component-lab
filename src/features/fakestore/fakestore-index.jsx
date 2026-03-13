import React, { useState } from "react";
import Button from "../../components/Button";
import FakestoreProduct from "./fakestore-product";

const FakestoreIndex = () => {
    const [cartItem, setCartItem] = useState([])
    const[cartItemcount, setCartItemcount] = useState(0)
    const handleAddtoCartClick = (e) => {
        cartItem.push(e)   
        alert(`${e.title}\nAdded to cart`); 
        setCartItemcount(cartItem.length)     
    }
  return (
    <div className="container mx-auto px-8">
      <header className="flex items-center justify-between">
        <h3 >Fake Store</h3>
        <nav>
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700">
            Search
          </button>
        </nav>
        <div>
          <Button variant="danger">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835L5.76 8.25m0 
                0L7.5 15h9.75l1.5-6.75H5.76zM7.5 
                15a1.5 1.5 0 100 3 1.5 1.5 0 
                000-3zm9 0a1.5 1.5 0 100 3 
                1.5 1.5 0 000-3z"
              />
            </svg>
            {cartItemcount}
          </Button>
          
        </div>
      </header>
      
      <div>
        <FakestoreProduct addTocart={handleAddtoCartClick}/>
      </div>
    </div>
  );
};

export default FakestoreIndex;

import React, { useState } from "react";
import Button from "../../components/Button";
import FakestoreProduct from "./fakestore-product";

const FakestoreIndex = () => {
  const [cartItem, setCartItem] = useState([]);
  const [cartItemcount, setCartItemcount] = useState(0);
  const [showCart, setShowCart] = useState(null);
  const handleAddtoCartClick = (e) => {
    cartItem.push(e);
    // alert(`${e.title}\nAdded to cart`);
    setCartItemcount(cartItem.length);
    console.log(e);
  };
  const toggleCartDrawer = () => {
    setShowCart(!showCart);
  };
  const handleDelete = (index) => {
    const updatedItem =  cartItem.filter((_,i) => i !== index)
    setCartItem(updatedItem)
    setCartItemcount(updatedItem.length);
  }
  return (
    <div className="container mx-auto px-8">
      <header className="flex items-center justify-between">
        <h3>Fake Store</h3>
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
          <Button variant="danger" onClick={toggleCartDrawer}>
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
          <div
            className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transition-transform duration-300 z-50
                ${showCart ? "translate-x-0" : "translate-x-full"}`}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="font-bold text-lg">Cart</h3>
              <button
                onClick={toggleCartDrawer}
                className="text-gray-500 hover:text-black"
              >
                {" "}
                ✕{" "}
              </button>
            </div>
            <div className="p-4">
              <h3>Your Cart Items</h3>
              <div>
                <table>
                  <thead>
                    <tr>
                      <th align="left" width="35%"> Title </th>
                      <th align="left" width="25%">Priview</th>
                      <th align="right" width="30%">Price</th>
                      <th align="right" width="10%">&nbsp;&nbsp;&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItem.map((item,index) => (
                      <tr key={item.id}>
                        <td width="35%">{item.title}</td>
                        <td width="25%">
                          <img src={item.image} height="50" width="50" />
                        </td>
                        <td align="right" width="30%">{item.price}</td>
                        <td align="right" idth="10%"><button onClick={() => handleDelete(index)}>X</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div>
        <FakestoreProduct addTocart={handleAddtoCartClick} />
      </div>
    </div>
  );
};

export default FakestoreIndex;

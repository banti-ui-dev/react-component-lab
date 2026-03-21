import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ShoppingDetails = () => {
  const [products, setProducts] = useState({});
  let params = useParams();
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((response) => {
        setProducts(response.data);
      });
  }, [params.id]);
  return (
    <div>
      <div className="grid grid-cols-1 gap-10 py-2">
        <div className="bg-white rounded-lg shadow-xl" key={products.id}>
          <img
            src={products.image}
            className="w-full h-50 rounded-t-md mb-3 "
          />
          <div className="p-4">
            <p className="text-sm text-gray-500">{products.category}</p>
            <p className="text-sm font-semibold" style={{ height: "100px" }}>
              {products.title}
            </p>
            <div className="flex justify-between items-center mt-3">
              <span className="text-blue-600 font-bold">
                ₹ {products.price}
              </span>
              <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <h1>Details</h1>
      <ul>
        <li>{products.title}</li>
      </ul> */}
    </div>
  );
};

export default ShoppingDetails;

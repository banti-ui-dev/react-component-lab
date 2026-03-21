import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ShoppingHome = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/categories`)
      .then((response) => {
        setCategories(response.data);
      });
  }, []);
  return (
    <div>
      <h1>Home</h1>
      <ul>
        {categories.map((category) => (
          <li
            className="bg-black text-white px-3 py-2 mb-2 max-w-md hover:bg-gray-800"
            key={category}
          >
            <Link to={`/products/${category}`}>{category.toUpperCase()}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingHome;

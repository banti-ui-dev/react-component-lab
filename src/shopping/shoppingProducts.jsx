import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Links, Outlet, useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";

const ShoppingProducts = () => {
  const [products, setPrducts] = useState([]);
  let params = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${params.category}`)
      .then((response) => {
        setPrducts(response.data);
      });
  }, []);
  const handleHomeClick = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <div className="mb-4">
            <h1>{params.category.toUpperCase()} PRODUCTS</h1>
            <ol className="list-disc ml-5">
              {products.map((product) => (
                <li key={product.id}>
                  <Link to={`details/${product.id}`}>{product.title}</Link>
                </li>
              ))}
            </ol>
          </div>
          <Link
            to="/"
            className="text-blue-900 font-bold border py-2 px-3 rounded-sm"
          >
            Back to Home
          </Link>
          <Button onClick={handleHomeClick}>Home</Button>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ShoppingProducts;

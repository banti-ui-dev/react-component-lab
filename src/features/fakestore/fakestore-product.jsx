import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import ProductContext from "./productContext";

const FakestoreProduct = ({ addTocart }) => {
  const [products, setProducts] = useState([
    {
      id: 0,
      title: "",
      price: 0,
      description: null,
      image: null,
      category: null,
    },
  ]);
  const context = useContext(ProductContext);
  
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((response) => {
        setProducts(response.data);
      });
  }, []);
  
const filteredproduct = products.filter((product) =>
    product.title.toLowerCase().includes(context.toLowerCase())
  );
  const handleaddClick = (product) => {
    addTocart(product);
  };

  return (
    //Child Component
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-10">
      {filteredproduct.map((product) => (
        <div className="bg-white rounded-lg shadow-xl" key={product.id}>
          <img src={product.image} className="w-full h-40 rounded-t-md mb-3 " />
          <div className="p-4">
            <p className="text-sm text-gray-500">{product.category}</p>
            <p className="text-sm font-semibold" style={{ height: "100px" }}>
              {product.title}
            </p>
            <div className="flex justify-between items-center mt-3">
              <span className="text-blue-600 font-bold">₹ {product.price}</span>
              <button
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                onClick={() => {
                  handleaddClick(product);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FakestoreProduct;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const ShoppingSearchResult = () => {
  const [params] = new useSearchParams();
  const[products,setPrducts] = useState([])
    useEffect(()=>{
        axios
        .get(`https://fakestoreapi.com/products/category/${params.get("searchstring")}`)
        .then((res) => {setPrducts(res.data)})
    },[])
  return (
    <div>
      <h2>Searching for - {params.get("searchstring")}</h2>
      <ul>
        {
            products.map(product => 
                <li key={product.id}>{product.title}</li>
            )
        }
      </ul>
      
    </div>
  );
};

export default ShoppingSearchResult;

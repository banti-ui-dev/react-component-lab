import React, { useState } from "react";
import useApidata from "./useApidata";
import Button from "../../components/Button";
import ProductContext from "./productContext";
import ProductNamelist from "./productNamelist";

const ProductsList = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1)
  const products = useApidata(page);
  const filteredData = products.filter(product=> product.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <div>
      <input
        type="text"
        className="border px-3 py-1 text-xl my-4 w-full"
        placeholder="Search Name here.."
        onChange={(e) => setSearch(e.target.value)}
      />
      <table className="w-full">
        <tbody>
          <tr>
            <th className="border px-3 py-1 text-left w-1/3">Name</th>
            <th className="border px-3 py-1 text-left">URL</th>
          </tr>
          {filteredData.map((product) => (
            <tr key={product.name}>
              <td className="border px-3 py-1 text-left">{product.name}</td>
              <td className="border px-3 py-1 text-left">{product.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="my-4">
          <Button onClick={() => setPage(prev => prev > 1 ? prev - 1 : 1)}>Previous</Button>
          <span>Page Number {page}</span>
          <Button onClick={() => setPage(prev => prev + 1)}>Next</Button>
      </div>
      <ProductContext.Provider value={search}>
        <ProductNamelist/>
      </ProductContext.Provider>
    </div>
  );
};

export default ProductsList;

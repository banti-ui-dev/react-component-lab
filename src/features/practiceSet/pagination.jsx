import React, { useEffect, useState } from "react";
import Button from "../../components/Button";

const PaginationExample = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalpages, setTotalpages] = useState(0)

  // Fetch API data
  useEffect(() => {
    const fetchproduct = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products?limit=100`,
        );
        if (!response.ok) {
          throw new Error("API Error");
        }
        const data = await response.json();
        console.log(data);
        
        setProducts(data.products);
      } catch (err) {
        console.log(err);
      }
    };
    fetchproduct();
  }, []);

  const selectpagehandeler = (selectedpage) => {
    if(
        selectedpage >= 1 &&
        selectedpage <= products.length / 10 &&
        selectedpage !== page
    )
        
    
    setPage(selectedpage);
  };

  return (
    <div>
      <h2>Pagination Example</h2>
      <table>
        <tbody>
          {products.slice(page * 10 - 10, page * 10).map((product) => (
            <tr key={product.id}>
              <td className="border">{product.title}</td>
              <td className="border">{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {products.length > 0 && (
        <div className="mt-4">
          <span className="border py-1 px-2 mr-2" onClick={() => selectpagehandeler(page - 1)}>left</span>
          {[...Array(products.length / 10)].map((_, i) => (
            <span
              className={`border py-1 px-2 mr-2 ${page === i + 1 ? "bg-red-200" : "bg-white"}`}
              key={i}
              onClick={() => selectpagehandeler(i + 1)}
            >
              {i + 1}
            </span>
          ))}
          <span className="border py-1 px-2 mr-2" onClick={() => selectpagehandeler(page + 1)}>right</span>
        </div>
      )}
    </div>
  );
};

export default PaginationExample;

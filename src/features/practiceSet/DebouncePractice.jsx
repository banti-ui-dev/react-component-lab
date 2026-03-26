import React, { useEffect, useState } from "react";

const DebouncePractice = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [timerdata, setTimerdata] = useState("");
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) {
          throw new error("Api error");
        }
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, []);

  // filter data to search and pass by timer debaunce
  useEffect(() => {
    const timer = setTimeout(()=>{
        setTimerdata(search)
    },1000)
    return () => clearTimeout(timer)
  }, [search]);

  const filterProduct = products.filter((product) =>
    product.title.toLowerCase().includes(timerdata.toLowerCase()),
  );

  return (
    <div>
      <h2>DebouncePractice</h2>
      <input
        type="text"
        placeholder="Search here ....."
        className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
        onChange={(e) => setSearch(e.target.value)}
      />
      <table className="mt-6 w-full">
        <thead>
          <tr>
            <td className="px-2 py-1 border">ID</td>
            <td className="px-2 py-1 border">Title</td>
            <td className="px-2 py-1 border">Descrition</td>
          </tr>
        </thead>
        <tbody>
          {filterProduct.map((product) => (
            <tr key={product.id}>
              <td className="px-2 py-1 border">{product.id}</td>
              <td className="px-2 py-1 border">{product.title}</td>
              <td className="px-2 py-1 border">{product.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DebouncePractice;

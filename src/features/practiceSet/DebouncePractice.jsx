import React, { useEffect, useState } from "react";
import Button from "../../components/Button";

const DebouncePractice = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)
  const [timerdata, setTimerdata] = useState("")

  useEffect(() => {
    const fetchProducts = async () => {
      setError(null);
      setLoading(true)
      try {
        const response = await fetch(
          `https://dummyjson.com/products?limit=10&skip=${page*10-10}`
        );
        if (!response.ok) {
          throw new Error("API Error");
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        setError(err);
      } finally{
        setLoading(false)
      }
    };
    fetchProducts();
  }, [page]);
  useEffect(()=>{
    setLoading(true)
    const timer = setTimeout(()=>{
      setTimerdata(search)
      setLoading(false)
    },1000)
    return () => clearTimeout(timer)
  },[search])
  const filteredData = products.filter(product => product.title.toLowerCase().includes(timerdata.toLowerCase()))
  return (
    <div>
      {error && <p className="text-red-900">{error.message}</p>}
      <input type="text" className="w-full p-2 border rounded-b-md" placeholder="Search......." onChange={(e)=>setSearch(e.target.value)}/>
      {loading && <p className="text-center">Loading........</p>}
      {filteredData.map((product) => (
        <p key={product.id}>
          {product.id}. {product.title}
        </p>
      ))}
      <Button onClick={()=>setPage((prev)=>prev-1)}>prev</Button>
      <Button onClick={()=>setPage((prev)=>prev+1)}>Next</Button>
      <p>page number : {page}</p>
    </div>
  );
};

export default DebouncePractice;

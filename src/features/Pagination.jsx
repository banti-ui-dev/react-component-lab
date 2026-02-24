import React, { useEffect, useState } from "react";
import Button from "../components/Button";

const Pagination = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [timerdata, setTimerdata] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) {
          throw new Error("API Error");
        }
        const getData = await res.json();
        setData(getData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  //debounce
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setTimerdata(search);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [search]);

  const filterData = data.filter((item) =>
    item.title.toLowerCase().includes(timerdata.toLowerCase()),
  );
  //Pagination
  const [currentpage, setCurrentpage] = useState(1);
  const itemsPerPage = 5;
  const lastIndex = currentpage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentdata = data.slice(firstIndex, lastIndex);
  const totalPage = Math.ceil(data.length / itemsPerPage);

  const nextPage = () => {
    if (currentpage < totalPage) {
      setCurrentpage((prev) => prev + 1);
    }
  };
  const prevPage = () => {
    if (currentpage > 1) {
      setCurrentpage((prev) => prev - 1);
    }
  };
  return (
    <div>
      <input
        type="text"
        className="border rounded-md w-full p-3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search ......"
      />
      {error && <p className="text-red-500 text-center">{error.message}</p>}
      {loading && <p className="text-center">Loading ..........</p>}
      <table className="w-full border mt-4">
        <thead>
          <tr>
            <td className="border p-3">ID</td>
            <td className="border p-3">UserID</td>
            <td className="border p-3">Title</td>
            <td className="border p-3">Description</td>
          </tr>
        </thead>
        <tbody>
          {currentdata.map((item) => (
            <tr key={item.id}>
              <td className="border p-2">{item.id}</td>
              <td className="border p-2">{item.userId}</td>
              <td className="border p-2">{item.title}</td>
              <td className="border p-2">{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <Button onClick={prevPage}>Previour</Button>
        {[...Array(totalPage)].map((_, i) => (
          <button className="p-3" key={i} onClick={() => setCurrentpage(i + 1)}>
            {i + 1}
          </button>
        ))}
        <Button onClick={nextPage}>Next</Button>
      </div>
    </div>
  );
};

export default Pagination;

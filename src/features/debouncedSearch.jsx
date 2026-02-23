import React, { use, useEffect, useState } from "react";

const DebouncedSearch = () => {
  //APA Data fatch
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [search, setsearch] = useState("");
  const [loader, setLoader] = useState(false);
  const [timerdata, setTimerdata] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) {
          throw new Error("API Not working");
        }
        const getdata = await res.json();
        setData(getdata);
      } catch (err) {
        setError(err);
      } finally {
        setLoader(false);
      }
    };
    fetchData();
  }, []);
  // filter data to search and pass by timer debaunce
  useEffect(() => {
    setLoader(true);
    const timer = setTimeout(() => {
      setTimerdata(search);
      setLoader(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [search]);

  const filterdata = data.filter((item) =>
    item.username.toLowerCase().includes(timerdata.toLowerCase()),
  );

  return (
    <div>
      <input
        type="text"
        className="border rounded-md w-full p-3"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />
      {error && <p className="text-red-800 text-center">{error.message}</p>}
      {loader && <p className="text-indigo-900 text-center">Loading .....</p>}
      <table className="w-full border mt-4">
        <tbody>
          <tr>
            <td className="border p-3">ID</td>
            <td className="border p-3">Name</td>
            <td className="border p-3">UserName</td>
            <td className="border p-3">Email ID</td>
          </tr>
          {filterdata.map((item) => (
            <tr key={item.id}>
              <td className="border p-3">{item.id}</td>
              <td className="border p-3">{item.name}</td>
              <td className="border p-3 text-emerald-700 font-bold">
                {item.username}
              </td>
              <td className="border p-3">{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default DebouncedSearch;

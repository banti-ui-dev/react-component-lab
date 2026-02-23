import React, { useEffect, useState } from "react";

const ApiSearchFilter = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) {
          throw new Error("API Error");
        }
        const getData = await res.json();
        setData(getData);
      } catch (error) {
        setError(error);
      }
    };
    fetchUser();
  }, []);
  const filteredData = data.filter((item) =>
    item.username.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <input
        type="text"
        className="border rounded-md w-full p-3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {error && <p className="text-red-500">{error.message}</p>}
      <table className="w-full border mt-4">
        <thead>
          <tr>
            <td className="border p-3">ID</td>
            <td className="border p-3">Name</td>
            <td className="border p-3">Username</td>
            <td className="border p-3">Email</td>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td className="border p-3">{item.id}</td>
              <td className="border p-3">{item.name}</td>
              <td className="border p-3">{item.username}</td>
              <td className="border p-3">{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApiSearchFilter;

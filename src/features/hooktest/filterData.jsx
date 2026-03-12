import React, { useState } from "react";
import useDatafilter from "../../hooks/useDatafilter";

const FilterData = () => {
  const users = [
    { name: "Banti", age: 28 },
    { name: "Rahul", age: 25 },
    { name: "Aman", age: 20 },
  ];
  const[search, setSearch] = useState("")  
  const result = useDatafilter(users, search)
  return (
    <div className="mx-6">
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="shadow appearance-none border rounded my-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="search name.."
      />
      {result.map((item, index) => (
        <p key={index}>
          {item.name} - {item.age}
        </p>
      ))}
    </div>
  );
};

export default FilterData;

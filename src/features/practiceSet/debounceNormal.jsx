import React, { useEffect, useState } from "react";

const DebounceNormal = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    if(!search ) return
    const timer = setTimeout(()=>{
        console.log(search);  
        setSearch("")
    },1000)
    return () => clearTimeout(timer)
  }, [search]);

  return (
    <div>
      <h2>Simple Debouncing</h2>
      <input
        type="text"
        value={search}
        className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
        placeholder="Search here..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default DebounceNormal;

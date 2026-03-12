import React from "react";
import useSort from "../hooks/useSort";

const CustomHookuse = () => {
  const names = ["Rahul", "Banti", "Aman", "Karan"];
  const sortedNames = useSort(names, true);
  return (
    <div>
      {sortedNames.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
    </div>
  );
};

export default CustomHookuse;

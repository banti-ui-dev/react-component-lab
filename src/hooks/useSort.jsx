import React from "react";

const useSort = (data, reverse) => {
  const shorted = [...data].sort();
  if (reverse) {
    return shorted.reverse();
  }
  return shorted;
};

export default useSort;

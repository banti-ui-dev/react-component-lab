import React, { useState } from "react";
const useDatafilter = (data, searchdata) => {
  const filterdata = data.filter((item) =>
    item.name.toLowerCase().includes(searchdata.toLowerCase()),
  );

  return filterdata;
};

export default useDatafilter;

import React from "react";
import Button from "../components/Button";

const ShoppingSearch = () => {
  return (
    <div className="text-center">
      <div>Search Products</div>
      <form action="/searchResult">
        <input
          type="text"
          name="searchstring"
          id=""
          className="w-xl shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
        />
        <Button>Search</Button>
      </form>
    </div>
  );
};

export default ShoppingSearch;

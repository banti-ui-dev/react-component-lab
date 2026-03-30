import React from "react";

const Child = (props) => {
  return (
    <div className="border p-3">
      <h3 className="text-red-700">Child Component</h3>
      <p>Name: {props.username}</p>
      <p>Age: {props.userage}</p>
    </div>
  );
};

export default Child;
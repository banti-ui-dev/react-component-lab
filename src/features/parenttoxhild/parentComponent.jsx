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

const Parent = () => {
  const name = "Banti";
  const age = 25;

  return (
    <div>
      <h2>Parent Component</h2>

      {/* Passing data as props */}
      <Child username={name} userage={age} />
    </div>
  );
};

export default Parent;
import React, { useState } from "react";

const CheckBox = () => {
  const arr = ["M", "N", "O", "P", "Q"];
  const [checked, setChecked] = useState([]);

  const handleAll = (e) => {
    let val = e.target.checked;
    setChecked(val ? arr : []);
  };

  const handleCheck = (item) => {
    if (checked.includes(item)) {
      setChecked(checked.filter((i) => i !== item));
    } else {
      setChecked([...checked, item]);
    }
  };

  return (
    <div style={{ fontSize: "25px" }} className="ml-44">
      <div className="border w-60 px-10">
        <input
          type="checkbox"
          name="parent"
          id="all"
          checked={checked.length === arr.length}
          onChange={handleAll}
        />
        <label htmlFor="all" style={{ paddingLeft: "20px" }}>
          Select All
        </label>
      </div>

      {arr.map((item, index) => (
        <div className="border w-60 px-10" key={index}>
          <input
            type="checkbox"
            name={index}
            id={index}
            checked={checked.includes(item)}
            onChange={() => handleCheck(item)}
          />
          <label htmlFor={index} style={{ paddingLeft: "20px" }}>
            New {item}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CheckBox;

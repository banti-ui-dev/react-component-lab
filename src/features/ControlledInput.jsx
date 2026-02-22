import React, { useState } from "react";
import Button from "../components/Button";

const ControlledInput = () => {
  const [text, setText] = useState("");
  const [textonClick, setTextonClick] = useState([]);

  const handleAdd = () => {   
    if (text.trim() === "") return;
    setTextonClick((previous) => [...previous, text]);
    setText("");
  };
  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <Button onClick={handleAdd}>Add</Button>
      <br />
      <ul>
        {textonClick.map((item, index) => (
          <li key={index}>{index+1}. {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ControlledInput;

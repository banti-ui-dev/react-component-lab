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
  const handledelete = (index) => {
    const updateList = textonClick.filter((_,i) => i !== index)
    setTextonClick(updateList)
  }
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
      <ul className="flex">
        {textonClick.map((item, index) => (
          <li key={index}>{index+1}. {item} <Button className="size-6 mr-4" onClick={() => handledelete(index)}>X</Button></li>
        ))}
      </ul>
    </div>
  );
};

export default ControlledInput;

import { createContext, useContext, useState } from "react";
import ChildLavelone from "./ChildLavelone";
import UserContext from "./userContext";

const ContextDemo = () => {
  const [msg, setMsg] = useState("Welcome");
  const [msgfromChild, setMsgfromChild] = useState({Name:null, Ratting:0});
  const handleNameChnage = (e) => {
    setMsg(e.target.value);
  };
  const handleChildClick = (e) => {
    setMsgfromChild(e);
  };
  return (
    <div className="mx-4 bg-black text-white p-4 mt-3">
      <div>
        <input
          type="text"
          placeholder="Username...."
          className="shadow appearance-none border rounded py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleNameChnage}
        />
      </div>
      <h2 className="text-2xl">Parent Component - {msg} - {msgfromChild.Name} {msgfromChild.Ratting}</h2>
      <UserContext.Provider value={msg}>
        <ChildLavelone onChildclick={handleChildClick} />
      </UserContext.Provider>
    </div>
  );
};

export default ContextDemo;

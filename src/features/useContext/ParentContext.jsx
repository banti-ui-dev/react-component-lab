import React, { useState } from "react";
import ChildoneContext from "./ChildoneContext";
import Contextdata from "./Contextdata";

const ParentContext = () => {
  const [msg, setMsg] = useState("Welcome");
  return (
    <div className="mx-4 bg-black text-white p-4 mt-3">
      <h2 className="text-2xl">Parent Component - {msg}</h2>
      <Contextdata.Provider value={msg}>
        <ChildoneContext />
      </Contextdata.Provider>
    </div>
  );
};

export default ParentContext;

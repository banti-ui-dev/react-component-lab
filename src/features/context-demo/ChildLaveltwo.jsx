import React, { createContext, useContext } from "react";
import UserContext from "./userContext";

const ChildLaveltwo = () => {

  const context = useContext(UserContext);
  return (
    <div className="bg-green-700 text-yellow-300 p-4 m-4">
      <h3 className="text-2xl">Lavel - 2 - {context}</h3>
    </div>
  );
};

export default ChildLaveltwo;

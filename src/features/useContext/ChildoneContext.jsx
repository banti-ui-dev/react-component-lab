import React, { useContext } from "react";
import ChildtwoContext from "./ChildtwoContext";
import Contextdata from "./Contextdata";

const ChildoneContext = () => {
    let context = useContext(Contextdata)
  return (
    <div className="bg-amber-700 text-yellow-300 p-4 m-4">
      <h3 className="text-2xl">Child One Component - {context}</h3>
      <ChildtwoContext/>
    </div>
  );
};

export default ChildoneContext;

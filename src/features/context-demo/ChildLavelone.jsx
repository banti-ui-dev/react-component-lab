import React, { createContext, useContext } from "react";
import ChildLaveltwo from "./ChildLaveltwo";
import UserContext from "./userContext";
import Button from "../../components/Button";

const ChildLavelone = ({onChildclick}) => {
  const context = useContext(UserContext);
  const handleButtonClick = () =>{
    var data = {Name:"TV", Ratting: 4.2}
    onChildclick(data);
  }
  return (
    <div className="bg-amber-700 text-yellow-300 p-4 m-4">
      <h3 className="text-2xl">Lavel - 1 - {context}</h3>
      <Button onClick={handleButtonClick}>Send data to Parent</Button>
      <ChildLaveltwo />
    </div>
  );
};

export default ChildLavelone;

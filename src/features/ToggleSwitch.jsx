import React, { useState } from "react";
import Button from "../components/Button";
export default function ToggleSwitch() {
  const[active,setActive] = useState(true)
  const handleClick = () => {
    setActive(prev => !prev)
  }
  return (
    <>
      <h4 className="text-3xl">User Status : {active ? "Active" : "Inactive"}</h4>      
      <Button variant="danger"onClick={handleClick}>{active ? "Make Inactive" : "Make Active"}</Button>
    </>
  );
}
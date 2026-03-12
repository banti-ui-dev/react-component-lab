import React, { useState } from "react";
import Button from "../../components/Button";
import UserLogin from "./userLogin";
import UserRegister from "./userRegister";

const LifeCycledemo = () => {
  const [component, setComponent] = useState(null);
  const handleLogin = () => {
    setComponent(<UserLogin/>)
  }
  const handleRegister = () => {
    setComponent(<UserRegister/>)
  }
  return (
    <div>
      <h2>React Life Cycle</h2>
      <Button onClick={handleLogin}>Login</Button>
      <Button onClick={handleRegister}>Register</Button>
      <hr />
      {component}
    </div>
  );
};

export default LifeCycledemo;

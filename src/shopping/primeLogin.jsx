import React, { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const PrimeLogin = () => {
  const [username, setUsername] = useState(null);
  let navigate = useNavigate()
  const handleNameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleLogin = () => {
    window.sessionStorage.setItem('uname', username);
    navigate('/prime');
  }
  return (
    <div>
      <h3>Prime User Login</h3>
      <input
        onChange={handleNameChange}
        type="text"
        className="w-xl shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
      />
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};

export default PrimeLogin;

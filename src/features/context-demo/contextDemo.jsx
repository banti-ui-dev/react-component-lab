import { createContext, useContext, useState } from "react";
let userContext = createContext(null);

export function Lavel2() {
  const context = useContext(userContext);
  return (
    <div className="bg-green-700 text-yellow-300 p-4 m-4">
      <h3 className="text-2xl">Lavel - 2 - {context}</h3>
    </div>
  );
}

export function Lavel1() {
  const context = useContext(userContext);
  return (
    <div className="bg-amber-700 text-yellow-300 p-4 m-4">
      <h3 className="text-2xl">Lavel - 1 - {context}</h3>
      <Lavel2 />
    </div>
  );
}
const ContextDemo = () => {
  const [msg, setMsg] = useState("Welcome");
  const handleNameChnage = (e) => {
    setMsg(e.target.value)
  }
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
      <h2 className="text-2xl">Parent Component - {msg}</h2>
      <userContext.Provider value={msg}>
        <Lavel1 />
      </userContext.Provider>
    </div>
  );
};

export default ContextDemo;

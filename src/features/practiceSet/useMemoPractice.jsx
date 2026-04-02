import React, { useMemo, useState } from "react";
import Button from "../../components/Button";

const UseMemoPractice = () => {
  const [num, setNum] = useState(0);
  const [count, setCount] = useState(0);

  const calcValue = (num) => {
    console.log("Calculation start ...");
    let sum = 0;
    for (let i = 0; i < 100000000; i++) {
      sum += i;
    }
    return sum + num;
  };

  const result = useMemo(() => {
    return calcValue(num);
  }, [num]);
  
  const[btn, setBtn] = useState("On")
  const togglehandle = () => {
    setBtn(prev=>!prev)
  }
  

  return (
    <div>
      <h2>Data Calculated value = {result}</h2>
      <Button onClick={() => setNum((prev) => prev + 5)}>Add {num}</Button>
      <Button onClick={() => setCount((prev) => prev + 1)}>
        Other State {count}
      </Button>
      <Button onClick={togglehandle}>{btn ? "On" : "Off"}</Button>
    </div>
  );
};

export default UseMemoPractice;

import React, { useState } from "react";

const TestNew = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 2);
  };
  return (
    <div>
      <button onClick={handleClick}>count {count}</button>
    </div>
  );
};

export default TestNew;

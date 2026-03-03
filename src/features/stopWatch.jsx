import React, { useRef, useState } from "react";
import Button from "../components/Button";

const Stopwatchnew = () => {
  const [time, setTime] = useState({ ms: 0, s: 0, min: 0, hrs: 0 });
  const thread = useRef(null);
  const startTimer = () => {
    setTime((prev) => {
      let { ms, s, min, hrs } = prev;
      ms++;
      if (ms === 100) {
        ms = 0;
        s++;
        if (s === 60) {
          s = 0;
          min++;
          if (min === 60) {
            min = 0;
            hrs++;
          }
        }
      }

      return { ms, s, min, hrs };
    });
  };

  const hndlStart = () => {
    thread.current = setInterval(startTimer, 10);
  };
  const hndlStop = () => {
    clearInterval(thread.current);
  };
  const hndlReset = () => {
    clearInterval(thread.current);
    setTime({ ms: 0, s: 0, min: 0, hrs: 0 });
  };
  return (
    <div className="w-96 flex flex-col justify-center">
      <h1 className="text-2xl text-center">Stop Watch</h1>
      <h2 className="text-xl my-4  text-center">
        {time.hrs} Hrs : {time.min} Min : {time.s} Sec : {time.ms} MlSec
      </h2>
      <div className="flex justify-around">
        <Button onClick={hndlStart}>Start</Button>
        <Button onClick={hndlStop}>Stop</Button>
        <Button onClick={hndlReset}>Reset</Button>
      </div>
    </div>
  );
};

export default Stopwatchnew;

import React, { useRef, useState } from "react";
import Button from "../../components/Button";

const StopwatchPractice = () => {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const thread = useRef(null)
  const timer = () => {
    setTime((prev) => {
      let { ms, s, m, h } = prev;
      ms++;
      if (ms === 100) {
        ms = 0;
        s++;
        if (s === 10) {
          s = 0;
          m++;
          if (m === 60) {
            m = 0;
            h++;
          }
        }
      }
      return { ms, s, m, h };
    });
  };
  const handleStart = () => {
    thread.current = setInterval(timer, 10);
  };
  const handleStop = () => {
    clearInterval(thread.current)
  };
  const handleReset = () => {
    clearInterval(thread.current)
    setTime({ ms: 0, s: 0, m: 0, h: 0 })
  }
  return (
    <div>
      <h2>StopwatchPractice</h2>
      <p className="my-5">
        {time.h} Hrs : {time.m} Mins : {time.s} Sec : {time.ms} MiliSec
      </p>
      <Button onClick={handleStart}>Start</Button>
      <Button onClick={handleStop}>Stop</Button>
      <Button onClick={handleReset}>Reset</Button>
    </div>
  );
};

export default StopwatchPractice;

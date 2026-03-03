import React, { useRef, useState } from "react";
import Button from "../components/Button";

const StopWatch = () => {
  const[msec, setMsec] = useState(0)
  const[sec, setSec] = useState(0)
  const[min, setMin] = useState(0)
  const[hrs, setHrs] = useState(0)
  const thread = useRef(null)
  var ms = 0;
  var s = 0;
  var m = 0;
  var h = 0;

  const startTimer = () => {
    ms++
    setMsec(ms)
    if(ms === 100){
      ms = 0;
      s++
      setSec(s)
      if(s === 60){
        s = 0;
        m++
        setMin(m)
        if(m === 60){
          m=0
          h++
          setHrs(h)
        }
      }
    }
  }

  const handeleStart = () => {
    thread.current = setInterval(startTimer, 10)
  }
  const handleStop = () => {
    clearInterval(thread.current)
  }

  const handleReset = () => {
    clearInterval(thread.current)
    setHrs(0)
    setMin(0)
    setSec(0)
    setMsec(0)
  }
  
  return (
    <div className="w-96 flex flex-col justify-center">
      <h1 className="text-2xl text-center">Stop Watch</h1>
      <h2 className="text-xl my-4  text-center">{hrs} Hrs : {min} Min : {sec} Sec : {msec} MlSec</h2>
      <div className="flex justify-around">
        <Button onClick={handeleStart}>Start</Button>        
        <Button onClick={handleStop}>Stop</Button>
        <Button onClick={handleReset}>Reset</Button>
      </div>
    </div>
  );
};

export default StopWatch;

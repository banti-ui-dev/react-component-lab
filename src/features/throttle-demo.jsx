import React, { useEffect, useState } from 'react'

const ThrottleDemo = () => {
    const[clock,setClock] = useState()
    const getTime = () => {
        var now = new Date();
        setClock(now.toLocaleTimeString());
    }
    useEffect(()=>{
        setInterval(getTime, 1000);
    },[])
  return (
    <div>
      <h1 className='text-2xl'>{clock}</h1>
    </div>
  )
}

export default ThrottleDemo

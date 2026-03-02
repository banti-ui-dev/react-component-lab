import React, { useRef, useState } from 'react'

const StopWatch = () => {
    const[hrs, setHrs] = useState(0)
    const[min, setMin] = useState(0)
    const[sec, setSec] = useState(0)
    const[milisec, setMilisec] = useState(0)

    const refName = useRef(null)
    var ms = 0;
    var s = 0;
    var m = 0;
    var h = 0;
    const startTimer = () => {
        ms++
        setMilisec(ms)
        if(ms === 100){
            s++
            ms = 0
            setSec(s)
            if(s === 60){
                m++
                s = 0
                setMin(m)
                if(m === 60){
                    h++
                    m = 0
                    setHrs(h)
                }
            }
        }
    }
    const handleStart = () => {
        refName.current = setInterval(startTimer, 10)
    }
    const handleReset = () => {
        clearInterval(refName.current)
    }
  return (
    <div> 
      <h1 className='text-2xl pb-4'>Stop Watch</h1>
      <div className='flex'>
        <div className='px-3 py-2 border rounded-2xl mr-0.5 min-w-24'>{hrs} h</div>
        <div className='px-3 py-2 border rounded-2xl mr-0.5 min-w-24'>{min} m</div>
        <div className='px-3 py-2 border rounded-2xl mr-0.5 min-w-24'>{sec} s</div>
        <div className='px-3 py-2 border rounded-2xl mr-0.5 min-w-24'>{milisec} ml</div>
      </div>
      <div className='mt-3'>
        <button className='px-4 py-2 border rounded-lg bg-blue-800 text-white mr-2' onClick={handleStart}>start</button>
        <button className='px-4 py-2 border rounded-lg bg-blue-800 text-white mr-2' onClick ={handleReset}>Reset</button>
      </div>
    </div>
  )
}

export default StopWatch

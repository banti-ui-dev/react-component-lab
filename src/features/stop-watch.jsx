import React, { useRef, useState } from 'react'

const StopWatch = () => {
    const[hrs, setHrs] = useState(0)
    const[min, setMin] = useState(0)
    const[sec, setSec] = useState(0)
    const[milisec, setMilicec] = useState(0)

    let thread = useRef(null)

    var ms = 0;
    var s = 0;
    var m = 0
    var h = 0
    const startTimer = () => {
        ms++
        setMilicec(ms)
        if(ms === 999){
            ms = 0
            s++
            setSec(s)
            if(s === 60){
                s = 0
                m++
                setMin(m)
                if(m === 60){
                    m = 0
                    h++
                    setHrs(h)
                }
            }
        }
    }
    const handleStart = () => {
        thread.current = setInterval(startTimer,1)
    }
    const handleClear = () => {
        clearInterval(thread.current)
        setMilicec(0)
        setSec(0)
        setMin(0)
        setHrs(0)
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
        <button className='px-4 py-2 border rounded-lg bg-blue-800 text-white mr-2' onClick={handleClear}>Reset</button>
      </div>
    </div>

  )
}

export default StopWatch

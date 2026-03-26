import React, { useState } from 'react'
import Button from '../components/Button'

const Counter = () => {
const[count,setCount] = useState(0);
const handleIncrement = ()=>{setCount((prev) => prev+1)}
const handleDecrement = ()=>{setCount((prev) => (prev > 0 ? prev - 1 : 0))}
const handleReset = ()=>{setCount(0)}
  return (
    <div>
      <h3 className='text-2xl'>Counter Value : {count}</h3>
      <Button variant = "primary" onClick={handleIncrement}>+</Button>
      <Button variant = "danger" onClick={handleDecrement}>-</Button>
      <Button variant="secondary" onClick={handleReset}>Reset</Button>
    </div>
  )
}

export default Counter
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ShoppingPrime = () => {
    let navigate = useNavigate();
    useEffect(()=>{
        if(window.sessionStorage.getItem('uname') === null){
            navigate("/login")
        }else{
            navigate("/prime")
        }
    },[])
  return (
    <div>
      <h1>Prime Members Only</h1>
    </div>
  )
}

export default ShoppingPrime

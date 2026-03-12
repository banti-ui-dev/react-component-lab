import React, { useEffect } from 'react'

const UserRegister = () => {
     useEffect(()=>{
            console.log("Register Demo Mounting");
            return() =>{
                console.log("Register Demo Unmounting");            
            }
        },[])
  return (
    <div>
        <h2>User Register</h2>
    </div>
  )
}

export default UserRegister

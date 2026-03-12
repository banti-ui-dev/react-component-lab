import React, { useEffect } from 'react'

const UserLogin = () => {
    useEffect(()=>{
        console.log("Login Demo Mounting");
        return() =>{
            console.log("Login Demo Unmounting");            
        }
    },[])
  return (
    <div>
      <h2>User Login</h2>
    </div>
  )
}

export default UserLogin

import React from 'react'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const VideoTutorialHome = () => {
  return (
    <div className='container text-center'>
      <div className='pt-30'>
        <Link to="/admin-login"  className='border py-2 px-3 rounded-md text-white'>Admin Login</Link>
        <Button variant = "secondary">User Login</Button>
      </div>
    </div>
  )
}

export default VideoTutorialHome

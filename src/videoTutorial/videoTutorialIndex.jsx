import React from 'react'
import "./videoTutorialIndex.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import VideoTutorialHome from './videoTutorialHome'
import AdminLogin from './adminLogin'
import AdminDashboard from './adminDashboard'
const VideoTutorialIndex = () => {
  return (
    <div className='container bg-image'>
      <BrowserRouter>
        <header className='text-white text-center'>
            <div className='text-center font-bold text-3xl'>Video Tutorial</div>
            <p>[React, Java, HTML]</p>
        </header>
        <section className='mt-3'>
            <Routes>
                <Route path='/' element={<VideoTutorialHome/>}/>
                <Route path='admin-login' element={<AdminLogin/>}/>
                <Route path='admin-dashboard' element={<AdminDashboard/>}/>
            </Routes>
        </section>
      </BrowserRouter>
    </div>
  )
}

export default VideoTutorialIndex

import React from 'react'
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom'
import StopWatch from '../stop-watch'
import CaroselDemo from '../carosel-demo'
import Details from './details'

const Portfolioindex = () => {
  return (
    <div className='px-64'>
      <BrowserRouter>
        <header className='text-center'>
            <div className='text-2xl'>John</div>
            <div className='text-xl'>React Developer</div>
            <nav>
                <span className='mr-3 text-blue-800 hover:text-black'><Link to="/">Home</Link></span>
                <span className='mr-3 text-blue-800 hover:text-black'><Link to="/stopwatch">stopwatch</Link></span>
                <span className='mr-3 text-blue-800 hover:text-black'><Link to="/carosel">carosel</Link></span>
                <span className='text-blue-800 hover:text-black'><Link to="/details/2/Mobile/15000">Details</Link></span>
            </nav>
        </header>
        <section>
            <Routes>
                <Route path="/" element={<div>Hello! Home</div>}/>
                <Route path='stopwatch' element={<StopWatch/>}/>
                <Route path="carosel" element={<CaroselDemo/>}/>
                <Route path='details/:id/:name/:price' element={<Details/>}/>
                <Route path='*' element={<div className='text-2xl text-red-700'>Requested Path Not Found - 404 error</div>}/>
            </Routes>
        </section>
      </BrowserRouter>
    </div>
  )
}

export default Portfolioindex

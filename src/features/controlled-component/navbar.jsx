import React from 'react'
import Button from '../../components/Button'

const Navbar = (props) => {
  return (
    <div>
      <nav className='flex justify-between items-center border px-3 py-2'>
        <div className='text-xl'>{props.brandTitle}</div>
        <div>{props.navItem.map(item=><span key={item} className='px-2'>{item}</span>)}</div>
        <div><Button>Login</Button></div>
      </nav>
    </div>
  )
}

export default Navbar

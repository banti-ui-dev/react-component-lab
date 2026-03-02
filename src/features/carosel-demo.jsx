import React, { useState } from 'react'

const CaroselDemo = () => {
    const[product, setProduct] = useState({id:0, })
  return (
    <div>
        <div>
            <div><button>Left</button></div>
            <div><img src="" alt="" srcset="" /></div>
            <div><button>right</button></div>
        </div>
    </div>
  )
}

export default CaroselDemo

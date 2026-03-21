import React from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
    let params = useParams();
  return (
    <div>
        <div className='text-3xl'>Details</div>
        <div>
            <b>Product ID : </b> <span>{params.id}</span> <br />
            <b>Name : </b> <span>{params.name}</span><br />
            <b>Price : </b> <span>{params.price}</span><br />
        </div>
    </div>
  )
}

export default Details

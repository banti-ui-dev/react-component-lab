import React from 'react'
import { useContext } from 'react'
import ProductContext from './productContext'

const ProductNamelist = () => {
    const context = useContext(ProductContext)
  return (
    <div>
        <h2>Child Component</h2>
        <p className='text-red-800'>{context}</p>
    </div>
  )
}

export default ProductNamelist

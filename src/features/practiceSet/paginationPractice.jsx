import React, { useEffect, useState } from 'react'
import Button from '../../components/Button'

const PaginationPractice = () => {
    const[page,setPage] = useState(1)
    const [products, setProducts] = useState([])
    useEffect(()=>{
        const fetchProduct = async() => {
            try{
                const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${page*10-10}`)
                const data = await res.json();
                setProducts(data.products)
            }
            catch(err) {console.log(err);}
        }; fetchProduct()
    },[page])
  return (
    <div>
        {products.map(product => 
            <p key={product.id}>{product.id}. {product.title}</p>
        )}
      <Button onClick={() => setPage(prev=>prev-1)}>prev</Button>
      <Button onClick={() => setPage(prev=>prev+1)}>Next</Button>
      <p>page number {page}</p>
    </div>
  )
}

export default PaginationPractice

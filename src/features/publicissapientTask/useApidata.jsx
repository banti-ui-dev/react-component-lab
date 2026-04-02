import React, { useEffect, useState } from 'react'

const useApidata = (page) => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)

    useEffect(()=>{
        const fetchData = async() => {
            try{
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${(page*20)-20}&limit=20`)
                if(!response.ok) {throw new Error (Error.message)}
                const data = await response.json();
                setProducts(data.results)
            }
            catch(err){setError(err)}
        };
        fetchData()
    },[page])
  return products
}

export default useApidata

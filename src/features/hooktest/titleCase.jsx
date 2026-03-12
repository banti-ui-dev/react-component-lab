import React from 'react'
import useTitlecase from '../../hooks/useTitleCase'

const TitleCase = () => {
    const msg = "WeLCOme TO reaCT"
    const result = useTitlecase(msg)
  return (
    <div>
      {result}
    </div>
  )
}

export default TitleCase

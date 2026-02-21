import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToggleSwitch from './features/ToggleSwitch'
import Counter from './features/Counter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ToggleSwitch/> */}
      <Counter/>
    </>
  )
}

export default App

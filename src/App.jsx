import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToggleSwitch from './features/ToggleSwitch'
import Counter from './features/Counter'
import TodoList from './features/TodoList'
import ControlledInput from './features/ControlledInput'
import ApiSearchFilter from './features/ApiSearchFilter'
import DebouncedSearch from './features/debouncedSearch'
import Pagination from './features/Pagination'
import ThrottleDemo from './features/throttle-demo'
import StopWatch from './features/stop-watch'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ToggleSwitch/> */}
      {/* <Counter/> */}
      {/* <TodoList/> */}
      {/* <ControlledInput/> */}
      {/* <ApiSearchFilter/> */}
      {/* <DebouncedSearch/> */}
      {/* <Pagination/> */}
      {/* <ThrottleDemo/> */}
      <StopWatch/>
    </>
  )
}

export default App

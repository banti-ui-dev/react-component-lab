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
import CaroselDemo from './features/carosel-demo'
import CheckBox from './features/CheckBox'
import Stopwatchnew from './features/stopWatch'
import Formdemo from './features/formDemo'
import FormikDemo from './features/formikDemo'
import SimpleForm from './features/formDevelopment/simpleForm'
import FormikComponent from './features/formDevelopment/formikdemo'
import ReacthookForm from './features/formDevelopment/ReacthookForm'
import DontrolledDemo from './features/controlled-component/ControlledDemo'
import ConditionDemo from './features/condition-demo/ConditionDemo'
import ControlledDemo from './features/controlled-component/ControlledDemo'
import ControlledTest from './features/controlled-component/ControlledTest'
import ControlledObj from './features/controlled-component/ControlledObj'
import CustomHookuse from './features/CustomHookuse'
import FilterData from './features/hooktest/filterData'
import TitleCase from './features/hooktest/titleCase'
import LifeCycledemo from './features/life-cycle-demo/lifeCycledemo'
import ContextDemo from './features/context-demo/contextDemo'
import FakestoreIndex from './features/fakestore/fakestore-index'


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
      {/* <StopWatch/> */}
      {/* <CaroselDemo/> */}
      {/* <CheckBox/> */}
      {/* <Stopwatchnew/> */}
      {/* <Formdemo/> */}
      {/* <FormikDemo/> */}
      {/* <SimpleForm/> */}
      {/* <FormikComponent/> */}
      {/* <ReacthookForm/> */}
      {/* <ControlledDemo/> */}
      {/* <ConditionDemo/> */}
      {/* <ControlledTest/>
      <ControlledObj/> */}
      {/* <CustomHookuse/> */}
      {/* <FilterData/> */}
      {/* <TitleCase/> */}
      {/* <LifeCycledemo/> */}
      {/* <ContextDemo/> */}
      <FakestoreIndex/>
    </>
  )
}

export default App

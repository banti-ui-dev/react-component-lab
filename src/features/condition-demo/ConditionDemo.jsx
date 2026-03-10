import { react, useState } from "react";
import Button from "../../components/Button";
import ControlledDemo from "../controlled-component/DontrolledDemo";
import CaroselDemo from "../carosel-demo";

const ConditionDemo = () => {
  const [view, setView] = useState(null);
  const handleEmp = () =>{
    setView(<ControlledDemo/>)
  }
  const handleCarosal = () => {
    setView(<CaroselDemo/>)
  }
  return (
    <div>
      <div>
        <h2 className="text-2xl py-3">Conditional Demo</h2>
        <Button className="mr-2" onClick={handleEmp}>Emp List</Button>
        <Button onClick={handleCarosal}>Carosal Demo</Button>
      </div>
      <hr />
      <div>
        {view}
      </div>
    </div>
  );
};
export default ConditionDemo;

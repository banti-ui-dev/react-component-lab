import { react, useState } from "react";
import Datagrid from "./Datagrid";

const ControlledDemo = () => {
  const [layout,setLayout] = useState('grid')
  return (
    <div>
      <h2>Employee Details 
        <select name="" id="" onChange={e=>setLayout(e.target.value)}>
          <option value="grid">Grid</option>
          <option value="card">Card</option>
        </select>
      </h2>
      <Datagrid
        layout={layout}
        fields={["First Name", "Last Name", "Designation", "Salary"]}
        data={[
          {
            FirstName: "Banti",
            LastName: "Kumar",
            Designation: "Developer",
            Salary: 55000,
          },
          {
            FirstName: "Sohan",
            LastName: "Kumar",
            Designation: "Manager",
            Salary: 75000,
          },
        ]}
      />
     
    </div>
  );
};
export default ControlledDemo;

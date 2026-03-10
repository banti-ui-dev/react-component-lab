import { react } from "react";
import Datagrid from "./Datagrid";

const DontrolledDemo = () => {
  return (
    <div>
      <h2>Employee Details</h2>
      <Datagrid
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
export default DontrolledDemo;

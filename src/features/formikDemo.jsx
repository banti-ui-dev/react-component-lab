import React from "react";
import { useFormik } from "formik";
import Button from "../components/Button";

const FormikDemo = () => {
    const formik = useFormik({
        initialValues : {
            UserName:null,
            Mobile:null,
            City:null
        },
        onSubmit: (user)=>{
            console.log(user);            
        }
    })
  return (
    <div className="border w-lg p-6 m-4 rounded-2xl">
      <h2 className="mb-8 text-2xl">Registration</h2>
      <form onSubmit={formik.handleSubmit}>
        <dl className="mb-6">
          <dt>User Name</dt>
          <dd>
            <input
              type="text"
              name="UserName"
              id=""
              onChange={formik.handleChange}
              className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </dd>
          <dt>Mobile</dt>
          <dd>
            <input
              type="text"
              name="Mobile"
              id=""
              onChange={formik.handleChange}
              className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </dd>
          <dt>City</dt>
          <dd>
            <select
              name="City"
              id=""
              onChange={formik.handleChange}
              className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select city...</option>
              <option value="Hyd">Hyd</option>
              <option value="Delhi">Delhi</option>
            </select>
          </dd>
        </dl>
        <Button type="submit">
          Register
        </Button>
      </form>
    </div>
  );
};

export default FormikDemo;

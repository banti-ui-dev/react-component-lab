import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import Button from "../../components/Button";
import * as yup from "yup";

const FormikComponent = () => {
  return (
    <div className="border w-lg p-6 m-4 rounded-2xl">
      <h2 className="text-2xl pb-4">Registration Form</h2>
      <Formik
        initialValues={{ name: "", mobile: "" }}
        validationSchema={yup.object({
          name: yup
            .string()
            .required("Name require")
            .min(2, "Name is too short"),
          mobile: yup
            .string()
            .required("Mobile number required")
            .matches(/\+91\d{10}/, "Invalid Number"),
        })}
        onSubmit={(values)=>console.log(values)
        }
      >
        <Form>
          <label htmlFor="">Name</label>
          <Field
            type="text"
            name="name"
            className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
          />
          <span className="text-red-500"><ErrorMessage name="name"/></span>
          <br />
          <label htmlFor="">Mobile</label>
          <Field
            type="text"
            name="mobile"
            className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
          />
          <span className="text-red-500"><ErrorMessage name="mobile"  className="text-red-500"/></span>
          <hr className="pb-3" />
          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikComponent;

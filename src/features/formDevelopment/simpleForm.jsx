import React from "react";
import Button from "../../components/Button";
import { useFormik } from "formik";
import * as yup from "yup"

const SimpleForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      username: '',
      mobile: '',
      age: '',
      gender: '',
    },
    validationSchema: yup.object({
        name: yup.string().required('Enter your name').min(2, 'Name too short'),
        username : yup.string().required('Enter your username'),
        mobile: yup.string().required('Enter your contact details').matches(/\+91\d{10}/, 'Invalid Mobile'),
        age: yup.string().required('Enter your age'),
    }),
    onSubmit: (user) => {
      console.log(user);
    },
  });
  return (
    <div className="border w-lg p-6 m-4 rounded-2xl">
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
        />
        <span className="text-red-600">{formik.errors.name}</span>
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          onChange={formik.handleChange}
          className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
        />
        <span className="text-red-600">{formik.errors.username}</span>
        <input
          type="text"
          name="mobile"
          placeholder="Enter Contact number"
          onChange={formik.handleChange}
          className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
        />
        <span className="text-red-600">{formik.errors.mobile}</span>
        <input
          type="number"
          name="age"
          placeholder="Enter your age"
          onChange={formik.handleChange}
          className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
        />
        <span className="text-red-600">{formik.errors.age}</span>
        <select
          name="gender"
          onChange={formik.handleChange}
          className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="null">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <span className="text-red-600">{formik.errors.gender}</span>
        <hr className="my-3" />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default SimpleForm;

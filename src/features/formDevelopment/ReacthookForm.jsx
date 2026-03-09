import React from "react";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";

const ReacthookForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  console.log(errors);
  const onSubmit = (value) => {
    console.log(value);
    reset({
  username: "",
  mobile: "",
  age: "",
  city: "",
});
  };
  
  return (
    <div className="border w-lg p-6 m-4 rounded-2xl">
      <h1 className="text-2xl pb-4">React Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Enter Username</label>
        <input
         type="text"
          {...register("username", {
            required: true,
            minLength: 2,
            pattern: /^[A-Za-z]{2,10}$/,
          })}
          className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
        />
        {errors.username?.type === "required" && (
          <span className="text-red-600">This field is required</span>
        )}
        <br />
        <label htmlFor="mobile">Enter Mobile No.</label>
        <input
          type="text"
          {...register("mobile", { required: true, pattern: /^\+91\d{10}$/ })}
          className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
        />
        {(errors.mobile?.type === "required" ||
          errors.mobile?.type === "pattern") && (
          <span className="text-red-600">Enter Valid Mobile Number</span>
        )}
        <br />
        <label htmlFor="age">Enter Age</label>
        <input
          type="number"
          {...register("age", { required: true, min: 18, max: 99 })}
          className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
        />
        {errors.age?.type === "required" && (
          <span className="text-red-600">Enter your Valid Age</span>
        )}
        <br />
        <label htmlFor="city">Select City</label>
        <select
         
          {...register("city", { required: true })}
          className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
        >
          <option value="">Select City</option>
          <option value="delhi">Delhi</option>
          <option value="Hyd">Hyderabad</option>
          <option value="pune">Pune</option>
        </select>
        <hr className="my-4" />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default ReacthookForm;

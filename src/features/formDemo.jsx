import React, { useState } from "react";
import Button from "../components/Button";

const Formdemo = () => {
  const [userDetails, setUserDetails] = useState({
    UserName: null,
    Mobile: null,
    City: null,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
    console.log(userDetails);
  };
  const handleNameChange = (e) => {
    setUserDetails({
      UserName: e.target.value,
      Mobile: userDetails.Mobile,
      City: userDetails.City,
    });
  };
  const handleMobileChange = (e) => {
    setUserDetails({
      UserName: userDetails.UserName,
      Mobile: e.target.value,
      City: userDetails.City,
    });
  };
  const handleCityChange = (e) => {
    setUserDetails({
      UserName: userDetails.UserName,
      Mobile: userDetails.Mobile,
      City: e.target.value,
    });
  };

  return (
    <div className="border w-lg p-6 m-4 rounded-2xl">
      <h2 className="mb-8 text-2xl">Registration</h2>
      <form action="">
        <dl className="mb-6">
          <dt>User Name</dt>
          <dd>
            <input
              type="text"
              name="UserName"
              id=""
              onChange={handleNameChange}
              className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </dd>
          <dt>Mobile</dt>
          <dd>
            <input
              type="text"
              name="Mobile"
              id=""
              onChange={handleMobileChange}
              className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </dd>
          <dt>City</dt>
          <dd>
            <select
              name="City"
              id=""
              onChange={handleCityChange}
              className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select city...</option>
              <option value="Hyd">Hyd</option>
              <option value="Delhi">Delhi</option>
            </select>
          </dd>
        </dl>
        <Button type="submit" onClick={handleSubmit}>
          Register
        </Button>
      </form>
    </div>
  );
};

export default Formdemo;

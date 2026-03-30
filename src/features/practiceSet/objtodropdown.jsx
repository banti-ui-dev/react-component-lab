import React, { useState } from "react";

const Objtodropdown = () => {
  const data = [
    { country: "India", cities: ["Delhi", "Mumbai", "Bangalore"] },
    { country: "USA", cities: ["New York", "Chicago", "Los Angeles"] },
    { country: "Canada", cities: ["Toronto", "Vancouver", "Montreal"] },
    { country: "Nepal", cities: ["city01", "city02", "city03"] },
  ];
  const [contryname, setCountryname] = useState("");
  const selectedCountry = data.find(item => item.country === contryname)
  return (
    <div>
      <select
        value={contryname}
        onChange={(e) => setCountryname(e.target.value)}
      >
        <option value="">Select country</option>
        {data.map((item, index) => (
          <option key={index}>{item.country}</option>
        ))}
      </select>
      {selectedCountry && 
        <select>
            <option>Select State</option>
            {
                selectedCountry.cities.map((city,index) => 
                    <option value={city} key={index}>{city}</option>
                )
            }
        </select>
      }
    </div>
  );
};

export default Objtodropdown;

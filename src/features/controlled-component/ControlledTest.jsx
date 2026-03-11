import React, { useState } from "react";
import Button from "../../components/Button";

const ControlledTest = () => {
  const [name, setName] = useState("Banti");
  const [price, setPrice] = useState(1000);
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(true);
  };
  const handleSave = () => {
    setIsEdit(false);
  };
  const handleNamechnage = (e) => {
    setName(e.target.value);
  };
  
  const handlePricechnage = (e) => {
    setPrice(e.target.value);
  };

  return (
    <div>
      <table className="border mt-4 w-3xl">
        <thead>
          <tr>
            <th className="border px-3">Name</th>
            <th className="border px-3">Price</th>
            <th className="border px-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {isEdit ? (
            <tr>
              <td className="border px-3">
                <input
                  type="text"
                  onChange={handleNamechnage}
                  placeholder={name}
                />
              </td>
              <td className="border px-3">
                <input
                  type="text"
                  onChange={handlePricechnage}
                  placeholder={price}
                />
              </td>
              <td className="border px-3">
                <Button onClick={handleSave}>save</Button>
              </td>
            </tr>
          ) : (
            <tr>
              <td className="border px-3">
                <label className="mx-2">{name}</label>
              </td >
              <td className="border px-3">
                <label className="mx-2">{price}</label>
              </td>
              <td className="border px-3">
                <Button onClick={handleEdit}>edit</Button>
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* {isEdit ? (
        <>
          <input type="text" onChange={handleNamechnage} placeholder={name} />
          <input type="text" onChange={handlePricechnage} placeholder={price} />
          <Button onClick={handleSave}>save</Button>
        </>
      ) : (
        <>
          <label className="mx-2">{name}</label>
          <label className="mx-2">{price}</label>
          <Button onClick={handleEdit}>edit</Button>
        </>
      )} */}
    </div>
  );
};

export default ControlledTest;

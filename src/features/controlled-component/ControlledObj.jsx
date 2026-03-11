import React, { useState } from "react";
import Button from "../../components/Button";

const ControlledObj = () => {
  const [users, setUsers] = useState([
    { name: "Banti", age: 28 },
    { name: "Rahul", age: 25 },
    { name: "Aman", age: 20 },
  ]);
  const [editIndex, setEditIndex] = useState(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const handleEdit = (index) => {
    setEditIndex(index);
    setName(users[index].name);
    setAge(users[index].age);
  };
  const handleSave = () => {
    const updaatedUser = users.map((user, index) =>
      index === editIndex ? { name, age } : user,
    );
    setUsers(updaatedUser);
    setEditIndex(null);
  };
  const handleDelete = (index) => {
    const updaatedUserdata = users.filter((_, i) => i !== index);
    setUsers(updaatedUserdata);
  };
  return (
    <div>
      <table className="border mt-4 w-3xl">
        <thead>
          <tr>
            <th className="border px-3">Name</th>
            <th className="border px-3">Age</th>
            <th className="border px-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((item, index) => (
            <tr key={index}>
              <td className="border px-3">
                {editIndex === index ? (
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                ) : (
                  item.name
                )}
              </td>
              <td className="border px-3">
                {editIndex === index ? (
                  <input
                    type="text"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                ) : (
                  item.age
                )}
              </td>
              <td className="border px-3">
                {editIndex === index ? (
                  <Button onClick={handleSave}>Save</Button>
                ) : (
                  <>
                    <Button onClick={() => handleEdit(index)}>Edit</Button>
                    <Button onClick={() => handleDelete(index)} variant="danger">Delete</Button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ControlledObj;

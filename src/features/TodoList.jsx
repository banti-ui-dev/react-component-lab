import React, { useState } from "react";
import Button from "../components/Button";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);

  const handleAdd = () => {
    if (task.trim() === "") return;
    setTodo((prev) => [...prev, task]);
    console.log(setTodo);

    setTask("");
  };
  const handleDel = (abc) => {
    const newTodo = todo.filter((_, i) => i !== abc);
    setTodo(newTodo);
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="add task here..."
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button onClick={handleAdd}>Add</Button>
      </div>
      <div>
        <table className="w-full text-sm text-left rtl:text-right text-body table-auto">
          <thead className="text-sm text-body bg-neutral-200">
            <tr>
              <th className="px-4 py-2">Sl No</th>
              <th>Task</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todo.map((item, index) => (
              <tr key={index}>
                <td className="border p-3">{index + 1}</td>
                <td className="border p-3">{item}</td>
                <td className="border p-3">
                  <Button className="size-6" onClick={() => handleDel(index)}>
                    X
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default TodoList;

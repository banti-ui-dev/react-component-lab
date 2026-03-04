import React, { useEffect, useState } from "react";
import Button from "../components/Button";

const CaroselDemo = () => {
  const [id, setId] = useState(1);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const getdata = await res.json();
      setData(getdata);
    };
    fetchData();
  }, [id]);

  const handlerNext = () => {
    setId((prev) => prev + 1);
  };
  const handletprev = () => {
    if (id > 0) {
      setId((prev) => prev - 1);
    }
  };
  return (
    <div style={{ width: "550px" }}>
      <div className="text-center">{data.title}</div>
      <div className="flex items-center">
        <div>
          <Button onClick={handletprev}>Left</Button>
        </div>
        <div>
          <img
            src={data.image}
            alt="Banner Image"
            style={{ width: "400px", height: "350px" }}
          />
          <input type="range" min="1" max ="20" value={id}/>
        </div>
        <div>
          <Button onClick={handlerNext}>Right</Button>
        </div>
      </div>
    </div>
  );
};

export default CaroselDemo;

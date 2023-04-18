import React, { useState, useEffect } from "react";
import "./css/BlackSquare.css";

export default function BlackSquare() {
  const [arr, setArr] = useState(() => {
    let array = [];
    for (let i = 0; i < 60; i++) {
      let obj = { id: i, color: "black" };
      array[i] = obj;
    }
    return array;
  });
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increamentCount = () => {
      let array = [];
      arr.forEach((item) => {
        let obj = {};
        obj["id"] = item.id;
        if (item.id <= count) {
          obj["color"] = "white";
        } else {
          obj["color"] = "black";
        }
        array[item.id] = obj;
      });
      setCount((c) => (c < 60 ? c + 1 : 0));
      setArr(array);
    };
    const intervalId = setInterval(increamentCount, 1000);
    return () => clearInterval(intervalId);
  }, [count]);
  return (
    <div className="wrapper">
      {arr.map((item) => {
        return <Box propColor={item.color} key={item.id} />;
      })}
    </div>
  );
}

const Box = ({ propColor }) => {
  return (
    <div
      style={{
        width: "60px",
        height: "80px",
        backgroundColor: propColor,
        border: "solid",
        borderWidth: "2px",
      }}
    ></div>
  );
};

import React, { useState, useEffect } from "react";
import "./BlackSquare.css";

export default function BlackSquare() {
  const [arr, setArr] = useState(getArray());
  const [count, setCount] = useState(0);

  useEffect(() => {
    const changeColor = () => {
      setCount((c) => c + 1);
    };
    const intervalId = setInterval(changeColor, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    console.log("count", count);
    let array = [];
    arr.forEach((item) => {
      let obj = {};
      obj["id"] = item.id;
      if (item.id < count) {
        obj["color"] = "white";
      } else {
        obj["color"] = "black";
      }
      array.push(obj);
    });
    setArr(array);
  }, [count]);
  return (
    <div className="wrapper">
      {arr.map((item) => {
        return <Box propColor={item.color} key={item.id} />;
      })}
    </div>
  );
}
const getArray = () => {
  let array = [],
    value = 1;
  for (let i = 0; i < 60; i++) {
    let obj = { id: value++, color: "black" };
    array[i] = obj;
  }
  return array;
};
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

import React, { useState, useEffect } from "react";
import "./BlackSquare.css";

export default function BlackSquare() {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    let array = [],
      value = 1;
    for (let i = 0; i < 60; i++) {
      let obj = { id: value++, color: "black" };
      array[i] = obj;
    }
    setArr(array);
  }, []);

  useEffect(() => {
    const changeColor = () => {};
    const intervalId = setInterval(changeColor, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="wrapper">
      {arr.map((item) => {
        return <Box className="one" propColor={item.color} key={item.id} />;
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

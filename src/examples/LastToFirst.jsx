import React, { useState } from "react";

function LastToFirst() {
  const [string, setString] = useState("");

  const onButtonClick = () => {
    const array = string.split("");
    const char = array.pop();
    let newArray = [];
    newArray.push(char);
    newArray = [...newArray, ...array];
    newArray = newArray.join("");
    setString(newArray);
  };
  return (
    <div style={{ padding: "100px 200px 300px 250px" }}>
      {string}
      <div>
        <input onChange={(e) => setString(e.target.value)} />
        <button onClick={onButtonClick}>Click me </button>
      </div>
    </div>
  );
}

export default LastToFirst;

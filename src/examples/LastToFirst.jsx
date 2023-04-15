import React, { useState } from "react";

function LastToFirst() {
  const [string, setString] = useState("");

  const deBounceClick = () => {
    setTimeout(() => {
      setString([...string].reverse().join(""));
    }, 1000);
  };
  const onButtonClick = () => {
    deBounceClick();
  };
  return (
    <div>
      {string}
      <input onChange={(e) => setString(e.target.value)} />
      <button onClick={onButtonClick}>Click me </button>
    </div>
  );
}

export default LastToFirst;

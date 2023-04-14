import { useState } from "react";

function ChangingColorButton() {
  const [color, setColor] = useState("");
  const generateColor = () => {
    let value = Math.random().toString(16).substr(-6);
    setColor(value);
  };
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <button
        style={{
          padding: "40px",
          borderRadius: "10px",
          fontSize: "larger",
          backgroundColor: "#" + color,
        }}
        onClick={() => {
          generateColor();
          setCount(count + 3);
        }}
      >
        Count= {count}
      </button>
    </div>
  );
}

export default ChangingColorButton;

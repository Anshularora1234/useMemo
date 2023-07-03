import "./styles.css";
import { useState, useMemo } from "react";
export default function App() {
  const [number, setNumber] = useState(0);
  const [dark, setdark] = useState(false);
  const theme = useMemo(() => {
    return {
      backgroundColor: dark ? "white" : "black",
      color: dark ? "black" : "white"
    };
  }, [dark]);
  const doubleit = (number) => {
    for (let i = 0; i < 10001; i++) {}
    return number * 2;
  };
  const doublef = useMemo(() => {
    return doubleit(number);
  }, [number]);

  return (
    <div className="App">
      <input
        type="text"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setdark(!dark);
        }}
      >
        Change Theme
      </button>

      <div style={theme}>{`the number is ${doublef}`}</div>
    </div>
  );
}

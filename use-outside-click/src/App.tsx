import { useRef } from "react";
import "./App.css";
import { useOutsideClick } from "./useOutsideClick";

function App() {
  const divRef = useRef(null);

  useOutsideClick(divRef, () => alert("Outside click"));

  return (
    <div
      ref={divRef}
      style={{ background: "#fff", color: "#000", padding: "2rem" }}
    >
      Click outside to see alert
    </div>
  );
}

export default App;

import { useState } from "react";

export default function UseStateHook() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState("");
  function Increement() {
    setCount(count + 1);
  }
  function Display(event) {
    setShow(event.target.value);
  }
  return (
    <div className="App">
      <h2>{count}</h2>
      <button onClick={Increement}>Increement</button>
      <br />
      <br />
      <input placeholder="click something here.." onChange={Display} />
      <h2>{show}</h2>
    </div>
  );
}

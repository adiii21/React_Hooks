import { useRef } from "react";

export default function UseRefHook() {
  const inputRef = useRef(null);

  function onClick() {
    inputRef.current.value = "";
  }

  return (
    <div>
      <h1>Aditya</h1>
      <input type="text" placeholder="Type here.." ref={inputRef} />
      <button onClick={onClick}>Change name</button>
    </div>
  );
}

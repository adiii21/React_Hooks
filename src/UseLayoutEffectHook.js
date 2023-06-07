import { useEffect, useLayoutEffect, useRef } from "react";

export default function useLayoutEffectHook() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.value = "Hello";
  }, []);
  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  return (
    <div>
      <input ref={inputRef} value="Aditya" style={{ width: 400, height: 40 }} />
    </div>
  );
}

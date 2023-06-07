import { useContext } from "react";
import { AppContext } from "./UseContextHook";

export default function UseContextLogin() {
  const { setUsername } = useContext(AppContext);
  return (
    <input
      onChange={(e) => {
        console.log(e.target.value);
        setUsername(e.target.value);
      }}
    />
  );
}

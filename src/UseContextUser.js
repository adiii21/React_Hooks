import { useContext } from "react";
import { AppContext } from "./UseContextHook";

export default function UseContextUser() {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h2>User: {username}</h2>
    </div>
  );
}

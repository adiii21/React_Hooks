import { createContext, useState } from "react";
import Login from "./UseContextLogin";
import User from "./UseContextUser";

export const AppContext = createContext(null);

export default function UseContextHook() {
  const [username, setUsername] = useState("");
  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <Login setUsername={setUsername} />
      <User username={username} />
    </AppContext.Provider>
  );
}

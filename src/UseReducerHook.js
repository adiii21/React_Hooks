import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMEMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

export default function useReducerHook() {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMEMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        Click Here
      </button>
      {state.showText && <p>This is paragraph</p>}
    </div>
  );
}

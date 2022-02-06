import React from "react";
import { useCounter } from "./useCounter";

const CustomHooks: React.VFC = () => {
  const { count, increment, decrement, double, tripple, reset } = useCounter(3);

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={double}>Double</button>
      <button onClick={tripple}>Tripple</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CustomHooks;

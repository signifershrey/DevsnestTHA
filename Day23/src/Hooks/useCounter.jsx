import React, { useEffect, useState } from "react";

const useCounter = (initialValue,value) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + value);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - value);
  };

  const reset = () => {
    setCount(0);
  };

  return [count, increment, decrement, reset];
};

export default useCounter;

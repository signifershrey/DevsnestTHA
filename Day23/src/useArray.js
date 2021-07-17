import React from "react";
import { useCallback, useState } from "react";

//value ,Setvalue ,add,clear , removebyID, removeIndex

export const useArray = (initial) => {
  const [value, setValue] = useState(initial);

  return {
    value,
    setValue,
    add: useCallback((a) => setValue((v) => [...v, a])),
    clear: useCallback((a) => setValue(() => [])),
    removeById: useCallback((a) =>
      setValue((arr) => arr.filter((v) => v && v.id !== id))
    ),
    removeByIndex: useCallback((index) =>
      setValue((v) => {
        v.splice(index, 1);
        return v;
      })
    ),
  };
};


export function useUnSplash(secret,query){
    const[img]
}
import { createContext, useContext } from "react";

export const LoopCopyContext = createContext(false);
export const useIsLoopCopy = () => useContext(LoopCopyContext);

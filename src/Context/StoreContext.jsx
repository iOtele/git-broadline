import { createContext } from "react";
import { Featured, Services } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const contextValue = {
    Services,
    Featured,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

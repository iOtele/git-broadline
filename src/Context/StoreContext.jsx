import { createContext } from "react";
import {
  featured,
  services,
  aircraftData,
  faqData,
  testimonialsData,
} from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const contextValue = {
    services,
    featured,
    aircraftData,
    faqData,
    testimonialsData,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

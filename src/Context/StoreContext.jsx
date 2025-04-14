import { createContext } from "react";
import {
  featured,
  services,
  aircraftData,
  faqData,
  testimonialsData,
  blogData,
} from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const contextValue = {
    services,
    featured,
    aircraftData,
    faqData,
    testimonialsData,
    blogData,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

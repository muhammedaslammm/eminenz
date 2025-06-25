"use client";
import { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [menuStat, setMenuStat] = useState(false);
  const handleMenuStat = () => {
    setMenuStat(!menuStat);
  };

  const values = { menuStat, handleMenuStat };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };

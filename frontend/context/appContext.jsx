"use client";
import { usePathname } from "next/navigation";
import { createContext, useEffect, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [menuStat, setMenuStat] = useState(false);
  const handleMenuStat = () => {
    setMenuStat(!menuStat);
  };

  const pathname = usePathname();
  useEffect(() => {
    setMenuStat(false);
  }, [pathname]);

  const values = { menuStat, handleMenuStat };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };

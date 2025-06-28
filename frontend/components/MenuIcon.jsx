"use client";
import { AppContext } from "@/context/appContext";
import { DotsThreeOutline } from "phosphor-react";
import { useContext } from "react";

const MenuIcon = () => {
  const { handleMenuStat } = useContext(AppContext);
  return (
    <div className="lg:hidden" onClick={handleMenuStat}>
      <DotsThreeOutline className="h-8 w-8" />
    </div>
  );
};

export default MenuIcon;

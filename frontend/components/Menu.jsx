"use client";
import headerdata from "@/data/headerdata";
import { XCircle } from "phosphor-react";
import { AppContext } from "@/context/appContext";
import { useContext } from "react";
const Menu = () => {
  const { menuStat, handleMenuStat } = useContext(AppContext);
  return (
    <section
      className={`${
        menuStat ? "translate-x-0" : "translate-x-full"
      } transition-all fixed inset-0 bg-white p-4 space-y-4 z-100`}
    >
      <div className="flex justify-between items-center">
        <a
          href="#"
          className="text-[1.1rem] font-semibold"
          onClick={handleMenuStat}
        >
          totalsolution
        </a>
        <XCircle size={24} color="#630f16" onClick={handleMenuStat} />
      </div>
      <ul>
        {headerdata.navs.map((d) => (
          <li key={d.id} className="py-2">
            <a
              href={`#${d.id}`}
              key={d}
              className="text-[1.1rem]"
              onClick={handleMenuStat}
            >
              {d.label}
            </a>
          </li>
        ))}
      </ul>

      <div></div>
    </section>
  );
};

export default Menu;

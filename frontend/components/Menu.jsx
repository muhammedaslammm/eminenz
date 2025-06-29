"use client";
import headerdata from "@/data/headerdata";
import { XCircle } from "phosphor-react";
import { AppContext } from "@/context/appContext";
import { useContext } from "react";
import Link from "next/link";
const Menu = () => {
  const { menuStat, handleMenuStat } = useContext(AppContext);
  return (
    <section
      className={`${
        menuStat ? "translate-x-0" : "translate-x-full"
      } transition-all fixed inset-0 bg-white p-4 space-y-4 z-500`}
    >
      <div className="flex justify-between items-center">
        <a
          href="/#"
          className="w-[7rem] h-[2rem] -translate-x-[1rem]"
          onClick={handleMenuStat}
        >
          <img
            src="/totalsolutionslogo_blue.png"
            alt="total solutions logo"
            className="w-full h-full object-cover"
          />
        </a>
        <XCircle size={24} color="#630f16" onClick={handleMenuStat} />
      </div>
      <ul>
        {headerdata.navs.map((item) => (
          <li key={item.id} className="py-2">
            <Link href={item.path}>
              <span className="text-[1.1rem]" onClick={handleMenuStat}>
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Menu;

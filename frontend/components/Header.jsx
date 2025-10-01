"use client";
import headerdata from "@/data/headerdata";
import MenuIcon from "./MenuIcon";
import Link from "next/link";
import usePageInfo from "@/utils/usePageInfo";
import { useEffect, useState } from "react";

const Header = () => {
  const { home, pathname } = usePageInfo();
  const logo =
    pathname === "home" ? "/eminenz_logo1.png" : "/eminenz_logo1.png";
  const headerStyle =
    pathname !== "home"
      ? "fixed bg-white border-b border-neutral-300"
      : "absolute";
  const navStyle = pathname !== "home" ? "text-[rgb(17,65,111)]" : "text-white";

  return (
    <header className={`${headerStyle} top-0 left-0 w-full z-20`}>
      <nav
        className={`w-[87%] mx-auto flex justify-between items-center ${navStyle} py-2`}
      >
        <Link
          href="/#"
          className="w-[12rem] h-[2rem] -translate-x-[2.8rem] lg:w-[15rem] lg:h-[3.5rem]"
        >
          <img
            src={logo}
            alt="total solutions logo"
            className="w-full h-full object-cover"
          />
        </Link>

        <div className="hidden lg:block md:space-x-5 lg:space-x-10">
          {headerdata.navs.map((data) => (
            <Link key={data.id} href={data.path}>
              <span className="text-[1.1rem] font-medium">{data.label}</span>
            </Link>
          ))}
        </div>
        <MenuIcon />
      </nav>
    </header>
  );
};

export default Header;

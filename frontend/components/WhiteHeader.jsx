"use client";
import headerdata from "@/data/headerdata";
import MenuIcon from "./MenuIcon";
import Link from "next/link";

const WhiteHeader = ({ state }) => {
  return (
    <header
      className={`fixed left-0 top-0 w-full z-20 ${
        state ? "translate-y-0" : "-translate-y-full"
      } bg-white text-[rgb(17,65,111)] border-b border-neutral-200 transition-transform duration-700`}
    >
      <nav className="w-[87%] mx-auto flex justify-between items-center py-2">
        <Link href="/" className="text-[1.3rem] lg:text-[1.5rem]">
          total<strong>solutions</strong>
        </Link>
        {true ? (
          <div className="hidden lg:block space-x-10">
            {headerdata.navs.map((data) => (
              <Link key={data.id} href={data.path}>
                <span className="text-[1.1rem] font-medium">{data.label}</span>
              </Link>
            ))}
          </div>
        ) : (
          <></>
        )}

        <MenuIcon />
      </nav>
    </header>
  );
};

export default WhiteHeader;

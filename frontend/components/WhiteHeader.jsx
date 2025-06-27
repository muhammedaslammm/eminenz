"use client";
import headerdata from "@/data/headerdata";
import MenuIcon from "./MenuIcon";
import usePageInfo from "@/utils/usePageInfo";
import Link from "next/link";

const WhiteHeader = ({ state }) => {
  const { home } = usePageInfo();
  console.log("home:", home);
  return (
    <header
      className={`fixed left-0 top-0 w-full z-20 ${
        state ? "translate-y-0" : "-translate-y-full"
      } bg-white text-black border-b border-neutral-200 transition-transform duration-700`}
    >
      <nav className="w-[87%] mx-auto flex justify-between items-center md:items-baseline py-2">
        <Link href="/" className="text-[1.3rem] lg:text-[1.5rem]">
          total<span className="font-semibold">solutions</span>
        </Link>
        {true ? (
          <div className="hidden md:block space-x-10">
            {headerdata.navs.map((data) => {
              if (data.path.startsWith("/"))
                return (
                  <Link
                    key={data.id}
                    href={data.path}
                    className="text-[1.1rem] font-medium"
                  >
                    {data.label}
                  </Link>
                );
              else
                return (
                  <a
                    key={data.id}
                    href={data.path}
                    className="text-[1.1rem] font-medium"
                  >
                    {data.label}
                  </a>
                );
            })}
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

"use client";
import headerdata from "@/data/headerdata";
import MenuIcon from "./MenuIcon";
import Link from "next/link";
import usePageInfo from "@/utils/usePageInfo";

const Header = () => {
  const { home } = usePageInfo();
  return (
    <header className={`absolute top-0 left-0  w-full z-20`}>
      <nav
        className={`w-[87%] mx-auto flex justify-between items-center md:items-baseline ${
          home ? "text-white" : "text-white"
        } py-2 "`}
      >
        <Link href={"/"} className="text-[1.3rem] lg:text-[1.5rem]">
          total<span className="font-semibold">solutions</span>
        </Link>
        {home ? (
          <>
            <div className={`hidden md:block space-x-10`}>
              {headerdata.navs.map((data, i) => (
                <a
                  href={`${data.path}`}
                  key={i}
                  className="font-medium text-[1.1rem]"
                >
                  <span className="capitalize">{data.label}</span>
                </a>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="hidden md:block space-x-10">
              {headerdata.offerings_navs.map((data, i) => (
                <Link
                  key={data.id}
                  href={data.path}
                  className="text-[1.1rem] font-medium"
                >
                  <span className="capitalize">{data.label}</span>
                </Link>
              ))}
            </div>
          </>
        )}
        <MenuIcon />
      </nav>
    </header>
  );
};

export default Header;

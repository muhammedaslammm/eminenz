"use client";
import pagestyles from "@/data/pagestyles";
import { usePathname } from "next/navigation";

const usePageInfo = () => {
  const pathname = usePathname();
  const home = pathname === "/";
  const pagestyle = pagestyles.find(
    (style) => style.slug === pathname.split("/")[1]
  );

  return { home, pagestyle };
};

export default usePageInfo;

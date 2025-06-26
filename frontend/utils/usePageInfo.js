"use client";
import pagestyles from "@/data/pagestyles";
import { usePathname } from "next/navigation";

const usePageInfo = () => {
  const pathname = usePathname().split("/")[1] || "home";
  console.log("path:", pathname);
  const home = pathname === "home";
  const pagestyle = pagestyles.find((style) => style.slug === pathname);
  console.log(pagestyle);

  return { home, pagestyle };
};

export default usePageInfo;

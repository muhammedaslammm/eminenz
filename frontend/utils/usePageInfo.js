"use client";
import pagestyles from "@/data/pagestyles";
import { usePathname } from "next/navigation";

const usePageInfo = () => {
  const pathname = usePathname().split("/")[1] || "home";
  console.log("path:", pathname);
  const home = pathname === "home";
  const pagestyle = pagestyles.find((style) => style.slug === pathname) || {
    slug: "default",
    bg_color: "rgba(180,211,227,0.65)",
    main_text: "#000000",
    sub_text: "#525252",
  };
  console.log(pagestyle);

  return { home, pagestyle, pathname };
};

export default usePageInfo;

"use client";
import {
  meta,
  title,
  navcontent,
  contact,
  copyright,
  media,
} from "@/data/footerdata";
import { usePathname } from "next/navigation";

const Footer = () => {
  const home = usePathname() === "/";
  const color = home ? "rgba(180,211,227,0.65)" : "rgb(23, 23, 23)";
  const text_color = home ? "rgb(23, 23, 23)" : "#ffffff";
  return (
    <footer
      className="pt-5 lg:pt-10 pb-1 lg:pb-2"
      style={{ backgroundColor: color }}
    >
      <div
        className="w-[90%] lg:w-[87%] mx-auto "
        style={{ color: text_color }}
      >
        {/* top */}
        <div className="leading-[1.3rem] text-center md:text-left lg:leading-[2.2rem]">
          <h3 className="text-[1.2rem] lg:text-[2rem] font-semibold uppercase">
            {title.company_name}
          </h3>
          <h4
            className="text-[.8rem] lg:text-[1.1rem] tracking-[.05rem] uppercase"
            style={{ color: text_color }}
          >
            {title.tagline}
          </h4>
        </div>
        {/* middle */}
        <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row items-center lg:items-start lg:justify-between mt-5 lg:mt-10 mb-10 lg:mb-30">
          <div className="flex flex-col w-[40%] lg:w-full lg:flex-row items-center md:items-start gap-2 lg:gap-8 uppercase">
            <div
              className="text-[.9rem] lg:text-[1rem]"
              style={{ color: text_color }}
            >
              {navcontent.title}
            </div>
            <ul className="grid lg:grid-cols-3 lg:gap-x-16 gap-y-1 lg:gap-y-4">
              {navcontent.contents.map((c) => (
                <a
                  key={c.id}
                  href={`#${c.id}`}
                  className="text-[.9rem] lg:text-[1rem] text-center md:text-start cursor-pointer font-medium"
                >
                  {c.label}
                </a>
              ))}
            </ul>
          </div>
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-12 lg:w-full lg:justify-end">
            {contact.map((c) => (
              <div
                key={c.id}
                className="text-[.9rem] text-center md:text-left lg:text-[1rem]"
              >
                <span className="block uppercase" style={{ color: text_color }}>
                  {c.label}
                </span>
                <span className="font-medium">{c.value}</span>
              </div>
            ))}
          </div>
        </div>
        {/* bottom */}
        <div
          className="flex flex-col md:flex-row md:justify-between items-center text-[.7rem] lg:text-[.8rem]"
          style={{ color: text_color }}
        >
          <div>{copyright}</div>
          <ul className="flex gap-4">
            {media.map((m) => (
              <li key={m.id}>{m.label}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

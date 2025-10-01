
"use client";
import {
  meta,
  title,
  navcontent,
  contact,
  copyright,
  media,
} from "@/data/footerdata";
import { Copyright } from "phosphor-react";
import { usePathname } from "next/navigation";

const Footer = () => {
  const home = usePathname() === "/";
  //const color = home ? "rgb(12, 42, 69)" : "rgb(23, 23, 23)"; //rgba(188,213,227)
  const color = home ? "rgb(36, 76, 107)" : "rgb(23, 23, 23)"; //rgba(188,213,227)
  const text_color = home ? "#ffffff" : "#ffffff";
  const current_year = new Date().getFullYear();
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
          <img
            src="/eminenz_logoo.png"
            alt="eminenz logo"
            className="w-[17rem] h-[5rem] object-cover -translate-x-[3rem]"
          />
        </div>
        {/* middle */}
        <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row items-start mt-5 lg:mt-10 mb-10 lg:mb-30">
          <div className="flex flex-col w-[40%] lg:w-full lg:flex-row items-center md:items-start gap-2 lg:gap-8 uppercase">
            <div
              className="text-[.9rem] lg:text-[.8rem]"
              style={{ color: text_color }}
            >
              {navcontent.title}
            </div>
            <ul className="grid lg:grid-cols-3 lg:gap-x-16 gap-y-1 lg:gap-y-4">
              {navcontent.contents.map((c) => (
                <a
                  key={c.id}
                  href={`${c.path}`}
                  className="text-[.9rem] lg:text-[.8rem] text-center md:text-start cursor-pointer font-medium"
                >
                  {c.label}
                </a>
              ))}
            </ul>
          </div>
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-12 lg:w-full ">
            {contact.map((c) => (
              <div
                key={c.id}
                className="text-[.9rem] text-center md:text-left lg:text-[.8rem]"
              >
                <span className="block uppercase" style={{ color: text_color }}>
                  {c.label}
                </span>
                <span className="font-medium">{c.value}</span>
              </div>
            ))}
            {/* Added new address block here */}
            <div className="text-[.9rem] text-center md:text-left lg:text-[.8rem]">
              <span className="block uppercase" style={{ color: text_color }}>
                ADDRESS
              </span>
              <span className="font-medium">
                Ali Bin Murshid Al Rumaithi, 121 St. ( Street 70),
                <br />
                Al Danah, Abu Dhabhi 22217
              </span>
            </div>
            {/* End of new address block */}
          </div>
        </div>
        {/* bottom */}
        <div
          className="flex flex-col md:flex-row md:justify-between items-center text-[.7rem] lg:text-[.8rem]"
          style={{ color: text_color }}
        >
          <div className="flex gap-1 items-center">
            <Copyright color="white" /> {current_year} Total Solutions |
            PrivacyPolicy |
            <a
              href="https://bizdatatech.com/"
              target="_blank"
              className="hover:underline"
            >
              Powered by BizdataTech Consultancy Limited, Kerala
            </a>
          </div>
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

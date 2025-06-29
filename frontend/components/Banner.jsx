"use client";
import { useEffect, useRef, useState } from "react";
import WhiteHeader from "./WhiteHeader";

const Banner = () => {
  const [headerStat, setHeaderStat] = useState(false);
  const bannerRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([element]) => {
        setHeaderStat(!element.isIntersecting);
      },
      { threshold: 0.9 }
    );
    if (bannerRef.current) observer.observe(bannerRef.current);
    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
        observer.disconnect();
      }
    };
  }, []);

  return (
    <>
      <WhiteHeader state={headerStat} />
      <section id="home" className="relative w-full h-screen" ref={bannerRef}>
        <img
          src="/company_images/main_image.jpg"
          alt="total solutions banner image"
          className="w-full h-screen md:h-full object-cover"
        />
        <div className="absolute bottom-[70%] translate-y-[70%] left-[50%] -translate-x-[50%] w-full text-center lg:text-left lg:translate-[0] lg:bottom-[4rem] lg:left-[6rem] space-y-2 z-10">
          <h1 className="uppercase text-[1.8rem] lg:text-[3rem] font-semibold text-white leading-[2.2rem] lg:leading-[3.5rem]">
            <span className="block">for us,</span>
            <span className="block">business is solving problems</span>
          </h1>
          <p className=" text-[1rem] lg:text-[1.5rem] max-w-[60rem] text-neutral-300 leading-[1.3rem] lg:leading-[2rem]">
            Delivering engineering excellence across{" "}
            <strong>oil & gas, power, food, pharma and more since 2009</strong>
          </p>
        </div>
        <a
          href="#contact"
          className="md:hidden absolute left-[50%] -translate-[50%] bottom-[1rem] text-white text-[.6rem] font-semibold uppercase tracking-[.08rem] z-10"
        >
          contact us now
        </a>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className=" sm:hidden absolute inset-0 bg-black/20"></div>
      </section>
    </>
  );
};

export default Banner;

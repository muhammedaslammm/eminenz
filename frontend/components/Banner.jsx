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
      { threshold: 0.05 }
    );
    if (bannerRef.current) observer.observe(bannerRef.current);
    return () => observer.unobserve(bannerRef.current);
  }, []);

  return (
    <>
      <WhiteHeader state={headerStat} />
      <section id="home" className="relative w-full h-screen" ref={bannerRef}>
        <img
          src="https://plus.unsplash.com/premium_photo-1682144370321-7a2f2583eada?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-screen md:h-full object-cover"
        />
        <div className="absolute bottom-[70%] translate-y-[70%] left-[50%] -translate-x-[50%] w-full text-center lg:text-left lg:translate-[0] lg:bottom-[4rem] lg:left-[6rem] space-y-2 z-10">
          <h1 className="uppercase text-[2rem] lg:text-[3rem] font-semibold text-white leading-[2.2rem] lg:leading-[3.5rem]">
            <span className="block">for us,</span>
            <span className="block">business is solving problems</span>
          </h1>
          <p className="text-[1rem] lg:text-[1.5rem] max-w-[60rem] text-neutral-300 leading-[1.3rem] lg:leading-[2rem]">
            Delivering engineering excellence across oil & gas, power, food,
            pharma and more since 2018
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </section>
    </>
  );
};

export default Banner;

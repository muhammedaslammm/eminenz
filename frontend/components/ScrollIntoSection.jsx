"use client";

import { useEffect } from "react";

const ScrollIntoSection = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return null;
};

export default ScrollIntoSection;

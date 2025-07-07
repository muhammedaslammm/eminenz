import About from "@/components/About";
import Banner from "@/components/Banner.jsx";
import IntroSection from "@/components/IntroSection";
import Offerings from "@/components/Offerings";
import Partners from "@/components/Partners";
import WhyChooseus from "@/components/WhyChooseus";
import Contact from "@/components/Contact";
import ScrollIntoSection from "@/components/ScrollIntoSection";

export const metadata = {
  title: "Oil and Gas Engineering",
  description:
    "Total Solutions General Trading W.L.L, based in Abu Dhabi and founded in 2009, is a trusted provider of industrial engineering products and services across sectors like Oil & Gas, Power, Pharma, and more.",
  keywords: [
    "total solutions",
    "Total Solutions",
    "Total Solutions UAE",
    "Oil and Gas",
    "Engineering",
  ],
};

export default function Home() {
  return (
    <main>
      {/* <ScrollIntoSection /> */}
      <Banner />
      <IntroSection />
      <Offerings />
      <WhyChooseus />
      <Partners />
      <About />
      <Contact />
    </main>
  );
}

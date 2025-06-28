import About from "@/components/About";
import Banner from "@/components/Banner.jsx";
import IntroSection from "@/components/IntroSection";
import Offerings from "@/components/Offerings";
import Partners from "@/components/Partners";
import WhyChooseus from "@/components/WhyChooseus";
import Menu from "@/components/Menu";
import Contact from "@/components/Contact";
import ScrollIntoSection from "@/components/ScrollIntoSection";

export default function Home() {
  return (
    <>
      <ScrollIntoSection />
      <Banner />
      <IntroSection />
      <Offerings />
      <WhyChooseus />
      <Partners />
      <About />
      <Contact />
      <Menu />
    </>
  );
}

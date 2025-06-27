import About from "@/components/About";
import Banner from "@/components/Banner.jsx";
import IntroSection from "@/components/IntroSection";
import Offerings from "@/components/Offerings";
import Partners from "@/components/Partners";
import WhyChooseus from "@/components/WhyChooseus";
import Menu from "@/components/Menu";
import Table from "@/components/Table";
import Contact from "@/components/Contact";

export default async function Home() {
  return (
    <>
      <Banner />
      <IntroSection />
      <Offerings />
      <WhyChooseus />
      <Partners />
      <About />
      <Table />
      <Contact />
      <Menu />
    </>
  );
}

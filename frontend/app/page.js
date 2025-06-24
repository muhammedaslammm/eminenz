import About from "@/components/About";
import Banner from "@/components/Banner.jsx";
import Footer from "@/components/Footer";
import IntroSection from "@/components/IntroSection";
import Offerings from "@/components/Offerings";
import Partners from "@/components/Partners";
import WhyChooseus from "@/components/WhyChooseus";

export default async function Home() {
  return (
    <>
      <Banner />
      <div className="w-[90%] lg:w-[87%] mx-auto">
        <IntroSection />
        <Offerings />
        <WhyChooseus />
        <Partners />
        <About />
      </div>
      <Footer />
    </>
  );
}

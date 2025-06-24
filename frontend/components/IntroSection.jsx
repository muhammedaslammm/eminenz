import introduction from "@/data/introduction.js";
import Industries from "./Industries.client";

const IntroSection = () => {
  return (
    <section id="introduction" className="text-black py-5 lg:py-10 space-y-6">
      <div className="space-y-2">
        <h1 className="text-[1.2rem] lg:text-[1.4rem] font-semibold uppercase leading-[1.6rem] lg:leading-[1.8rem]">
          {introduction.title}
        </h1>
        <p className="text-[1.2rem] lg:text-[1.4rem] leading-[1.6rem] lg:leading-[1.8rem] text-justify">
          {introduction.description}
        </p>
      </div>
      <Industries data={introduction.industry_data} />
    </section>
  );
};

export default IntroSection;

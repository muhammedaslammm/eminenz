import introduction from "@/data/introduction.js";
import Industries from "./Industries.client";

const IntroSection = () => {
  return (
    <section className="text-black w-[95%] mx-auto py-10 space-y-6">
      <div className="space-y-2">
        <h1 className="text-[1.4rem] font-semibold uppercase">
          {introduction.title}
        </h1>
        <p className="text-[1.4rem] leading-[1.8rem] text-justify">
          {introduction.description}
        </p>
      </div>
      <Industries data={introduction.industry_data} />
    </section>
  );
};

export default IntroSection;

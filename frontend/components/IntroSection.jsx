import introduction from "@/data/introduction.js";

const IntroSection = () => {
  return (
    <section className="text-black w-[95%] mx-auto py-12">
      <div>
        <h1 className="text-[1.8rem] font-semibold uppercase">
          {introduction.title}
        </h1>
        <p className="text-[1.4rem]">{introduction.description}</p>
      </div>
    </section>
  );
};

export default IntroSection;

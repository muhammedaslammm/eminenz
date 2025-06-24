import about from "@/data/about.js";
import Values from "./Values.client.jsx";

const About = () => {
  return (
    <section id="about" className="py-10 space-y-8">
      <div className="top flex flex-col lg:flex-row gap-8">
        <div className="left lg:w-4/6 space-y-2 lg:space-y-4">
          <div>
            <h3 className="text-[1.2rem] lg:text-[1.4rem] font-semibold uppercase">
              {about.title}
            </h3>
            <div className="text-[1rem] lg:text-[1.2rem] text-neutral-400">
              {about.sub_title}
            </div>
          </div>
          <div className="space-y-4">
            {[about.description1, about.description2].map((desc) => (
              <p className="text-justify text-[1.2rem] lg:text-[1.3rem] leading-[1.6rem] lg:leading-[1.8rem]">
                {desc}
              </p>
            ))}
          </div>
        </div>
        <div className="right lg:w-2/6 flex flex-col gap-4">
          {[about.vision, about.mission].map((sec) => (
            <div
              className="flex-1 p-4 lg:p-6 rounded-[.5rem] space-y-1"
              style={{ backgroundColor: `${sec.bg}` }}
            >
              <h3 className="text-[1.1rem] lg:text-[1.2rem] font-medium lg:font-semibold capitalize">
                {sec.title}
              </h3>
              <p className="text-[1.1rem] lg:text-[1.2rem] text-neutral-600 leading-[1.6rem] lg:leading-[1.8rem]">
                {sec.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Values values={about.values} />
    </section>
  );
};

export default About;

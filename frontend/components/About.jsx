import about from "@/data/about";

const About = () => {
  return (
    <section className="w-[95%] mx-auto py-10 space-y-8">
      <div className="top flex gap-8">
        <div className="left w-4/6 space-y-4">
          <div>
            <h3 className="text-[1.4rem] font-semibold uppercase">
              {about.title}
            </h3>
            <div className="text-[1.2rem] text-neutral-400">
              {about.sub_title}
            </div>
          </div>
          <div className="space-y-4">
            {[about.description1, about.description2].map((desc) => (
              <p className="text-justify text-[1.3rem] leading-[1.8rem]">
                {desc}
              </p>
            ))}
          </div>
        </div>
        <div className="right w-2/6 flex flex-col gap-4">
          {[about.vision, about.mission].map((sec) => (
            <div
              className="flex-1 p-6 rounded-[.5rem] space-y-1"
              style={{ backgroundColor: `${sec.bg}` }}
            >
              <h3 className="text-[1.2rem] font-semibold capitalize">
                {sec.title}
              </h3>
              <p className="text-[1.2rem] text-neutral-600 leading-[1.8rem]">
                {sec.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="bottom space-y-4">
        <h3 className="text-[1.3rem] font-semibold uppercase">
          {about.values.title}
        </h3>
        <div className="grid grid-cols-3 gap-4">
          {about.values.values.map((v) => (
            <div
              style={{ backgroundColor: `${v.bg}` }}
              className="p-6 rounded-[.8rem] space-y-1"
            >
              <h4 className="text-[1.2rem] font-semibold">{v.title}</h4>
              <p className="text-[1.3rem] text-neutral-600 leading-[1.8rem]">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

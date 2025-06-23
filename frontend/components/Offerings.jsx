import offerings from "@/data/offerings";

const Offerings = () => {
  return (
    <section className="py-10 w-[95%] mx-auto space-y-4">
      <h2 className="text-[1.4rem] uppercase font-semibold">
        {offerings.title}
      </h2>
      <div className="space-y-4">
        {offerings.offerings.map((o) => (
          <div className="relative h-[20rem] overflow-hidden">
            <img
              src={o.image}
              alt={`image representing ${o.title}`}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-6 left-6 z-10 max-w-[70rem] space-y-2">
              <h3 className="text-[1.4rem] text-white font-semibold uppercase">
                {o.title}
              </h3>
              <p className="text-white/90 text-[1.4rem] leading-[1.8rem]">
                {o.description}
              </p>
            </div>
            <div className="absolute inset-0 bg-black/40 z-0"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offerings;

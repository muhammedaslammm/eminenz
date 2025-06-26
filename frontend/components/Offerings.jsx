import offerings from "@/data/offerings";
import Link from "next/link";

const Offerings = () => {
  return (
    <section
      id="offerings"
      className="w-[90%] lg:w-full mx-auto py-10 space-y-2 lg:space-y-4"
    >
      <h2 className="lg:w-[87%] mx-auto text-[1.1rem] lg:text-[1.3rem] uppercase font-semibold">
        {offerings.title}
      </h2>
      <div className="space-y-4">
        {offerings.offerings.map((o) => (
          <Link key={o.id} href={`/${o.slug}`} className="block">
            <div className="relative h-[20rem] overflow-hidden">
              <img
                src={o.image}
                alt={`image representing ${o.title}`}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 lg:bottom-10 left-4 lg:left-25 z-10 max-w-[70rem] space-y-1 lg:space-y-2">
                <h3 className="text-[1rem] lg:text-[1.4rem] text-white font-semibold uppercase">
                  {o.title}
                </h3>
                <p className="hidden lg:block text-[1rem] lg:text-[1.4rem] text-white/90 leading-[1.5rem] lg:leading-[1.8rem]">
                  {o.description}
                </p>
              </div>
              <div className="absolute inset-0 bg-black/40 z-0"></div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Offerings;

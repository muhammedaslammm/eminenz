import partners from "@/data/partners";

const Partners = () => {
  return (
    <section
      id="partners"
      className="w-[90%] lg:w-[87%] mx-auto py-10 space-y-4"
    >
      <h3 className="text-[1.1rem] lg:text-[1.4rem] font-semibold uppercase">
        {partners.title}
      </h3>
      <div className="w-[50%] mx-auto lg:w-full grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
        {partners.partners.map((p) => (
          <img key={p.id} src={p.image} alt="" />
        ))}
      </div>
    </section>
  );
};

export default Partners;

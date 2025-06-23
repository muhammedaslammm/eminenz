import partners from "@/data/partners";

const Partners = () => {
  return (
    <section className="w-[95%] mx-auto py-10 space-y-4">
      <h3 className="text-[1.4rem] font-semibold uppercase">
        {partners.title}
      </h3>
      <div className="grid grid-cols-5 gap-4">
        {partners.partners.map((p) => (
          <img src={p.image} alt="" />
        ))}
      </div>
    </section>
  );
};

export default Partners;

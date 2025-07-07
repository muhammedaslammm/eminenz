import OfferingsBanner from "@/components/OfferingsBanner";
import offerings from "@/data/offerings";

export const metadata = {
  title: "Offerings",
  description:
    "Total Solutions General Trading W.L.L, based in Abu Dhabi and founded in 2009, is a trusted provider of industrial engineering products and services across sectors like Oil & Gas, Power, Pharma, and more.",
};

export async function generateStaticParams() {
  return offerings.offerings.map((offering) => ({
    offering_slug: offering.slug,
  }));
}

export default async function OfferingPage({ params }) {
  const { offering_slug } = await params;

  const data = offerings.offerings.find((data) => offering_slug === data.slug);
  if (!data) return <h1>content not found</h1>;
  return (
    <section className="pb-8 pt-12 space-y-6">
      <OfferingsBanner
        title={data.title}
        description={data.description}
        image={data.image2}
      />
      <div className="w-[90%] lg:w-[87%] mx-auto space-y-6">
        {data.sections.map((section) => (
          <div key={section.id} className="space-y-2">
            <h2 className="text-[1.1rem] lg:text-[1.2rem] font-medium">
              {section.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4">
              {section.items.map((item) => (
                <div
                  key={item.id}
                  className="border border-neutral-400 shadow-[0_0_.3rem_0rem_#EFF0F1] p-4 lg:p-8 rounded-[1rem] space-y-1 md:space-y-2 text-[1rem]"
                >
                  <h3 className="font-medium uppercase">{item.title}</h3>
                  <ul className="list-disc list-inside">
                    {item.values.map((value, index) => (
                      <li key={index}>{value}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

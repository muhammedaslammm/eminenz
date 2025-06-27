// export const dynamic = "force-static";

import OfferingsBanner from "@/components/OfferingsBanner";
import offerings from "@/data/offerings";
import { notFound } from "next/navigation";

// export async function generateStaticParams() {
//   return offerings.offerings.map((item) => ({
//     offering_slug: item.slug,
//   }));
// }

export default async function OfferingPage({ params }) {
  const { offering_slug } = await params;

  const data = offerings.offerings.find((data) => offering_slug === data.slug);
  if (!data) return notFound();
  return (
    <section className="pb-8 space-y-6">
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
            <div className="grid grid-cols-1 gap-6 lg:gap-4">
              {section.items.map((item) => (
                <div
                  key={item.id}
                  className="border border-neutral-200 shadow-[0_0_.3rem_0rem_#EFF0F1] p-4 lg:p-8 rounded-[1rem] space-y-2 text-[1.1rem]"
                >
                  <h3 className="font-medium">{item.title}</h3>
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

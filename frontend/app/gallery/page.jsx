import gallery from "@/data/gallery";

export const metadata = {
  title: "Gallery",
  description:
    "Total Solutions General Trading W.L.L, based in Abu Dhabi and founded in 2009, is a trusted provider of industrial engineering products and services across sectors like Oil & Gas, Power, Pharma, and more.",
};

export default function GalleryPage() {
  return (
    <section className="w-[90%] lg:w-[87%] mx-auto pt-[4rem] sm:pt-[5.5rem] pb-[4rem] space-y-2 md:space-y-4">
      <div className="sm:columns-2 md:columns-3 gap-4">
        {gallery.map(({ id, image }) => (
          <img
            key={id}
            src={image}
            alt={`image${id}`}
            className="mb-4 rounded-[1rem]"
          />
        ))}
      </div>
    </section>
  );
}

import gallery from "@/data/gallery";

const GalleryPage = () => {
  return (
    <section className="w-[90%] lg:w-[87%] mx-auto pt-[3.5rem] sm:pt-[4rem] pb-[4rem] space-y-2 md:space-y-4">
      <h1 className="text-[1rem] lg:text-[1.3rem] uppercase font-medium">
        our gallery
      </h1>
      <div className="sm:columns-2 md:columns-3 gap-4">
        {gallery.map(({ id, image }) => (
          <img key={id} src={image} alt="" className="mb-4 rounded-[1rem]" />
        ))}
      </div>
    </section>
  );
};

export default GalleryPage;

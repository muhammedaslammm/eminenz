const OfferingsBanner = ({ title, description, image }) => {
  return (
    <>
      <div className="relative">
        <img
          src={image}
          alt=""
          className="w-full h-[8rem] lg:h-[15rem] object-cover"
        />
        <div className="absolute bottom-[1rem] left-[1rem] lg:left-[6rem] lg:bottom-[2rem] z-10">
          <h1 className="hidden lg:block text-[1rem] text-white lg:text-[1.2rem] font-semibold uppercase">
            {title}
          </h1>
          <p className="hidden lg:block text-[1rem] text-neutral-200 lg:text-[1.3rem] leading-[1.5rem] lg:leading-[1.8rem]">
            {description}
          </p>
        </div>
        <div className="absolute inset-0 bg-black/50 z-0"></div>
      </div>
    </>
  );
};

export default OfferingsBanner;

const Banner = () => {
  return (
    <section id="home" className="relative w-full h-screen">
      <img
        src="https://plus.unsplash.com/premium_photo-1682144370321-7a2f2583eada?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-[3rem] left-[3rem] space-y-2 z-10">
        <h1 className="uppercase text-[3rem] font-semibold text-white leading-[3.5rem]">
          <span className="block">for us,</span>
          <span className="block">business is solving problems</span>
        </h1>
        <p className="text-[1.5rem] max-w-[60rem] text-neutral-300 leading-[2rem]">
          Delivering engineering excellence across oil & gas, power, food,
          pharma and more since 2018
        </p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
    </section>
  );
};

export default Banner;

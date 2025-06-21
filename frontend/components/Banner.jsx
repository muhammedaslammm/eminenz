const Banner = () => {
  return (
    <section id="home" className="relative w-full h-screen">
      <img
        src="https://images.unsplash.com/photo-1693847173071-bd6237101335?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-[7rem] left-[3rem] space-y-6 z-10">
        <h1 className="uppercase text-[4rem] font-semibold text-white leading-[4rem]">
          <span className="block">for us,</span>
          <span className="block">business is solving problems</span>
        </h1>
        <p className="text-[2rem] max-w-[60rem] text-neutral-300 leading-[2rem]">
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

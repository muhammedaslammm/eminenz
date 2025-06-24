import {
  meta,
  title,
  navcontent,
  contact,
  copyright,
  media,
} from "@/data/data";

const Footer = () => {
  return (
    <footer
      className="pt-5 lg:pt-10 pb-1 lg:pb-2"
      style={{ backgroundColor: meta.bg }}
    >
      <div className="w-[90%] lg:w-[87%] mx-auto">
        {/* top */}
        <div className="leading-[1.3rem] lg:leading-[2rem]">
          <h3 className="text-[1.2rem] lg:text-[2rem] font-semibold uppercase">
            {title.company_name}
          </h3>
          <h4 className="text-[.9rem] lg:text-[1.2rem] text-neutral-700 lg:text-black font-medium lg:uppercase">
            {title.tagline}
          </h4>
        </div>
        {/* middle */}
        <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row lg:-between lg:items-center mt-5 lg:mt-10 mb-10 lg:mb-50">
          <div className="flex flex-col w-[40%] lg:w-full lg:flex-row gap-2 lg:gap-8 uppercase">
            <div className="text-[.9rem] lg:text-[1rem] text-neutral-600">
              {navcontent.title}
            </div>
            <ul className="grid lg:grid-cols-3 lg:gap-x-4 gap-y-1 lg:gap-y-2">
              {navcontent.contents.map((c) => (
                <a
                  href={`#${c.id}`}
                  className="text-[.9rem] lg:text-[1rem] cursor-pointer font-medium"
                >
                  {c.label}
                </a>
              ))}
            </ul>
          </div>
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-8">
            {contact.map((c) => (
              <div className="text-[.9rem] lg:text-[1rem]">
                <span className="block uppercase text-neutral-600">
                  {c.label}
                </span>
                <span className="font-medium">{c.value}</span>
              </div>
            ))}
          </div>
        </div>
        {/* bottom */}
        <div className="flex justify-between items-center text-neutral-600 text-[.7rem] lg:text-[.8rem]">
          <div>{copyright}</div>
          <ul className="flex">
            {media.map((m) => (
              <li>{m.label}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

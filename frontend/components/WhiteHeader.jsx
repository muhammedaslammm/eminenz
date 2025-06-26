import headerdata from "@/data/headerdata";
import MenuIcon from "./MenuIcon";
const WhiteHeader = ({ state }) => {
  return (
    <header
      className={`fixed left-0 top-0 w-full z-20 ${
        state ? "translate-y-0" : "-translate-y-full"
      } bg-white text-black border-b border-neutral-200 transition-transform duration-700`}
    >
      <nav className="w-[87%] mx-auto flex justify-between items-center md:items-baseline py-2">
        <div className="text-[1.3rem] lg:text-[1.5rem]">
          total<span className="font-semibold">solutions</span>
        </div>
        <div className="hidden md:block space-x-10">
          {headerdata.navs.map((data, i) => (
            <a
              href={`${data.path}`}
              key={i}
              className="font-medium text-[1.1rem]"
            >
              <span className="!capitalize">{data.label}</span>
            </a>
          ))}
        </div>
        <MenuIcon />
      </nav>
    </header>
  );
};

export default WhiteHeader;

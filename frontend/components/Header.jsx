import headerdata from "@/data/headerdata";
import MenuIcon from "./MenuIcon";

const Header = () => {
  return (
    <header className="absolute left-0 top-0 w-full z-20">
      <nav className="w-[87%] mx-auto flex justify-between items-center md:items-baseline text-white py-4">
        <div className="text-[1.3rem] lg:text-[1.5rem]">
          total<span className="font-semibold">solutions</span>
        </div>
        <div className="hidden md:block space-x-10">
          {headerdata.navs.map((d, i) => (
            <a href={`#${d.id}`} key={i} className="font-medium text-[1.1rem]">
              <span className="capitalize">{d.label}</span>
            </a>
          ))}
        </div>
        <MenuIcon />
      </nav>
    </header>
  );
};

export default Header;

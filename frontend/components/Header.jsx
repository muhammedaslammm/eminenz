import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute left-0 top-0 w-full z-10">
      <nav className="w-[90%] mx-auto flex justify-between items-center text-white py-2">
        <div className="text-[2.2rem]">
          total<span className="font-semibold">solutions</span>
        </div>
        <div className="text-[1.3rem] space-x-10">
          <Link href="/#home">Home</Link>
          <Link href="/">Industries</Link>
          <Link href="/">Products</Link>
          <Link href="/">Services</Link>
          <Link href="/">Maintenance</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

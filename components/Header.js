import {
  HomeIcon,
  SearchIcon,
  UserIcon,
  FilmIcon,
  CodeIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import HeaderItem from "./HeaderItem";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
      <Link href={"/"}>
        <a className="flex cursor-pointer transform hover:scale-105">
          <CodeIcon className="h-20" />
          <p className="text-7xl font-extrabold">SSB</p>
        </a>
      </Link>
      <div className="flex flex-grow justify-evenly max-w-sm">
        <HeaderItem link={"/"} title="Home" Icon={HomeIcon} />
        <HeaderItem link={"/Movies"} title="Movie" Icon={FilmIcon} />
        <HeaderItem link={"/"} title="Search" Icon={SearchIcon} />
        <HeaderItem link={"/"} title="Account" Icon={UserIcon} />
      </div>
    </header>
  );
};

export default Header;

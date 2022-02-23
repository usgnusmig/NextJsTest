import {
  HomeIcon,
  SearchIcon,
  UserIcon,
  FilmIcon,
  CodeIcon,
} from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
      <div className="flex cursor-pointer transform hover:scale-105">
        <CodeIcon className="h-20" />
        <p className="text-7xl font-extrabold">SSB</p>
      </div>
      <div className="flex flex-grow justify-evenly max-w-sm">
        <HeaderItem title="Home" Icon={HomeIcon} />
        <HeaderItem title="Movie" Icon={FilmIcon} />
        <HeaderItem title="Search" Icon={SearchIcon} />
        <HeaderItem title="Account" Icon={UserIcon} />
      </div>
    </header>
  );
};

export default Header;

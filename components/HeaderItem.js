import Link from "next/link";

const HeaderItem = ({ Icon, title, link }) => {
  return (
    <Link href={link}>
      <a className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white">
        <Icon className="h-8 mb-1 group-hover:animate-bounce" />
        <p className="opacity-0 group-hover:opacity-100 tracking-widset">
          {title}
        </p>
      </a>
    </Link>
  );
};

export default HeaderItem;

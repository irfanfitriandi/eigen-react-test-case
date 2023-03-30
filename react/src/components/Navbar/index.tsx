import { Link } from "react-router-dom";

const navmenu = [
  {
    menu: "HOME",
    path: "/",
  },
  {
    menu: "TECH",
    path: "/technology",
  },
  {
    menu: "BUSINESS",
    path: "/business",
  },
  {
    menu: "HEALTH",
    path: "/health",
  },
  {
    menu: "SPORTS",
    path: "/sports",
  },
  {
    menu: "SCIENCE",
    path: "/science",
  },
];

const Navbar = () => {
  const path = window.location.pathname;

  return (
    <nav className="flex items-center lg:w-[1000px] mx-auto h-8 md:h-12 pt-2  shadow-sm">
      {navmenu.map((data, idx) => (
        <Link
          key={idx}
          className={`transition-all duration-150 w-16 md:w-24 ease-in-out h-full text-center text-xs md:text-base ${
            path === data.path
              ? "text-primary border-b-4 border-primary"
              : "hover:border-b-4 border-primary hover:text-primary"
          }`}
          to={data.path}
        >
          {data.menu}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;

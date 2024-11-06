import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
const Header = () => {
  const menus = [
    {
      url: "/",
      title: "Home",
    },
    {
      url: "/",
      title: "About",
    },
    {
      url: "/",
      title: "Portfolio",
    },
    {
      url: "/",
      title: "clients",
    },
    {
      url: "/",
      title: "blog",
    },
    {
      url: "/",
      title: "contact",
    },
  ];
  return (
    <div className="container bg-red-500">
      <div className="py-[45px] flex justify-between">
        <div className="flex gap-[60px] items-center">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <nav>
            <ul className="flex gap-[40px]">
              {menus?.map((menu, index) => (
                <li key={index}>
                  <Link
                    className="font-medium capitalize text-[15px] text-white"
                    to={menu?.url}
                  >
                    {menu?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div>
          <Button>book a table</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;

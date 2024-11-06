import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const [sticky, setSticky] = useState(false);

  // on render, set listener
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY;
    if (scrollTop >= 20) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  return (
    <nav
      className={`fixed z-10 top-0 left-0 right-0 w-full ${
        sticky && "bg-rred"
      } `}
    >
      <div className="container">
        <div className="flex justify-between items-center h-[108px] ">
          {/* Logo and Menu */}
          <div className="flex items-center">
            <a href="/">
              <img src={logo} alt="" />
            </a>
            <div className="hidden md:flex space-x-[40px] ml-[60px]">
              {menus?.map((menu, index) => (
                <Link
                  key={index}
                  to={menu?.url}
                  className="font-medium capitalize text-[15px] text-white"
                >
                  {menu?.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Button and Hamburger Icon */}
          <div className="flex items-center">
            <div className="hidden md:block ">
              <Button>Book a table</Button>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white   focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-rred z-50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menus?.map((menu, index) => (
              <a
                key={index}
                href={menu?.url}
                className="block text-white   px-3 py-2 rounded-md"
              >
                {menu?.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

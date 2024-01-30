import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
// import { FaCaretDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/toprated",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/kidswear",
  },
  {
    id: 4,
    name: "Mens Wear",
    link: "/menswear",
  },
  {
    id: 5,
    name: "Electronics",
    link: "/electronic",
  },
  {
    id: 6,
    name: "All Products",
    link: "/allproducts",
  },
  {
    id: 7,
    name: "Download",
    link: "/download",
  },
];

// const DropdownLinks = [
//   {
//     id: 1,
//     name: "Trending",
//     link: "/#",
//   },
//   {
//     id: 2,
//     name: "Best Selling",
//     link: "/#",
//   },
//   {
//     id: 3,
//     name: "Top Rated",
//     link: "/#",
//   },
// ];

const Navbar = () => {
  let [isOpen, setIsOpen] = useState(false);
  const items = useSelector((state) => state.cart);
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <Link to="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="logo" className="w-10 rounded-full" />
              E-bharat
            </Link>
          </div>

          {/* menu items */}
          <div className="sm:flex justify-center hidden md:block">
            <ul className="sm:flex items-center my-6 bg-white  text-black  w-full right-0 absolute transition-all duration-500 ease-in ">
              {Menu.map((data) => (
                <li key={data.id}>
                  <Link
                    to={data.link}
                    className="inline-block justify-center content-center px-14 hover:text-primary duration-200 my-2 font-semibold"
                  >
                    {data.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* menu items */}

          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            {/* order button */}
            <Link
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
              to={"/cart"}
            >
              {/* <span className="group-hover:block hidden transition-all duration-200">
                Order :
              </span> */}
              {items.length === 0 ? (
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              ) : (
                <>
                  <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
                  <span className="absolute bg-red-600 w-6 text-white text-[14px]  -top-0 mx-3 my-2 rounded-full grid place-items-center">
                    {items.length}
                  </span>
                </>
              )}
            </Link>
            {/* darkmode button */}
            <div>
              <DarkMode />
            </div>
            {/* nav link toggle */}
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="w-7 h-7 absolute right-3 top-3 cursor-pointer md:hidden "
            >
              {isOpen ? (
                <IoClose className="h-10 w-10 " />
              ) : (
                <IoMenu className="h-10 w-10 " />
              )}
            </div>
            {/* navlink togle end */}
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div className="flex justify-center bg:white">
        <ul
          className={`sm:flex pl-9 md:pl-5  items-center md:pb-0 pb-2 w-full absolute transition-all bg-white  text-black  duration-500 ease-in ${
            isOpen ? "top-14" : "top-[-490px]"
          }`}
        >
          {Menu.map((data) => (
            <li key={data.id}>
              <Link
                to={data.link}
                className="inline-block px-4 hover:text-primary duration-200 my-2"
              >
                {data.name}
              </Link>
            </li>
          ))}
          {/* simple dropdown */}
          {/* <li className="group relative cursor-pointer">
            <Link to="#" className="flex items-center gap-[2px] py-2 ">
              Trendings{" "}
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </Link>
            <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <Link
                      to={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                    >
                      {data.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

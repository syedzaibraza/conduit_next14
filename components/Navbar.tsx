import React from "react";

import Link from "next/link";

const navbarItems = [
  { title: "Home", link: "/" },
  { title: "Sign in", link: "/signin" },
  { title: "Sign up", link: "/signup" },
];

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 pl-10 sm:p-4">
        <a
          href="/"
          className="flex items-center sm:space-x-3 rtl:space-x-reverse sm:ml-[70px]"
        >
          <span className="text-green-500 text-sm sm:text-xl font-semibold tracking-tight">
            conduit
          </span>
        </a>
        <div className="md:block sm:mr-[70px] pr-10" id="navbar-default">
          <ul className="font-medium flex flex-row md:flex-row md:space-x-8 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 ">
            {navbarItems.map((item, index) => (
              <li key={index}>
                <Link href={item.link}>
                  <p className="block ml-2 text-xs sm:text-lg text-[#0000004D] rounded hover:text-gray-900 ">
                    {item.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

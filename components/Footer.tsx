import React from "react";

const Footer = () => {
  return (
    <footer className="... sticky bg-[#38434e] dark:bg-gray-800 bottom-0 hover:underline hover:text-white cursor-pointer">
      <div className="flex flex-row justify-center items-center p-2 sm:p-4 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 sm:w-6 sm:h-6"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.0001 0.332998C7.64482 0.330455 5.36563 1.16677 3.57097 2.69206C1.77631 4.21735 0.583499 6.33191 0.20631 8.65678C-0.170879 10.9817 0.292208 13.3649 1.51258 15.3793C2.73295 17.3938 4.63083 18.9078 6.8661 19.65C7.3661 19.742 7.5441 19.435 7.5441 19.173C7.5441 18.936 7.5341 18.156 7.5301 17.328C4.7731 17.928 4.1921 16.159 4.1921 16.159C4.01013 15.5597 3.62002 15.0451 3.0921 14.708C2.1921 14.093 3.1611 14.108 3.1611 14.108C3.47531 14.1513 3.77549 14.2658 4.03874 14.4427C4.30199 14.6197 4.52135 14.8544 4.6801 15.129C4.81438 15.3734 4.99578 15.5888 5.21383 15.7627C5.43187 15.9366 5.68223 16.0656 5.95042 16.1421C6.21861 16.2186 6.49931 16.2412 6.77629 16.2086C7.05327 16.176 7.32103 16.0888 7.5641 15.952C7.60831 15.4493 7.83151 14.9791 8.1931 14.627C5.9931 14.377 3.6781 13.527 3.6781 9.727C3.66442 8.74227 4.0304 7.79007 4.7001 7.068C4.39653 6.21348 4.43051 5.27532 4.7951 4.445C4.7951 4.445 5.6271 4.179 7.5211 5.461C9.1453 5.01701 10.8589 5.01701 12.4831 5.461C14.3731 4.179 15.2001 4.445 15.2001 4.445C15.5662 5.2747 15.602 6.21283 15.3001 7.068C15.9695 7.79011 16.3348 8.74245 16.3201 9.727C16.3201 13.534 14.0011 14.371 11.7951 14.616C12.0313 14.8562 12.2135 15.1441 12.3295 15.4604C12.4456 15.7766 12.4928 16.114 12.4681 16.45C12.4681 17.776 12.4561 18.844 12.4561 19.17C12.4561 19.433 12.6351 19.742 13.1371 19.645C15.3689 18.9 17.2628 17.3852 18.4802 15.3717C19.6975 13.3582 20.1588 10.9773 19.7815 8.6549C19.4043 6.33247 18.2131 4.22 16.421 2.69534C14.629 1.17069 12.353 0.333314 10.0001 0.332998Z"
            fill="#fff"
          />
        </svg>
        <span className="text-white text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl ml-1 sm:ml-3">
          Fork on GitHub
        </span>
      </div>
    </footer>
  );
};

export default Footer;
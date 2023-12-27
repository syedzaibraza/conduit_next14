"use client";

import React, { FC, useState } from "react";

interface propsType {
  data: any;
  itemsPerPage: number;
}
const Pagination: FC<propsType> = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (id: number) => {
    const isIdPresent = data.some((obj: any) => obj.id == id)
    console.log(isIdPresent)
    setIsClicked(isIdPresent);
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const paginatedData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const getPageNumbers = () => {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  };

  return (
    <div>
      {/* Display your paginated data here */}
      {paginatedData().map((user: any, index: number) => (
        <>
          <div
            key={index}
            className="max-w-full mx-auto bg-none rounded-xl overflow-hidden"
          >
            {/* First Row */}
            <div className="flex p-4">
              {/* Avatar */}
              <div className="flex-none w-12 h-12">
                <img
                  src="https://api.realworld.io/images/demo-avatar.png"
                  alt="Avatar"
                  className="w-6 h-6 sm:w-10 sm:h-10 rounded-full"
                />
              </div>
              {/* Name and Date */}
              <div className="flex-grow ml-[-20px] sm:ml-[-3px] mt-[-3px]">
                <div className="text-sm sm:text-lg text-[#5cb85c]">
                  {user.name}
                </div>
                <div className="text-xs text-[#bbb] mt-[-5px] sm:mt-[-7px]">
                  Fri Dec 09 2022
                </div>
              </div>
              {/* Heart Icon and Number */}
              <div className="flex-none">
                <div className="flex items-center">
                  <div
                    className={`flex flex-row spacing-4 border ${
                      isClicked
                        ? "bg-[#5cb85c] border-white"
                        : "bg-none border-[#5cb85c]"
                    } rounded-md p-1 sm:p-2 h-[25px] sm:h-[30px] cursor-pointer`}
                    onClick={() => handleClick(user.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="14"
                      viewBox="0 0 20 18"
                      fill="none"
                      className={`path-icon ${
                        isClicked ? "text-white" : "text-[#5cb85c]"
                      }`}
                    >
                      <path
                        d="M17.947 2.053C17.4507 1.55521 16.8588 1.16303 16.207 0.900086C15.5551 0.637139 14.8568 0.50887 14.154 0.523005C12.5982 0.594887 11.1217 1.23042 10 2.311C8.87269 1.22237 7.38915 0.57901 5.824 0.500005C5.12065 0.483279 4.42122 0.609455 3.76805 0.870895C3.11488 1.13233 2.52156 1.5236 2.024 2.021C0.108998 3.937 -0.291002 7.413 2.649 10.354L9.649 17.354C9.69544 17.4006 9.75062 17.4375 9.81136 17.4627C9.87211 17.4879 9.93723 17.5009 10.003 17.5009C10.0688 17.5009 10.1339 17.4879 10.1946 17.4627C10.2554 17.4375 10.3106 17.4006 10.357 17.354L17.357 10.354C18.6265 9.18646 19.3885 7.56835 19.48 5.846C19.4954 5.14281 19.3675 4.44384 19.1039 3.79172C18.8403 3.1396 18.4467 2.548 17.947 2.053Z"
                        fill={isClicked ? "#ffffff" : "#5cb85c"}
                      />
                    </svg>
                    <span
                      className={`text-${
                        isClicked ? "white" : "[#5cb85c]"
                      } ml-1 mt-[-6px]`}
                    >
                      {user.id}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="pl-4 mt-[-13px]">
              <div className="font-bold text-xs sm:text-xl">
                {user.company.catchPhrase}
              </div>
            </div>

            {/* Third Row */}
            <div className="">
              <p className="text-gray-700"></p>
            </div>

            {/* Fourth Row */}
            <div className="flex mb-5">
              {/* Read More Button */}
              <div className="flex-grow">
                <button className="text-gray-500 px-4 text-xs rounded cursor-pointer">
                  Read More ...
                </button>
              </div>
              {/* Tags */}
              <span className="border border-gray-300 text-xs text-gray-300 px-2 py-1 rounded rounded-3xl mr-3.5 cursor-pointer">
                Tag1
              </span>
            </div>
          </div>
          <div className="border-t border-[#dddddd] mt-[-2px] mb-1" />
        </>
      ))}

      {/* Pagination controls */}
      <div className="flex justify-center items-center mt-4">
        {getPageNumbers().map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={`${
              currentPage === number
                ? "bg-[#5cb85c] text-white border border-1 border-[#5cb85c] hover:underline hover:text-white"
                : "bg-none text-[#5cb85c] border border-1 border-[#dedede] hover:underline hover:text-[#5cb85c]"
            } text-xs p-1.5 sm:p-3 sm:pl-4 sm:pr-4`}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;

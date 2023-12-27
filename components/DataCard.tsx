import React, { FC } from "react";

interface propsType {
  data: any;
}
const DataCard: FC<propsType> = ({ data }) => {

  // console.log(data)
  return (
    <>
      {data.map((user: any, index: number) => (
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
                  className="w-10 h-10 rounded-full"
                />
              </div>
              {/* Name and Date */}
              <div className="flex-grow ml-[-3px]">
                <div className="text-lg text-[#5cb85c]">{user.name}</div>
                <div className="font-xs text-[#bbb] mt-[-7px]">Fri Dec 09 2022</div>
              </div>
              {/* Heart Icon and Number */}
              <div className="flex-none">
                <div className="flex items-center">
                  <div className="flex flex-row spacing-4 bg-none border-[#5cb85c] border-2 rounded-md p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="14"
                      viewBox="0 0 20 18"
                      fill="none"
                    >
                      <path
                        d="M17.947 2.053C17.4507 1.55521 16.8588 1.16303 16.207 0.900086C15.5551 0.637139 14.8568 0.50887 14.154 0.523005C12.5982 0.594887 11.1217 1.23042 10 2.311C8.87269 1.22237 7.38915 0.57901 5.824 0.500005C5.12065 0.483279 4.42122 0.609455 3.76805 0.870895C3.11488 1.13233 2.52156 1.5236 2.024 2.021C0.108998 3.937 -0.291002 7.413 2.649 10.354L9.649 17.354C9.69544 17.4006 9.75062 17.4375 9.81136 17.4627C9.87211 17.4879 9.93723 17.5009 10.003 17.5009C10.0688 17.5009 10.1339 17.4879 10.1946 17.4627C10.2554 17.4375 10.3106 17.4006 10.357 17.354L17.357 10.354C18.6265 9.18646 19.3885 7.56835 19.48 5.846C19.4954 5.14281 19.3675 4.44384 19.1039 3.79172C18.8403 3.1396 18.4467 2.548 17.947 2.053Z"
                        fill="#5cb85c"
                      />
                    </svg>
                    <span className="text-[#5cb85c] ml-1 mt-[-6px]">{user.id}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="pl-4 mt-[-13px]">
              <div className="font-bold text-xl">
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
                <button className="text-gray-500 px-4 py-2 rounded cursor-pointer">
                  Read More ...
                </button>
              </div>
              {/* Tags */}
              <div>
                <span className="border border-gray-300 text-gray-300 px-2 py-1 rounded rounded-3xl mr-2">
                  Tag1
                </span>
                <span className="border border-gray-300 text-gray-300 px-2 py-1 rounded rounded-3xl">
                  Tag2
                </span>
              </div>
            </div>
          </div>
          <div className="border-t border-[#dddddd] mt-[-2px] mb-10" />
        </>
      ))}
    </>
  );
};

export default DataCard;

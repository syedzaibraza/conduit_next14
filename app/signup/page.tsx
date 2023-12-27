import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="flex flex-col items-center h-[80vh] w-[40%]">
        <span className="text-4xl">Sign Up</span>
        <p className="text-[#5cb85c] mt-2">Have an account?</p>
        <input
          type="text"
          placeholder="Username"
          className="p-3 mt-3 text-lg rounded-md block w-full bg-white border border-gray-300"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-3 mt-3 text-lg rounded-md block w-full bg-white border border-gray-300"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 mt-3 text-lg rounded-md block w-full bg-white border border-gray-300"
        />
        <button className="float-right ml-auto mt-3 px-4 py-2 text-lg rounded-md text-white bg-[#5cb85c] border-[#5cb85c] inline-block font-normal leading-5 text-center whitespace-nowrap align-middle cursor-pointer select-none border-8">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default page;

import React from "react";

const MainBanner = () => {
  return (
    <div className="bg-[#5cb85c] w-full sm:h-[170px] flex flex-col items-center justify-center text-center p-3">
      <p className="text-white text-2xl sm:text-6xl font-extrabold">conduit</p>
      <p className="text-white text-xs sm:text-2xl sm:mt-2 font-thin">A place to share your knowledge.</p>
    </div>
  );
};

export default MainBanner;

import DataCard from "./DataCard";
import Pagination from "./Pagination";

const popularTags = [
  "welcome",
  "implementations",
  "introduction",
  "codebaseshow",
  "ipsum",
  "qui",
  "et",
  "cupitidate",
  "quia",
  "desernut",
];

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

const Content = async () => {
  const data = await fetchData();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 w-full h-full">
      <div className="sm:col-span-9">
        {/* <DataCard data={data} /> */}
        <Pagination data={data} itemsPerPage={5} />
      </div>
      <div className="bg-[#f3f3f3] rounded-sm col-span-1 sm:col-span-3 p-4 sm:h-[370px] md:h-[320px] lg:h-[240px] xl:h-[170px]">
        <p className="text-lg font-semibold">Popular Tags</p>
        <div className="flex flex-wrap mt-2">
          {popularTags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#818a91] hover:bg-gray-500 text-white text-xs font-medium me-2 mb-2 px-2.5 py-0.5 cursor-pointer rounded-full dark:bg-gray-700 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;

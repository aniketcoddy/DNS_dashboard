import Image from "next/image";
import React from "react";
import { data } from "../../data";
import { FaCaretDown } from "react-icons/fa";
import { LiaSitemapSolid } from "react-icons/lia";
import { BiSortAZ } from "react-icons/bi";
import { FaFilter } from "react-icons/fa6";
import { IoMdAddCircleOutline } from "react-icons/io";

const Table = () => {
  return (
    <main className="bg-white p-1 lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3 col-start-1 col-end-3 row-start-2 row-end-3 ">
      
      {/* brand adding option */}
      <div className="md:flex justify-between lg:border-2 hidden  xl:border-b-0 border-[#e3e5ec] py-2 items-center px-2">
        <div className="flex items-center gap-3">
          {folders.map((items) => {
            return (
              <div
                key={items.id}
                className="flex ring-2 p-1 ring-[#e3e5ec] rounded-md justify-between"
              >
                <div className="flex dropdown group w-full ">
                  <div
                    className={`flex cursor-pointer items-center gap-2 rounded-md justify-between`}
                  >
                    <div className="flex gap-2 items-center">
                      <span>{items.icon}</span>
                      <span className="text-sm font-semibold">
                        {items.title}
                      </span>
                    </div>

                    <span>
                      <FaCaretDown />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

          <div
            className={`flex cursor-pointer items-center gap-2 rounded-md justify-between`}
          >
            <div className="flex gap-2 ring-2 p-1 ring-[#e3e5ec] rounded-md items-center">
              <span>
                <BiSortAZ />
              </span>
              <span className="text-base font-semibold">Sort</span>
            </div>
            <div className="flex gap-2 ring-2 p-1 ring-[#e3e5ec] rounded-md items-center">
              <span>
                <FaFilter />
              </span>
              <span className="text-base font-semibold">Filter</span>
            </div>
          </div>
        </div>

        <div>
          <div className="flex gap-2">
            <div className="ring-2 p-1 items-center gap-2 rounded-md ring-[#e3e5ec] flex">
              <span>
                <IoMdAddCircleOutline />
              </span>
              <span className="text-base  font-semibold">Meeting</span>
            </div>
            <div className="ring-2 p-1 items-center gap-2 rounded-md ring-[#e3e5ec] flex">
              <span>
                <BiSortAZ />
              </span>
              <span className="text-base font-semibold">Import/Export</span>
            </div>
          </div>
        </div>
      </div>

      {/* table for bigger screens */}
      <table className="w-full hidden xl:block">
        <thead className=" border-2 border-[#e3e5ec]">
          <tr>
            <th className=" border-2 border-[#e3e5ec] w-40 p-2 text-sm font-semibold  tracking-wide text-left">
              Brand
            </th>
            <th className=" border-2 border-[#e3e5ec] p-2 w-70 text-sm font-semibold tracking-wide  text-left">
              Description
            </th>
            <th className=" border-2 border-[#e3e5ec] p-2 w-60 text-sm font-semibold tracking-wide text-left">
              Member
            </th>
            <th className=" border-2 border-[#e3e5ec] w-44 p-2 text-sm font-semibold tracking-wide text-left">
              Categories
            </th>
            <th className=" border-2 border-[#e3e5ec] p-2 w-56 text-sm font-semibold tracking-wide text-left">
              Tags
            </th>
            <th className=" border-2 border-[#e3e5ec] p-2 w-40 text-sm font-semibold tracking-wide text-left">
              Next Meeting
            </th>
          </tr>
        </thead>
        <tbody className="devide-y devide-gray-100">
          {data.map((items) => {
            return (
              <tr
                className="border-2 border-[#e3e5ec] items-center"
                key={items.id}
              >
                <td className="p-2  text-xs gap-2 2xl:w-56 xl:w-36 items-center text-gray-700 flex whitespace-nowrap">
                  <Image src={items.icon} alt="icon" width={20} height={20} />
                  <h1 className="font-semibold">{items.Brand}</h1>
                </td>
                <td className="p-2 border-2 border-[#e3e5ec] 2xl:w-56 xl:w-80 text-xs text-gray-700 ">
                  <h1 className="font-semibold">
                    {items.description.substring(0, 33) + "..."}
                  </h1>
                </td>

                <td className="p-2 text-sm ml-2 text-gray-700 flex items-center whitespace-nowrap relative">
                  <Image
                    src={items.user}
                    alt="icon"
                    width={30}
                    height={30}
                    className="absolute -top-1 left-0 rounded-full"
                  />
                  <Image
                    src={items.user}
                    alt="icon"
                    width={30}
                    height={30}
                    className="absolute -top-1 left-[18px] rounded-full"
                  />
                  <Image
                    src={items.user}
                    alt="icon"
                    width={30}
                    height={30}
                    className="absolute -top-1 left-[33px] rounded-full"
                  />
                  <Image
                    src={items.user}
                    alt="icon"
                    width={30}
                    height={30}
                    className="absolute -top-1 left-[48px] rounded-full"
                  />
                  <Image
                    src={items.user}
                    alt="icon"
                    width={30}
                    height={30}
                    className="absolute -top-1 left-[63px] rounded-full"
                  />
                  <Image
                    src={items.user}
                    alt="icon"
                    width={30}
                    height={30}
                    className="absolute -top-1 left-[78px] rounded-full"
                  />
                </td>

                <td className="p-2 border-2 border-[#e3e5ec] text-xs  text-gray-700 whitespace-nowrap">
                  <div className="flex gap-2">
                    {items.categories.map((category,index) => (
                      <h1 key={index} className="bg-yellow-100 p-1 text-yellow-500 border-yellow-400 border-2 font-semibold rounded-md">
                        {category}
                      </h1>
                    ))}
                  </div>
                </td>
                <td className="p-2 text-xs border-2 border-[#e3e5ec] text-black whitespace-nowrap">
                  <div className="flex gap-2">
                    {items.tags.map((tag,index) => (
                      <h1 key={index} className="bg-[#ecedef] p-1 font-semibold rounded-md">
                        {tag}
                      </h1>
                    ))}
                  </div>
                </td>
                <td className="p-2 text-xs text-gray-700 whitespace-nowrap">
                  <h1 className="bg-green-200 px-2 p-1 text-green-700 w-fit font-bold rounded-md">
                    {items.Meeting}
                  </h1>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* tables for responsive screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 m-3 xl:hidden">
        {data.map((item) => {
          return (
            <div className="p-4 rounded-lg gap-2 flex flex-col shadow-lg ">
              <div className="flex flex-col gap-3 text-sm">
                <div className="text-sm flex items-center gap-3 text-gray-700">
                  <Image src={item.icon} alt="icon" width={40} height={40} />
                  <h1 className="text-xl font-semibold">{item.Brand}</h1>
                </div>
                <div className="text-sm text-gray-700">
                  {" "}
                  <h1 className=" text-xs md:text-base font-semibold">
                    {item.description}
                  </h1>
                </div>
              </div>
              <div>
                <div className="flex gap-3 flex-col">
                  <div className="flex gap-2">
                    {item.categories.map((category) => (
                      <h1 className="bg-yellow-100 p-1 text-xs w-fit text-yellow-500 border-yellow-400 border-2 font-semibold rounded-md">
                        {category}
                      </h1>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <div className="text-sm text-gray-700 gap-3 flex">
                      {item.tags.map((tag) => (
                        <h1 className="bg-[#ecedef] p-1 w-fit font-semibold rounded-md">
                          {tag}
                        </h1>
                      ))}
                    </div>
                    <div className="flex">
                      <h1 className="bg-green-200 px-2 text-xs p-1 text-green-700 w-fit font-bold rounded-md">
                        {item.Meeting}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

const folders = [
  {
    id: 1,
    title: "All brands",
    icon: <LiaSitemapSolid />,
  },
  {
    id: 2,
    title: "Desk",
    icon: "",
  },
  {
    id: 3,
    title: "Tags",
    icon: "",
  },
];

export default Table;

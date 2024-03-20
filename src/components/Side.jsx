"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CiPen } from "react-icons/ci";
import { TbBrandReactNative } from "react-icons/tb";
import { PiSpeakerHigh } from "react-icons/pi";
import { VscCode } from "react-icons/vsc";
import { LuFolder } from "react-icons/lu";
import { FaCaretDown } from "react-icons/fa";
import { HiOutlineUserAdd } from "react-icons/hi";
import { IoMdHelpCircleOutline } from "react-icons/io";

const Side = () => {
  const [isOpenArray, setIsOpenArray] = useState(
    // usestate we use to for opening and closing of dropdown menu
    new Array(folderItem.length).fill(false)
  );

  // this is the toggle button for dropdown menu section where we are checking that the dropdown we are clicking is the same we need to open by double checking the unique id

  const toggleDropdown = (index) => {
    const updatedIsOpenArray = [...isOpenArray];
    updatedIsOpenArray[index] = !updatedIsOpenArray[index];
    setIsOpenArray(updatedIsOpenArray);
  };

  return (
    <slider className="border-2 border-[#e3e5ec] overflow-auto  rounded-md m-1 p-1 col-start-1 col-end-2 row-start-1 row-end-3 hidden lg:flex">
      <div>
        {/* logo conatiner */}
        <div className="flex gap-20 m-1 ring-[0.4px] rounded-md p-1 ring-[#cdcfcf]">
          {/* logo section */}
          <div className="flex gap-1 ">
            <div>
              <Image
                src="/logo.png"
                alt="dummy logo"
                width={35}
                height={35}
                className=" rounded-md ring-1 ring-black"
              />
            </div>
            {/* heading/title */}
            <div className="flex flex-col">
              <span className="text-xs text-[#626666]">INC</span>
              <h1 className="text-sm font-semibold">InnovateHub</h1>
            </div>
          </div>

          <div>
            <Image
              src="/user.jpg"
              alt="admin"
              width={35}
              height={35}
              className="rounded-full"
            />
          </div>
        </div>

        {/* team section */}
        <div className="flex flex-col w-full">
          <div className=" flex flex-col gap-4 mt-2 p-2 ring-[0.4px] rounded-md ring-[#cdcfcf]">
            {teams.map((items) => {
              return (
                <div
                  key={items.id}
                  className="flex justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <span>{items.icon}</span>
                    <h1 className="text-sm 2xl:text-base">{items.title}</h1>
                  </div>
                  <div className="flex items-center text-sm 2xl:text-base">
                    <TbBrandReactNative />
                    <p>{`+`}</p>
                    {items.id}
                  </div>
                </div>
              );
            })}
            <div className="flex items-center gap-2 py-4 border-t-[0.4px] cursor-pointer border-full border-[#e3e5ec]">
              <button className="text-sm 2xl:text-base text-black px-1 rounded-md bg-[#808282]">{`+`}</button>
              <h1 className="text-sm text-[#808282] 2xl:text-base">
                Create a team
              </h1>
            </div>
          </div>
        </div>

        {/* folder section   */}
        <div className=" flex flex-col p-2 mx-2 ">
          <div className="flex items-center gap-2 justify-between py-4 ">
            <h1 className="text-sm text-[#4f5151] 2xl:text-base">Folder</h1>
            <button className="text-xl text-[#4f5151] rounded-md 2xl:text-2xl ">{`+`}</button>
          </div>
          <div className="flex flex-col gap-4">
            {folders.map((items) => {
              return (
                <div key={items.id} className="flex justify-between">
                  <div className="flex flex-col dropdown group w-full ">
                    <div
                      className={`flex cursor-pointer rounded-md justify-between ${
                        isOpenArray[items.id]
                          ? "bg-[#ebeeee] , p-2 . text-black"
                          : "bg-white"
                      } group w-full gap-2`}
                      onClick={() => toggleDropdown(items.id)}
                    >
                      <div className="flex gap-2 items-center">
                        <span>
                          <LuFolder />
                        </span>
                        <span className="text-sm 2xl:text-base">
                          {items.title}
                        </span>
                      </div>

                      <span>
                        <FaCaretDown />
                      </span>
                    </div>

                    {isOpenArray[items.id] && (
                      <div className="top-full left-0 w-full">
                        <div className="text-black p-2">
                          <ul className="ml-4 cursor-pointer ">
                            {folderItem.map((data, key) => {
                              return (
                                <li
                                  className="flex text-xs rounded-md p-2 hover:bg-[#a2a5a5] md:text-sm"
                                  key={key}
                                >
                                  {data}
                                </li>
                              );
                            })}
                            <div className="flex items-center gap-2 px-2 py-2 ">
                              <button className="text-xs text-black p-1 rounded-md bg-[#cbcece]">{`+`}</button>
                              <h1 className="text-sm text-[#808282]">
                                Add new sub
                              </h1>
                            </div>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* footer section  */}
        <div className=" flex flex-col mt-8 gap-4 px-2">
          {/* invite teammates container */}
          <div className="flex justify-between cursor-pointer">
            <div className="flex items-center gap-2">
              <span>
                <HiOutlineUserAdd />
              </span>
              <h1 className="text-sm 2xl:text-base">Invite teammates</h1>
            </div>
          </div>

          {/* help container */}
          <div className="flex justify-between cursor-pointer">
            <div className="flex items-center gap-2">
              <span>
                <IoMdHelpCircleOutline />
              </span>
              <h1 className="text-sm 2xl:text-base">Help and first Step</h1>
            </div>
            <div className="text-sm text-black px-1 rounded-md bg-[#b6b8b8]">
              {`0/6`}
            </div>
          </div>

          {/* days container */}
          <div className="flex justify-between bg-[#b6b8b8] p-2 text-black cursor-pointer rounded-md">
            <div className="flex items-center text-xs gap-2 2xl:text-sm">
              <span className="bg-white p-1 rounded-md text-black">{`7`}</span>
              <h1 className="text-xs 2xl:text-sm">day left on trail</h1>
            </div>
            <div className="text-xs 2xl:text-sm text-white p-1 rounded-md bg-[#181919] ">
              Add Billing
            </div>
          </div>
        </div>
      </div>
    </slider>
  );
};

const teams = [
  {
    id: 1,
    icon: <CiPen />,
    title: "Design team",
  },
  {
    id: 2,
    icon: <PiSpeakerHigh />,
    title: "Marketing team",
  },
  {
    id: 3,
    icon: <VscCode />,
    title: "Development team",
  },
];

const folders = [
  {
    id: 1,
    title: "Product",
  },
  {
    id: 2,
    title: "Sales",
  },
  {
    id: 3,
    title: "Design",
  },
  {
    id: 4,
    title: "Office",
  },
  {
    id: 5,
    title: "Legal",
  },
];

const folderItem = ["Roadmap", "Feedback", "Performance", "Team", "Analytics"];

export default Side;

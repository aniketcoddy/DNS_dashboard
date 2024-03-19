"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { CiPen } from "react-icons/ci";
import { TbBrandReactNative } from "react-icons/tb";
import { PiSpeakerHigh } from "react-icons/pi";
import { VscCode } from "react-icons/vsc";
import { LuFolder } from "react-icons/lu";
import { FaCaretDown } from "react-icons/fa";
import { HiOutlineUserAdd } from "react-icons/hi";
import { IoMdHelpCircleOutline } from "react-icons/io";

const Sidebar = () => {
 
  const [open, setOpen] = useState(false);    // useState for responsive screen to open thats hamburger
 
  const [isOpenArray, setIsOpenArray] = useState(     // usestate we use to for opening and closing of dropdown menu
    new Array(folderItem.length).fill(false)
  );

  // this is the toggle button for dropdown menu section where we are checking that the dropdown we are clicking is the same we need to open by double checking the unique id

  const toggleDropdown = (index) => {
    const updatedIsOpenArray = [...isOpenArray];
    updatedIsOpenArray[index] = !updatedIsOpenArray[index];
    setIsOpenArray(updatedIsOpenArray);
  };

  // these are the variants of framer motion that we use in the code to make initial and final state of animation

  const topVariants = {
    closed: {
      rotate: 0,
    },

    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },

    opened: {
      opacity: 0,
    },
  };

  const lastVariants = {
    closed: {
      rotate: 0,
    },

    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: "-10",
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div>
      {/* container for navbar */}
      <div className="flex h-screen top-0 p-2 justify-between">
        {/* the logo */}
        <div className="flex gap-1 my-3">
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
          <div className="w-10 h-8 flex flex-col justify-between  relative">
            <span className="text-xs text-[#626666]">INC</span>
            <h1 className="text-sm font-semibold">InnovateHub</h1>
          </div>
        </div>

        {/* the hamburger */}
        <div className="lg:hidden">

          {/* responsive menu */}
          <button
            className="w-10 h-8 m-3 flex flex-col justify-between z-50 relative"
            onClick={() => setOpen(!open)}
          >
            <motion.div
              variants={topVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-black  rounded origin-left"
            ></motion.div>
            <motion.div
              variants={centerVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-black rounded"
            ></motion.div>
            <motion.div
              variants={lastVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-black rounded origin-left"
            ></motion.div>
          </button>

          {/* responsive menu black screen open */}
          {open && (
            <motion.div
              variants={listVariants}
              initial="closed"
              animate="opened"
              className="absolute bg-black overflow-x-hidden w-screen  text-white top-0 left-0 h-screen flex flex-col items-start gap-8 z-40"
            >
              {/* parent container */}
              <div className="flex flex-col w-full px-4">
                
                  {/* user section */}
                  <div className=" flex mt-12 justify-center">
                    <Image
                      src="/user.jpg"
                      alt="admin"
                      width={40}
                      height={40}
                      className="rounded-full md:w-20 md:h-20"
                    />
                  </div>

                  {/* teams items container */}
                  <div className=" flex flex-col mt-28 gap-4 p-2 mx-2 ring-[0.4px] rounded-b-lg ring-[#cdcfcf]">
                    {teams.map((items) => {
                      return (
                        <motion.div
                          variants={listItemVariants}
                          key={items.id}
                          className="flex justify-between cursor-pointer"
                        >
                          <div className="flex items-center gap-2">
                            <span>{items.icon}</span>
                            <h1 className="text-sm md:text-base">{items.title}</h1>
                          </div>
                          <div className="flex items-center text-sm md:text-base">
                            <TbBrandReactNative />
                            <p>{`+`}</p>
                            {items.id}
                          </div>
                        </motion.div>
                      );
                    })}
                    <div className="flex items-center gap-2  py-4 border-t-[0.4px] cursor-pointer border-full border-[#808282]">
                      <button className="text-sm md:text-base text-black px-1 rounded-md bg-[#808282]">{`+`}</button>
                      <h1 className="text-sm text-[#808282] md:text-base">Create a team</h1>
                    </div>
                  </div>
               

                {/* Folder container starts from here */}
                <div className=" flex flex-col p-2 mx-2 ">
                  <div className="flex items-center gap-2 justify-between py-4 ">
                    <h1 className="text-sm text-[#a2a5a5] md:text-base">Folder</h1>
                    <button className="text-xl text-white rounded-md md:text-2xl ">{`+`}</button>
                  </div>
                  <div className="flex flex-col gap-4">
                    {folders.map((items) => {
                      return (
                        <motion.div
                          variants={listItemVariants}
                          key={items.id}
                          className="flex justify-between"
                        >
                          <div className="flex flex-col dropdown group w-full  relative">
                            <div
                              className={`flex cursor-pointer rounded-md justify-between ${
                                isOpenArray[items.id]
                                  ? "bg-[#a2a5a5] , p-2 . text-black"
                                  : "bg-black"
                              } group w-full gap-2`}
                              onClick={() => toggleDropdown(items.id)}
                            >
                              <div className="flex gap-2 items-center">
                                <span>
                                  <LuFolder />
                                </span>
                                <span className="text-sm md:text-base">{items.title}</span>
                              </div>

                              <span>
                                <FaCaretDown />
                              </span>
                            </div>

                            {isOpenArray[items.id] && (
                              <div className="top-full left-0 w-full">
                                <div className=" shadow-md text-white p-2">
                                  <ul className="ml-4 cursor-pointer ">
                                    {folderItem.map((data, key) => {
                                      return (
                                        <li
                                          className="flex text-xs rounded-md p-2 hover:bg-[#a2a5a5] md:text-sm "
                                          key={key}
                                        >
                                          {data}
                                        </li>
                                      );
                                    })}
                                    <div className="flex items-center gap-2 px-2 py-2 ">
                                      <button className="text-xs text-black px-1 rounded-md bg-[#808282]">{`+`}</button>
                                      <h1 className="text-sm text-[#808282]">
                                        Add new sub
                                      </h1>
                                    </div>
                                  </ul>
                                </div>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* footer section of sidebar */}

                <div className=" flex flex-col mt-28 gap-4 p-2 mx-2 mb-7 ">
                  {/* invite teammates container */}
                  <motion.div
                    variants={listItemVariants}
                    className="flex justify-between cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <span>
                        <HiOutlineUserAdd />
                      </span>
                      <h1 className="text-sm md:text-base">Invite teammates</h1>
                    </div>
                  </motion.div>

                  {/* help container */}
                  <motion.div
                    variants={listItemVariants}
                    className="flex justify-between cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <span>
                        <IoMdHelpCircleOutline />
                      </span>
                      <h1 className="text-sm md:text-base">Help and first Step</h1>
                    </div>
                    <div className="text-sm text-black px-1 rounded-md bg-[#b6b8b8]">
                      {`0/6`}
                    </div>
                  </motion.div>

                  {/* days container */}
                  <motion.div
                    variants={listItemVariants}
                    className="flex justify-between bg-[#b6b8b8] p-2 text-black cursor-pointer rounded-md"
                  >
                    <div className="flex items-center text-xs gap-2 md:text-base">
                      <span className="bg-[#4c4d4d] p-1 rounded-md text-white">{`7`}</span>
                      <h1 className="text-sm md:text-base">day left on trail</h1>
                    </div>
                    <div className="text-sm text-white p-1 rounded-md bg-[#181919] ">
                      Add Billing
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
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

export default Sidebar;

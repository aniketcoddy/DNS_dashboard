"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { CiPen } from "react-icons/ci";
import { TbBrandReactNative } from "react-icons/tb";
import { PiSpeakerHigh } from "react-icons/pi";
import { VscCode } from "react-icons/vsc";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

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
      <div className="flex h-full top-0 p-2 justify-between">
        {/* the logo */}
        <div className="flex">
          <div>
            <Image
              src="/dummy.jpg"
              alt="dummy logo"
              width={30}
              height={30}
              className=" rounded-md"
            />
          </div>
          {/* heading/title */}
          <div>
            <span>INC</span>
            <h1>InnovateHub</h1>
          </div>
        </div>
        {/* the hamburger */}
        <div className="md:hidden">
          {/* responsive menu */}
          <button
            className="w-10 h-8 flex flex-col justify-between z-50 relative"
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

          {open && (
            <motion.div
              variants={listVariants}
              initial="closed"
              animate="opened"
              className="absolute bg-black w-screen text-white top-0 left-0 h-screen flex flex-col items-start gap-8  z-40"
            >
                {/* parent container */}
              <div className="flex flex-col w-full">
                {/* teams items container */}
                <div className=" flex flex-col mt-28 gap-4 p-2 mx-3 ring-[0.4px] rounded-b-lg ring-[#cdcfcf]">
                  {teams.map((items) => {
                    return (
                      <motion.div
                        variants={listItemVariants}
                        onClick={() => setOpen(!open)}
                        key={items.id}
                        className="flex justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <span>{items.icon}</span>
                          <h1 className="text-sm">{items.title}</h1>
                        </div>
                        <div className="flex items-center text-sm">
                          <TbBrandReactNative />
                          <p>{`+`}</p>
                          {items.id}
                        </div>
                      </motion.div>
                    );
                  })}
                  <div className="flex items-center gap-2  py-4 border-t-[0.4px] border-full border-[#a2a5a5]">
                    <button className="text-sm text-black px-1 rounded-md bg-[#a2a5a5]">{`+`}</button>
                     <h1 className="text-sm text-[#a2a5a5]">Create a team</h1>
                  </div>
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

export default Sidebar;

import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { IoSettingsOutline } from "react-icons/io5";
import Header from "@/components/Header";
import Side from "@/components/Side";
import Table from "@/components/Table";
import Sidebar from "@/components/Sidebar";

export default function Home() {


  return (
    <>
   <Header/>
   <Side/>
   <Sidebar/>
   <Table/>
     </>
  );
}

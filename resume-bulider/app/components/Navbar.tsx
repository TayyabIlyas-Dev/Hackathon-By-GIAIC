import React from 'react'
import Link from 'next/link'
import { TbHome } from "react-icons/tb";
import { RiContactsLine } from "react-icons/ri";
import { TiBookmark } from "react-icons/ti";
import { TbMoodSearch } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import { AiOutlineSearch } from 'react-icons/ai';
import { LuRectangleHorizontal } from "react-icons/lu";
import Buttons from './Buttons';
const Navbar = () => {
  return (
    <div>
       <nav className="w-full bg-black  bg-opacity-10 cursor-pointer  ">
      <div className="flex justify-between px-9 py-3 items-center">
        <div className="logo text-2xl font-extrabold font-kanit cursor-pointer text-[#4BA2F8]">My Resume</div>
     <div>
      <Buttons/>
     </div>
      </div>
      </nav>
    </div>
  )
}

export default Navbar

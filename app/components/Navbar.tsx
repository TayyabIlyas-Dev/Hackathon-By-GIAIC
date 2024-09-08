import React from 'react'
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

import React from 'react'
import Link from 'next/link'

const Buttons:React.FC = () => {
 
  return (
    <div>
    <button className='transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#3d91e6] shadow-lg border-solid border-2 border-[#4BA2F8] rounded-md py-1 sm:py-1.5 px-5 sm:px-7 text-[12px] font-bold text-white bg-[#45a1fd]'>
      <Link href='../ownCv'>
        Make your <br />own Cv ➜
      </Link>
    </button>
  </div>
  
  )
}

export default Buttons

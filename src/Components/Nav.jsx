import React, { useState } from 'react'
import { AiOutlineMenuFold } from "react-icons/ai";


const Nav = () => {
    const [menu ,setMenu]= useState(false)
    const HandleMenu=()=>{
        setMenu(!menu)
    }
  return (
    <>
    <div className='md:flex justify-between hidden text-white px-8 py-2 items-center bg-gray-700'>
        <h1 className='text-2xl'>Samo</h1>
        <ul className='flex space-x-3'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Resume</a></li>
        </ul>
        <button className='bg-cyan-600 text-white px-2 py-1 rounded'>Resume_⬇️</button>
    </div>


{/* // mobile */}
<div className='flex justify-between md:hidden'>
    <h1 className='text-2xl'>Samo</h1>
    <button onClick={HandleMenu}><AiOutlineMenuFold size={20}/></button>
</div>

{
    menu &&

    <div className='bg-gradient-to-b md:hidden from-cyan-600 to-gray-500'>
        <ul className='flex flex-col space-y-3'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Resume</a></li>
        </ul>
        <button className='bg-cyan-600 text-white px-2 py-1 rounded'>Resume_⬇️</button>
    </div>
}

</>
  )
}

export default Nav
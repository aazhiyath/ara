'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiAlignRight } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";

export default function Nav(){
  let [open,setOpen]=useState(false);
    return(
        <header onClick={()=>setOpen(!open)} className="px-4 pt-2 md:px-20 cursor-pointer md:flex justify-between z-50  sticky top-0    w-full bg-white">
          <div className="flex items-center ">
          <Link href={"/"}> <img className="w-96" src="ARA LOGO.jpg" alt="" /> </Link>
          {open?  <TfiClose size={40} className="md:hidden pl-1" /> :  <FiAlignRight size={44} className="md:hidden pl-1" />}
          </div>
          <nav className={`grid  md:flex md:static  md:top-auto absolute md:left-auto top-0 transition-all duration-1000 ease-in-out md:w-auto md:bg-white bg-white md:h-auto  w-1/2 h-screen text-lg font-medium max-w-screen-sm overflow-hidden ${open? 'left-0' : 'left-[-300PX]'} `}>
            <div className="grid md:flex md:h-auto h-12 gap-8 text-center pt-6 text-gray-500 md:text-black ">
            <Link href={'/'}>Home</Link>
            <Link href={'/product'}>About us</Link>
            <Link href={'/product'}>Products</Link>
            <Link href={'/product'}>Contact us</Link>
            </div>
          </nav>
        </header>
        
    );
}
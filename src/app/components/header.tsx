"use client"
import Image from "next/image";
import Link from "next/link";
import { FaCaretSquareRight, FaChartBar, FaFacebook, FaPinterest, FaSearch, FaTwitter } from "react-icons/fa";

import { PiHandbagLight } from "react-icons/pi";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header Section */}
      <header className="flex justify-between items-center px-12 py-4">
        {/* Logo */}
    <Image
    src="/logo.png"
    alt="logo"
    width={100}
    height={100}
    className="pt-3 items-center"/>

        {/* Navigation */}
        <nav className="flex space-x-8">
          <Link href="/" className="hover:text-yellow-500">Home</Link>
          <Link href="/Menu" className="hover:text-yellow-500">Menu</Link>
          <Link href="/Blog" className="hover:text-yellow-500">Blog</Link>
          <Link href="#" className="hover:text-yellow-500">Pages</Link>
          <Link href="/About" className="hover:text-yellow-500">About</Link>
          <Link href="#" className="hover:text-yellow-500">Shop</Link>
          <Link href="/Signup" className="hover:text-yellow-500">Contact</Link>
        </nav>

        {/* Search Bar */}
        <div className="relative flex items-center bg-black">
          <input
            type="text"
            placeholder="Search..."color="blue "
            className="px-4 py-2 rounded-full bg-black text-white outline-orange-700  "
          /><FaSearch/>
       <PiHandbagLight className=" ml-4  text-white text-2xl"/>
        </div>
      </header>




     
      <main className="relative flex flex-col md:flex-row items-center justify-between px-12 md:px-24 py-10">
     
       
        <div className="hidden md:flex flex-col items-center absolute left-10 top-35 space-y-6">
  
        <div className="w-1 h-40 bg-white">
         

          </div>
          <FaFacebook/>

<FaTwitter className="text-[#FF9F0D]"/>
<FaPinterest/>
<div className="w-1 h-40 bg-white">
    <div/>
               

               </div>
        </div>

        
        <div className="max-w-lg">
          <p className="text-[#FF9F0D] italic">So Quick & Charming!</p>
          <h1 className="text-5xl font-bold mt-2 leading-tight">
            The Art of speed <br />
            <span className="text-[#FF9F0D]">food Quality</span>
          </h1>
          <p className="text-gray-400 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            gravida dictum neque magna congue.
          </p>
          <button className="mt-6 px-6 py-3 bg-[#FF9F0D] text-black font-bold rounded-full hover:bg-[#FF9F0D]  sm:hidden w-190 md:block sm:px-3 md:px-7 sm:text-sm h-10">
            See Menu
          </button>
        </div>

        <div className="relative mt-10 md:mt-0 w-full md:w-[600px] h-[400px]">
         {/* //BG IMG */}
          <div className="absolute top-0 left-0 w-full h-full -z-10">
            <Image
              src="/leaf.png" 
              alt="Background Leaf"
              width={200}
              height={200}
              className="w-[70%] h-[20%] mr-[50%]"
              
              
            />
          </div>

          
          <div className="relative w-full h-full">
            <Image
              src="/Rectangle.png" 
              alt="Main Dish"
              width={200}
              height={200}
           
             className="w-[30%] h-[90px] mr-[30%]"
            />
          </div>

        
          <div className="absolute top-6 left-16 w-14 h-14 bg-white rounded-full flex items-center justify-center">
            <Image
              src="/main.png" 
              alt="Small Dish"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>


          <div className="absolute top-48 left-8 w-14 h-8  rounded-full flex items-center justify-center">
            <Image
              src="/dish2.png" 
              alt="Small Dish"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>




          <div className="absolute top-44 left-16 w-14 h-72  rounded-full flex items-center justify-center">
            <Image
              src="/main.png"
              alt="Small Dish"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>




          <div className="absolute top-44 left-24 w-14 h-96  rounded-full flex items-center justify-center ">
            <Image
              src="/mini.png" 
              alt="Small Dish"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

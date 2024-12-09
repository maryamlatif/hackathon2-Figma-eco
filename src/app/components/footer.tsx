import Image from "next/image";
import Link from "next/link";
import { PiClockClockwiseBold } from "react-icons/pi";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black">
      {/* First Section - Subscription */}
      <div className="bg-black px-[135px] py-[50px] text-white">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-white md:w-[50%] w-[100%]">
            <h2 className="text-[20px] md:text-[32px] font-semibold">
              <span className="text-[#FF9F0D]">St</span>ill Need Our Support?
            </h2>
            <p className="text-[10px] md:text-[16px] font-normal mt-[17px]">
              Donv&#39;t wait make a smart & logical quote here. It&#39;s pretty easy.
            </p>
          </div>
          <div className="flex md:mt-0 mt-[20px]">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="bg-[#FF9F0D] text-white py-[5px] px-[10px] md:py-[10px] md:px-[20px] mr-2"
            />
            <button className="text-[#FF9F0D] bg-white py-[5px] md:py-[10px] px-[10px] md:px-[20px]">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

    
      <hr className="my-4 border-[#FF9F0D] mx-[135px]" />

    
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[50px] px-0 md:px-[135px] py-6 lg:py-8">
          
    
          <div>
            <h2 className="mb-6 text-[24px] font-semibold dark:text-white text-[#FFFFFF] ">About Us.</h2>
            <p className="text-[#FFFFFF] text-[16px] font-normal">
              Corporate clients and leisure travelers have been relying on Groundlink for dependable, safe, and professional chauffeured car service in major cities across the world.
            </p>
            <div className="flex gap-[16.5px] mt-4">
              <div className="bg-[#FF9F0D] flex justify-center items-center w-[72px] h-[72px]">
                <PiClockClockwiseBold className="text-white text-[40px]" />
              </div>
              <div className="ml-1">
                <h2 className="text-[16px] text-[#FFFFFF] font-normal">Opening Hours</h2>
                <h3 className="text-[10px] font-normal text-[#FFFFFF]">Mon - Sat (8.00 - 6.00)</h3>
                <h3 className="text-[10px] font-normal text-[#FFFFFF]">Sunday - Closed</h3>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-[24px] font-semibold mr-6 text-white">Useful Links</h2>
            <ul className="text-[#FFFFFF] font-medium">
              <li className="mb-4"><a href="#" className="hover:underline">About</a></li>
              <li className="mb-4"><a href="#" className="hover:underline">News</a></li>
              <li className="mb-4"><a href="#" className="hover:underline">Partner</a></li>
              <li className="mb-4"><a href="#" className="hover:underline">Team</a></li>
              <li className="mb-4"><a href="#" className="hover:underline">Menu</a></li>
              <li className="mb-4"><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

        
          <div>
            <h2 className="mb-6 text-[24px] font-semibold mr-6 text-white">Help?</h2>
            <ul className="text-[#FFFFFF] font-medium">
              <li className="mb-4"><a href="#" className="hover:underline">FAQ</a></li>
              <li className="mb-4"><a href="#" className="hover:underline">Term & Conditions</a></li>
              <li className="mb-4"><a href="#" className="hover:underline">Reporting</a></li>
              <li className="mb-4"><a href="#" className="hover:underline">Documentation</a></li>
              <li className="mb-4"><a href="#" className="hover:underline">Support Policy</a></li>
              <li className="mb-4"><a href="#" className="hover:underline">Privacy</a></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-[24px] font-semibold mr-6 text-white">Recent Post</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-[14px]">
         
              <li className="flex gap-[16.5px]">
                <div className="ml-1">
                  <h2 className="text-[16px] text-[#FFFFFF] font-inter font-normal leading-[24px] opacity-[.49]">20 Feb 2022</h2>
                  <h3 className="text-[18px] font-normal text-left text-[#FFFFFF]">Keep Your Business</h3>
                </div>
              </li>
             
              <li className="flex gap-[16.5px]">
                <div className="ml-1">
                  <h2 className="text-[16px] text-[#FFFFFF] font-inter font-normal leading-[24px] opacity-[.49]">20 Feb 2022</h2>
                  <h3 className="text-[18px] font-normal text-left text-[#FFFFFF]">Keep Your Business</h3>
                </div>
              </li>
              <li className="flex gap-[16.5px]">
                <div className="ml-1">
                  
                  <h2 className="text-[16px] text-[#FFFFFF] font-inter font-normal leading-[24px] opacity-[.49]">20 Feb 2022</h2>
                  <h3 className="text-[18px] font-normal text-left text-[#FFFFFF]">Keep Your Business</h3>
                </div>
              </li>
            </ul>
          </div>
        </div>

    
        <div className="w-[100%] px-4 py-6 bg-[#FF9F0D] dark:bg-[#FF9F0D] md:flex md:items-center md:justify-between " >
          <span className="text-sm text-[#FFFFFF] sm:text-center">
            Copyright @ 2024 by Sufyan Khan. All Rights Reserved.
          </span>
          <div className="flex justify-center gap-[14px]">
            <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded">
              <FaFacebookF className="text-[#4F4F4F] text-[20px]" />
            </div>
            <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded">
              <FaTwitter className="text-[#4F4F4F] text-[20px]" />
            </div>
            <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded">
              <FaInstagram className="text-[#4F4F4F] text-[20px]" />
            </div>
            <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded">
              <FaYoutube className="text-[#FF9F0D] text-[20px]" />
            </div>
            <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded">
              <FaPinterest className="text-[#4F4F4F] text-[20px]" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

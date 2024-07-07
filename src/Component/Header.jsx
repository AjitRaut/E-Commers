import React from "react";
import { IoIosSearch } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { IoMdHelpBuoy } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { PiShoppingCartFill } from "react-icons/pi";
import { SiSwiggy } from "react-icons/si";

const Header = () => {
  return (
    <>
      <header className=" w-full  bg-slate-50 h-20 fixed top-0">
        <div className=" max-w-screen-xl m-auto h-full px-3 bg-slate-50 box shadow-sm flex justify-between font-serif">
          <div className="flex justify-center items-center">
            <SiSwiggy />
          </div>
          <div className="flex ">
            <ul className=" flex justify-center items-center gap-6 cursor-pointer ">
              <li className=" flex gap-1 items-center">
                <span>
                  <IoIosSearch />
                </span>
                Search
              </li>
              <li className=" flex gap-1 items-center">
                <span>
                  <BiSolidOffer />
                </span>
                Offers
              </li>
              <li className=" flex gap-1 items-center">
                <span>
                  <IoMdHelpBuoy />
                </span>
                Help
              </li>
              <li className=" flex gap-1 items-center">
                <span>
                  <FiUser />
                </span>
                Sign In
              </li>
              <li className=" flex gap-1 items-center">
                <span>
                  <PiShoppingCartFill />
                </span>
                Cart
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

import React from "react";
import { IoIosSearch } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { IoMdHelpBuoy } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { PiShoppingCartFill } from "react-icons/pi";
import { SiSwiggy } from "react-icons/si";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <>
      <header className=" w-full  bg-slate-50 h-20 fixed top-0">
        <div className=" max-w-screen-xl m-auto h-full px-3 bg-slate-50 box shadow-sm flex justify-between font-serif">
          <div className="flex justify-center items-center">
            <SiSwiggy className="text-amber-600 w-9 h-12" />
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
                <Link to="/help">Help</Link>
              </li>
              <li className=" flex gap-1 items-center">
                <span>
                  <FiUser />
                </span>
                <Link to="/Sign in">Sign In</Link>
              </li>
              <li className=" flex gap-1 items-center">
                <span>
                  <PiShoppingCartFill />
                </span>
                <Link to="/cart">Cart({cartItems.length})</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

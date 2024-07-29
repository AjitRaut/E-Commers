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
  const { normal_item, nested_items } = useSelector((store) => store.cart);
  return (
    <>
      <header className="w-full bg-slate-50 h-20 fixed top-0 shadow-sm z-50">
        <div className="max-w-screen-xl m-auto h-full px-3 flex justify-between items-center">
          <div className="flex justify-center items-center">
            <Link to={"/"}>
              <SiSwiggy className="text-amber-600 w-9 h-12" />
            </Link>
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
              <li className=" flex gap-1 items-center relative">
                <span>
                  {/* <PiShoppingCartFill /> */}
                  <span>
                    <svg
                      className="fill-white stroke-slate-600 stroke-2"
                      viewBox="-1 0 37 32"
                      height="25"
                      width="25"
                      fill="#686b78"
                    >
                      <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
                    </svg>
                  </span>
                  <span className="absolute top-0 left-1 text-sm  font-normal">
                    {" "}
                    {nested_items.length + normal_item.length}
                  </span>
                </span>

                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

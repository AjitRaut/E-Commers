import React from "react";
import svgImage from "../assets/logo.svg";

const Header = () => {
  return (
    <>
      <header className=" w-full  bg-slate-50 h-20 fixed top-0">
        <div className=" max-w-7xl m-auto h-full px-3 bg-slate-50 box shadow-sm flex justify-between font-serif">
          <div className="flex justify-center items-center">
            <img src={svgImage} alt="img" />
          </div>
          <div className="flex ">
            <ul className=" flex justify-center items-center gap-6 cursor-pointer ">
              <li>Search</li>
              <li>Offers</li>
              <li>Help</li>
              <li>Sign In</li>
              <li>Cart</li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

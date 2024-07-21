import React from "react";
import "./card.css";
import { IMG_URL } from "../Utils/Url";
import { IoMdStarOutline } from "react-icons/io";

const Card = (props) => {
  const {
    cloudinaryImageId,
    aggregatedDiscountInfoV3:discount,
    name,
    avgRating,
    cuisines,
    sla,
  } = props?.datt?.info;

  const header = discount?.header;
  const subHeader =discount?.subHeader;
  const slaString = sla?.slaString;
  
  return (
    <>
      <div className=" max-w-full ">
        <div className=" relative w-full my-2">
        <span className=" font-sans absolute left-4 text-xl text-white tracking-tighter bottom-1 font-bold">{header} {subHeader}</span>
          <img
            className=" w-full h-60 rounded-xl cursor-pointer"
            src={IMG_URL + cloudinaryImageId}
            alt="card-img"
          />
        </div>

        <div className="w-full">
          <div className=" w-full h-8 overflow-hidden font-bold from-neutral-800 text-lg">
            {name}
          </div>
          <div className=" flex gap-1 justify-start items-center">
            <div className=" h-5 w-5 bg-green-700 rounded-full">
            <IoMdStarOutline className=" h-5 w-5 border-none"/>

            </div>
            <span className="font-bold">{avgRating}</span>
            <span className="font-bold">{slaString}</span>
          </div>
          <div className="w-full h-7 overflow-hidden font-light text-lg font-serif from-stone-400">
            <p>{cuisines.join(", ")}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

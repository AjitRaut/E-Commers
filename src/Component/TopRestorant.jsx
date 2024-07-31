import React, { useState } from "react";
import { IMG_URL } from "../Utils/Url";
import { IoMdStarOutline } from "react-icons/io";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import UseMain from "../Utils/UseMain";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";

const TopRestorant = () => {
  const [Slideritem, SetSlideritem] = useState(0);
  const newdata = UseMain();
 

  if (
    !newdata ||
    !newdata.cards ||
    !newdata.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  ) {
    return <ShimmerUi />;
  }

  const restaurantInfo =
    newdata.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    console.log(restaurantInfo)

  if (!restaurantInfo || restaurantInfo.length === 0) {
    return <ShimmerUi />;
  }

  const Next = () => {
    if (restaurantInfo.length - 1 <= Slideritem) return false;
    SetSlideritem(Slideritem + 1);
  };

  const Prev = () => {
    if (Slideritem === 0) return false;
    SetSlideritem(Slideritem - 1);
  };

  return (
    <>
      <div className="max-w-6xl overflow-hidden mt-40 m-auto ">
        <div className="flex justify-between">
          <h1 className="font-serif font-bold text-xl">
            Top restaurant chains in Nagpur
          </h1>
          <div>
            <button onClick={Prev}>
              <GoArrowLeft className="h-8 w-8 bg-slate-200 rounded-full p-2 inline mr-2" />
            </button>
            <button onClick={Next}>
              <GoArrowRight className="h-8 w-8 bg-slate-200 rounded-full p-2 inline" />
            </button>
          </div>
        </div>
        <div className="flex gap-[45px]">
          {restaurantInfo.map((restaurant, index) => {
            const {
              cloudinaryImageId,
              aggregatedDiscountInfoV3: discount,
              name,
              avgRating,
              cuisines,
              areaName ,
              sla,
            } = restaurant.info;

            const header = discount?.header || "";
            const subHeader = discount?.subHeader || "";
            const slaString = sla?.slaString || "";
            const cuisineList = cuisines?.join(", ") || "N/A";

            return (
              <Link to={"/restaurants/" + restaurant.info.id}>
                <div
                  key={index}
                  className="my-4"
                  style={{ transform: `translateX(-${Slideritem * 100}%)` }}
                >
                  <div className="relative my-2">
                    <div className="w-[273px] h-[175px] relative">
                      <img
                        className="w-full h-[182px] rounded-xl cursor-pointer object-cover"
                        src={IMG_URL + cloudinaryImageId}
                        alt="card-img"
                      />
                      <div className="absolute bottom-[-7px] left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent rounded-b-xl"></div>
                      <span className="font-sans absolute left-4 bottom-0 text-xl text-white tracking-tighter font-black shadow-lg">
                        {header} {subHeader}
                      </span>
                    </div>
                  </div>
              
                    <div className="font-bold text-lg from-neutral-800 truncate w-[270px]">
                      {name}
                    </div>
                    <div className="flex gap-1 justify-start items-center">
                      <div className="h-5 w-5 bg-green-700 rounded-full flex items-center justify-center">
                        <IoMdStarOutline className="h-5 w-5 text-white" />
                      </div>
                      <span className="font-bold">{avgRating}</span>
                      <span className="font-bold">{slaString}</span>
                    </div>
                    <div className="text-base">
                      <p className="truncate w-[270px] text-brand font-semibold">{cuisineList}</p>
                      <p className="truncate w-[270px] text-brand font-semibold">{areaName
                      }</p>
                    </div>
                  </div>
                
              </Link>
            );
          })}
        </div>
        <hr className="my-7 border border-solid" />
      </div>
    </>
  );
};

export default TopRestorant;

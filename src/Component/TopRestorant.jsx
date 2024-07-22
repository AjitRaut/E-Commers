import React from "react";
import { IMG_URL } from "../Utils/Url";
import { IoMdStarOutline } from "react-icons/io";
import UseMain from "../Utils/UseMain";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";


const TopRestorant = () => {
  const newdata = UseMain();
  console.log(newdata?.cards);

  if (
    !newdata ||
    !newdata.cards ||
    !newdata.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  ) {
    return <ShimmerUi />; // Display a shimmer or loading UI if data is not available
  }
  const Next = () => {
    if (data.length - 8 <= Slideritem) return false;
    SetSlideritem(Slideritem + 3);
  };

  const Prev = () => {
    if (Slideritem === 0) return false;
    SetSlideritem(Slideritem - 3);
  };

  const restaurantInfo =
    newdata.cards[1].card.card.gridElements.infoWithStyle.restaurants;

  if (!restaurantInfo || restaurantInfo.length === 0) {
    return <ShimmerUi />; // Display a shimmer or loading UI if no restaurant info is available
  }

  return (
    <>
   
      <div className="max-w-6xl overflow-hidden mt-24 m-auto ">
        
      <div className="flex justify-between">
          <h1 className="font-serif font-bold text-xl ml-8">
            What's on your mind?
          </h1>
          <div className="mr-6">
            <button onClick={Prev}>
              <GoArrowLeft className="h-8 w-8 bg-slate-200 rounded-full p-2 inline mr-2" />
            </button>
            <button onClick={Next}>
              <GoArrowRight className="h-8 w-8 bg-slate-200 rounded-full p-2 inline mr-6" />
            </button>
          </div>
        </div>
          <div className=" flex gap-10">
        {restaurantInfo.map((restaurant, index) => {
          const {
            cloudinaryImageId,
            aggregatedDiscountInfoV3: discount,
            name,
            avgRating,
            cuisines,
            sla,
          } = restaurant.info;

          const header = discount?.header || "";
          const subHeader = discount?.subHeader || "";
          const slaString = sla?.slaString || "";
          const cuisineList = cuisines?.join(", ") || "N/A";

          return (
            <div key={index}>
              <div className="relative my-2">
                <span className="font-sans absolute left-4 text-xl text-white tracking-tighter bottom-1 font-bold">
                  {header} {subHeader}
                </span>
                <div className="w-[273px] h-[182px]">
                  <img
                    className="w-full h-[182px] rounded-xl cursor-pointer object-cover"
                    src={IMG_URL + cloudinaryImageId}
                    alt="card-img"
                  />
                </div>
              </div>

              <div className="">
                <div className=" font-bold text-lg from-neutral-800">
                  <Link to={"/restaurants/" + restaurant.info.id}>{name}</Link>
                </div>
                <div className="flex gap-1 justify-start items-center">
                  <div className="h-5 w-5 bg-green-700 rounded-full flex items-center justify-center">
                    <IoMdStarOutline className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-bold">{avgRating}</span>
                  <span className="font-bold">{slaString}</span>
                </div>
                <div className="w-full h-7 overflow-hidden font-light text-lg font-serif from-stone-400">
                  <p>{cuisineList}</p>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </>
  );
};

export default TopRestorant;

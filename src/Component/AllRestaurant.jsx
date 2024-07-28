import React from 'react'
import UseMain from '../Utils/UseMain'
import ShimmerUi from './ShimmerUi';
import { IoMdStarOutline } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IMG_URL } from '../Utils/Url';

const AllRestaurant = () => {
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

  
  return (
    <>
    <div className="max-w-6xl overflow-hidden m-auto ">
      <div className="flex justify-between">
        <h1 className="font-serif font-bold text-xl">
        Restaurants with online food delivery in Nagpur
        </h1>
      </div>
      <div className=" grid grid-cols-4">
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
            <Link to={"/restaurants/" + restaurant.info.id}>
              <div
                key={index}
                className="my-4"
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
                <div className="">
                  <div className="font-bold text-lg from-neutral-800">
                    {name}
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
            </Link>
          );
        })}
      </div>
    </div>
  </>
  )
}

export default AllRestaurant

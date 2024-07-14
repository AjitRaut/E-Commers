import React from "react";
import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useProductMenu from "../Utils/useProductMenu";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import "./card.css";

const ProductsMenu = () => {
  const { infoId } = useParams();
  const pmenu = useProductMenu(infoId);

  const [Slideritem, SetSlideritem] = useState(0);

  const Next = () => {
    if (pmenu.length - 8 === Slideritem) return false;
    SetSlideritem(Slideritem + 3);
  };
  const Prev = () => {
    if (pmenu === 0) return false;
    SetSlideritem(Slideritem - 3);
  };

  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
    sla,
    feeDetails,
  } = pmenu?.cards[2]?.card?.card?.info;


  const slaString = sla?.slaString;
  const message = feeDetails?.message;

  return (
    <>
      {pmenu.length === 0 ? (
        <ShimmerUi />
      ) : (
        <div className="mt-12 w-full">
          <div className=" max-w-3xl m-auto flex place-items-center">
            <div className=" ml-14 w-full ">
              <div className="p-3 mt-20">
                <h1 className="font-bold text-2xl">{name}</h1>
              </div>
              <div className="pmenu-content">
                <div className=" p-3 bg-white border-solid border-2  border-slate-200 rounded-xl">
                  <span className=" font-bold">{avgRating}</span>
                  <span className=" font-bold">({totalRatingsString})</span>
                  <span className=" m-2 font-serif text-center text-xl text-slate-400 leading-4">
                    .
                  </span>
                  <span className=" font-bold">{costForTwoMessage}</span>
                  <div className=" text-orange-600 font-medium text-sm">
                    {cuisines.join(" ,")}
                  </div>
                  <div className="flex place-items-center">
                    <div></div>
                    <span className=" font-bold"> Outlet</span>
                    <span className=" ml-3 text-sm text-center text-slate-400">
                      {areaName}
                    </span>
                  </div>
                  <div className=" lowercase text-sm font-semibold ">
                    {slaString}
                  </div>
                  <hr className="mt-4" />
                  <div
                    className="text-sm text-slate-500 leading-9"
                    dangerouslySetInnerHTML={{ __html: message }}
                  />
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between place-items-center" > 
                  <h1 className="font-bold text-xl"> Deals For You</h1>
                  <div>
                  <button onClick={Prev}>
                  <GoArrowLeft className=" h-8 w-8 bg-slate-200 rounded-full p-2 inline mr-2" />
                </button>
                <button onClick={Next}>
                  <GoArrowRight className=" h-8 w-8 bg-slate-200 rounded-full p-2 inline" />
                </button>
                  </div>
                </div>
                <div>
                  <div className="flex">
                  <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductsMenu;

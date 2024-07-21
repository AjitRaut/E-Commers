import React from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useProductMenu from "../Utils/useProductMenu";

const Offers = () => {
  const { infoId } = useParams();
  const pmenu = useProductMenu(infoId);

  const [Slideritem, SetSlideritem] = useState(0);

  const offers =
    pmenu?.cards?.[3]?.card?.card?.gridElements?.infoWithStyle?.offers || [];

  const Next = () => {
    if (offers.length - 2 <= Slideritem) return false;
    SetSlideritem(Slideritem + 1);
  };
  const Prev = () => {
    if (Slideritem === 0) return false;
    SetSlideritem(Slideritem - 1);
  };

  return (
    <>
      <div className="p-4">
        <div className="flex justify-between place-items-center">
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
          {/* Offers Section */}
          <div className="flex mt-3 overflow-hidden">
            <div className=" flex gap-4 ">
              {offers.map((offer, index) => (
                <div
                  className=" p-2 border-solid border-2 flex border-slate-200 rounded-xl cursor-pointer"
                  key={index}
                  style={{ transform: `translateX(-${Slideritem * 100}%)` }}
                >
                  <div className="w-[320px] flex flex-col">
                    <div className="text-lg font-bold">{offer.info.header}</div>

                    {/* <div>{offer.info.expiryTime}</div> */}
                    <div className="text-sm font-bold text-slate-500">
                      {offer.info.couponCode}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Offers Section end */}
        </div>
      </div>
    </>
  );
};

export default Offers;

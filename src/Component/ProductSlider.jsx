import React, { useState, useEffect } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import UseMain from "../Utils/UseMain";
import { SliderIMG_URL } from "../Utils/Url";
import { Link } from "react-router-dom";

const ProductSlider = () => {
  const [Slideritem, SetSlideritem] = useState(0);
  const newdata = UseMain();

  const data =
    newdata?.cards?.[0]?.card?.card?.gridElements?.infoWithStyle?.info || [];

  const Next = () => {
    if (data.length - 8 <= Slideritem) return false;
    SetSlideritem(Slideritem + 3);
  };

  const Prev = () => {
    if (Slideritem === 0) return false;
    SetSlideritem(Slideritem - 3);
  };

  return (
    <div className="mt-24 w-full h-32">
      <div className="max-w-6xl m-auto overflow-hidden">
        <div className="flex justify-between">
          <h1 className="font-serif font-bold text-xl">What's on your mind?</h1>
          <div className="">
            <button onClick={Prev}>
              <GoArrowLeft className="h-8 w-8 bg-slate-200 rounded-full p-2 inline mr-2" />
            </button>
            <button onClick={Next}>
              <GoArrowRight className="h-8 w-8 bg-slate-200 rounded-full p-2 inline" />
            </button>
          </div>
        </div>

        <div className="flex gap-4 pl-4">
          {data.map((datt, index) => (
            <Link to={"/restaurant/" + datt.id}>
              <div className="w-[144px] h[192px]">
                <img
                  style={{ transform: `translateX(-${Slideritem * 100}%)` }}
                  className="w-[144px] h-46 cursor-pointer"
                  key={index}
                  src={`${SliderIMG_URL}${datt.imageId}`}
                  alt="slider"
                />
              </div>
            </Link>
          ))}
        </div>
        <hr className="my-10 border border-solid" />
      </div>
    </div>
  );
};

export default ProductSlider;

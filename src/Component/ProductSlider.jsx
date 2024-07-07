import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { SliderIMG_URL } from "../Utils/Url";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const ProductSlider = () => {
  {
    const [newdata, setnewdata] = useState([]);
    const [Slideritem, SetSlideritem] = useState(0);

    const Next = () => {
      if (newdata.length - 8 === Slideritem) return false;
      SetSlideritem(Slideritem + 3);
    };
    const Prev = () => {
      if (Slideritem === 0) return false;
      SetSlideritem(Slideritem - 3);
    };

    useEffect(() => {
      axios
        .get(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.145923&lng=79.08762999999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )
        .then((res) => {
          console.log(res);
          setnewdata(
            res?.data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle
              ?.info
          );
        });
    }, []);

    return (
      <>
        <div className=" mt-24 w-full h-32">
          <div className="max-w-6xl m-auto overflow-hidden">
            <div className=" flex justify-between">
              <h1 className=" font-serif font-bold text-xl ml-8 ">
                What's on your mind?
              </h1>
              <div className=" mr-6">
                <button onClick={Prev}>
                  <GoArrowLeft className=" h-8 w-8 bg-slate-200 rounded-full p-2 inline mr-2" />
                </button>
                <button onClick={Next}>
                  <GoArrowRight className=" h-8 w-8 bg-slate-200 rounded-full p-2 inline mr-6" />
                </button>
              </div>
            </div>

            <div className=" flex ">
              {newdata.map((datt) => {
                return (
                  <img
                    style={{ transform: `translateX(-${Slideritem * 100}%)` }}
                    className=" w-36 h-46"
                    key={datt.imageId}
                    src={`${SliderIMG_URL}${datt.imageId}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default ProductSlider;

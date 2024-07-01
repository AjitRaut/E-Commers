import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { SliderIMG_URL } from "../Utils/Url";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const ProductSlider = () => {
  {
    const [newdata, setnewdata] = useState([]);

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
        <div className=" mt-28 w-full h-auto">
          <div className="max-w-6xl m-auto h-full overflow-hidden">
            <div>
              <GoArrowLeft className=" h-8 w-8 bg-slate-300 rounded-full p-2 inline" />

              <GoArrowRight className=" h-8 w-8 bg-slate-300 rounded-full p-2 inline" />
            </div>
            <div className=" flex ">
              {newdata.map((datt, index) => {
                return (
                  <img
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

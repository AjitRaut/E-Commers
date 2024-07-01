import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { SliderIMG_URL } from "../Utils/Url";

const Slider = () => {
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
      <div className=" my-28">
        <div>
          {newdata.map((datt, index) => {
            return <img key={datt.imageId} src={`${SliderIMG_URL}${datt.imageId}`}></img>;
          })}
        </div>
      </div>
    </>
  );
};

export default Slider;
